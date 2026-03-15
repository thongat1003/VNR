import { GoogleGenAI, type Content } from '@google/genai';
import type { Locale } from '@/i18n/config';
import type { ChatbotReply } from '@/lib/chatbot';
import { getChatbotContextBundle } from '@/lib/chatbot';
import { resolveLiveFactReply } from '@/lib/live-facts';
import type { ChatbotResponseStyle } from '@/types/chatbot';

export type ChatbotHistoryItem = {
  role: 'user' | 'assistant';
  content: string;
};

type GenerateGeminiChatbotReplyOptions = {
  locale: Locale;
  message: string;
  currentPath?: string;
  history?: ChatbotHistoryItem[];
  responseStyle?: ChatbotResponseStyle;
};

type GeminiAttemptFailure = {
  model: string;
  message: string;
  statusCode?: number;
  status?: string;
  retryAfterSeconds?: number;
};

const chatbotTimeZone = 'Asia/Bangkok';

function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY?.trim() || process.env.GOOGLE_API_KEY?.trim() || '';
}

function createGeminiClient() {
  const apiKey = getGeminiApiKey();
  return apiKey ? new GoogleGenAI({ apiKey }) : null;
}

function getConfiguredChatbotModel() {
  return process.env.GEMINI_CHATBOT_MODEL?.trim() || 'gemini-1.5-pro-latest';
}

function getChatbotModelCandidates() {
  return Array.from(
    new Set([
      getConfiguredChatbotModel(),
      'gemini-1.5-pro-latest',
      'gemini-1.5-flash-latest',
      'gemini-2.0-flash-exp'
    ])
  );
}

function parseRetryAfterSeconds(message: string) {
  const match = message.match(/Please retry in\s+([0-9.]+)s/i);

  if (!match) {
    return undefined;
  }

  const seconds = Number(match[1]);
  return Number.isFinite(seconds) ? Math.max(1, Math.ceil(seconds)) : undefined;
}

function parseGeminiFailure(model: string, error: unknown): GeminiAttemptFailure {
  const fallbackMessage = error instanceof Error && error.message.trim().length > 0 ? error.message.trim() : 'Unknown Gemini error.';
  const failure: GeminiAttemptFailure = {
    model,
    message: fallbackMessage
  };

  if (typeof error === 'object' && error !== null && 'status' in error && typeof error.status === 'number') {
    failure.statusCode = error.status;
  }

  const jsonMatch = fallbackMessage.match(/\{[\s\S]*\}$/);
  const payloadText = jsonMatch?.[0];

  if (!payloadText) {
    failure.retryAfterSeconds = parseRetryAfterSeconds(fallbackMessage);
    return failure;
  }

  try {
    const parsed = JSON.parse(payloadText) as {
      error?: {
        code?: number;
        message?: string;
        status?: string;
      };
    };

    if (parsed.error?.code) {
      failure.statusCode = parsed.error.code;
    }

    if (parsed.error?.status) {
      failure.status = parsed.error.status;
    }

    if (parsed.error?.message) {
      failure.message = parsed.error.message.trim();
      failure.retryAfterSeconds = parseRetryAfterSeconds(parsed.error.message);
    }
  } catch {
    failure.retryAfterSeconds = parseRetryAfterSeconds(fallbackMessage);
  }

  return failure;
}

function isQuotaFailure(failure: GeminiAttemptFailure) {
  return failure.statusCode === 429 || failure.status === 'RESOURCE_EXHAUSTED';
}

function isInvalidApiKeyFailure(failure: GeminiAttemptFailure) {
  return (
    failure.message.toLowerCase().includes('api key expired') ||
    failure.message.includes('API_KEY_INVALID') ||
    (failure.statusCode === 400 && failure.status === 'INVALID_ARGUMENT')
  );
}

function summarizeFailure(locale: Locale, failure: GeminiAttemptFailure) {
  if (isInvalidApiKeyFailure(failure)) {
    return locale === 'vi'
      ? 'API key Gemini hien tai da het han hoac khong con hop le'
      : 'the current Gemini API key is expired or no longer valid';
  }

  if (isQuotaFailure(failure)) {
    if (locale === 'vi') {
      return failure.retryAfterSeconds
        ? `khoa Gemini hien da vuot quota; co the thu lai sau khoang ${failure.retryAfterSeconds} giay hoac doi sang key/goi co billing`
        : 'khoa Gemini hien da vuot quota cua goi hien tai';
    }

    return failure.retryAfterSeconds
      ? `the current Gemini key has exceeded quota; retry in about ${failure.retryAfterSeconds} seconds or switch to a billed key`
      : 'the current Gemini key has exceeded its available quota';
  }

  if (failure.statusCode === 404 || failure.status === 'NOT_FOUND') {
    return locale === 'vi'
      ? `model ${failure.model} khong ho tro generateContent tren key/API hien tai`
      : `model ${failure.model} is not available for generateContent with the current key/API`;
  }

  return locale === 'vi'
    ? `Gemini loi o model ${failure.model}: ${failure.message}`
    : `Gemini failed on model ${failure.model}: ${failure.message}`;
}

function getCurrentDateContext(locale: Locale) {
  const longDate = new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-US', {
    timeZone: chatbotTimeZone,
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date());

  const year = new Intl.DateTimeFormat('en-US', {
    timeZone: chatbotTimeZone,
    year: 'numeric'
  }).format(new Date());

  if (locale === 'vi') {
    return `Ngay hien tai theo mui gio ${chatbotTimeZone} la ${longDate}. Nam hien tai la ${year}. Khi nguoi dung hoi cac cum nhu "hien nay", "bay gio", "nam nay", hay hieu theo moc thoi gian nay.`;
  }

  return `The current date in ${chatbotTimeZone} is ${longDate}. The current year is ${year}. Interpret phrases like "currently", "now", and "this year" using this date.`;
}

function sanitizeHistory(history: ChatbotHistoryItem[] | undefined): Content[] {
  if (!history) {
    return [];
  }

  const validItems = history
    .filter((item) => (item.role === 'user' || item.role === 'assistant') && item.content.trim().length > 0)
    .map((item) => ({
      role: item.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: item.content.trim() }]
    }));

  const alternating: Content[] = [];
  let expectedRole: 'model' | 'user' = 'model';

  for (let i = validItems.length - 1; i >= 0; i--) {
    const item = validItems[i];
    if (item.role === expectedRole) {
      alternating.unshift(item);
      expectedRole = expectedRole === 'model' ? 'user' : 'model';
    }
  }

  if (alternating.length > 0 && alternating[0].role === 'model') {
    alternating.shift();
  }

  const result = alternating.slice(-6);
  if (result.length > 0 && result[0].role === 'model') {
    result.shift();
  }

  return result;
}

function buildContextQuery(message: string, history: ChatbotHistoryItem[] | undefined) {
  const recentUserTurns =
    history?.filter((item) => item.role === 'user').slice(-2).map((item) => item.content.trim()).filter(Boolean) ?? [];

  return [...recentUserTurns, message.trim()].join('\n');
}

function getUnifiedFallback(
  locale: Locale,
  museumFallback: ChatbotReply,
  issue?: 'missing_api_key' | 'invalid_api_key' | 'quota_exceeded' | 'model_failed',
  detail?: string
): ChatbotReply {
  if (locale === 'vi') {
    const issueText =
      issue === 'missing_api_key'
        ? 'Hien chua co GEMINI_API_KEY hop le trong moi truong server.'
        : issue === 'invalid_api_key'
          ? `API key Gemini hien tai da het han hoac khong con hop le${detail ? ` (${detail})` : ''}.`
        : issue === 'quota_exceeded'
          ? `khoa Gemini hien da vuot quota${detail ? ` (${detail})` : ''}.`
        : issue === 'model_failed'
          ? `Gemini dang loi khi xu ly yeu cau nay${detail ? `: ${detail}` : '.'}`
          : 'Hien chua lay duoc phan hoi tu Gemini.';

    return {
      answer: `Toi la tro ly lich su va bao tang, nhung ${issueText} Luc nay toi chi nen goi y theo du lieu san co, khong doan rong them neu chua co phan hoi tu mo hinh.`,
      suggestions: [
        'Dang Cong san Viet Nam thanh lap trong boi canh nao?',
        'Tom tat lich su Viet Nam tu 1930 den nay',
        'Vai tro cua Le Duan trong lich su Dang la gi?',
        'Bao tang 3D co gi?'
      ],
      pages: museumFallback.pages,
      sources: museumFallback.sources
    };
  }

  const issueText =
    issue === 'missing_api_key'
      ? 'there is no valid GEMINI_API_KEY configured on the server'
      : issue === 'invalid_api_key'
        ? `the current Gemini API key is expired or no longer valid${detail ? ` (${detail})` : ''}`
      : issue === 'quota_exceeded'
        ? `the current Gemini key has exceeded quota${detail ? ` (${detail})` : ''}`
      : issue === 'model_failed'
        ? `Gemini failed while processing this request${detail ? `: ${detail}` : ''}`
        : 'Gemini is not responding right now';

  return {
    answer: `I am a unified history and museum assistant, but ${issueText}. In this state I should rely on the available site context and avoid broad unsupported guesses.`,
    suggestions: [
      'What was the context for the founding of the Communist Party of Vietnam?',
      'Summarize Vietnamese history from 1930 to the present',
      'What was Le Duan role in Party history?',
      'What is in the 3D museum?'
    ],
    pages: museumFallback.pages,
    sources: museumFallback.sources
  };
}

function getResponseStyleInstruction(locale: Locale, responseStyle: ChatbotResponseStyle) {
  if (locale === 'vi') {
    return responseStyle === 'detailed'
      ? 'Che do tra loi hien tai la chi tiet. Co the tra loi dai hon, chia y ro hon, va neu can thi trinh bay theo cac muc ngan.'
      : 'Che do tra loi hien tai la ngan gon. Uu tien cau tra loi suc tich, tap trung vao y chinh, tranh lan man.';
  }

  return responseStyle === 'detailed'
    ? 'The current answer style is detailed. You may answer at greater length, use clearer sectioning, and expand key points when helpful.'
    : 'The current answer style is concise. Prioritize a compact answer focused on the main point and avoid unnecessary expansion.';
}

function getMaxOutputTokens(responseStyle: ChatbotResponseStyle) {
  return responseStyle === 'detailed' ? 1500 : 950;
}

function getInstructions(locale: Locale, responseStyle: ChatbotResponseStyle) {
  if (locale === 'vi') {
    return [
      'Ban la tro ly AI tong hop cua Bao tang so Le Duan.',
      'Pham vi uu tien cao nhat cua ban la tra loi tot cac cau hoi ve lich su Dang Cong san Viet Nam.',
      'Ban co the tra loi ve lich su Dang Cong san Viet Nam, lich su Viet Nam noi chung, Le Duan, va noi dung tren website bao tang.',
      'Neu cau hoi lien quan truc tiep den Le Duan, bao tang, hien vat, timeline, media, hoac dieu huong tren website, hay uu tien verified museum context duoc cung cap trong yeu cau.',
      'Neu cau hoi vuot ra ngoai pham vi website, ban duoc phep su dung kien thuc lich su tong quat mot cach can trong, dac biet voi lich su Dang Cong san Viet Nam va lich su Viet Nam hien dai.',
      'Khi cau hoi rong ve lich su Dang, nen uu tien cau truc theo giai doan 1930-1945, 1945-1954, 1954-1975, 1975-1986, 1986-den nay, hoac theo cac ky Dai hoi Dang neu phu hop.',
      'Khi cau hoi rong ve lich su Viet Nam, nen uu tien trinh bay theo trinh tu thoi gian de nguoi dung de theo doi.',
      'Neu mot y nam ngoai du lieu website, co the noi ngan gon rang do la kien thuc lich su tong quat.',
      'Neu can, hay phan biet ro boi canh, su kien, nhan vat, van kien, va y nghia lich su.',
      'Neu co nhieu cach dien giai hoc thuat, hay ghi ngan gon rang van con nhieu cach nhin.',
      'Voi cac cau hoi hien thoi ve lanh dao duong nhiem, chuc vu hien tai, gia ca, tin tuc, hay du lieu co the thay doi gan day, neu khong co du lieu xac minh truc tiep thi khong duoc tu doan.',
      'Khong duoc bia dat su kien, moc thoi gian, trich dan hay nguon.',
      'Day la phien ban nang cap (New Version) voi kha nang phan tich lich su chuyen sau.',
      responseStyle === 'detailed'
        ? 'Ban duoc phep tra loi sau hon va tach thanh cac muc ngan nhu boi canh, dien bien, y nghia, va tac dong khi can.'
        : 'Uu tien tra loi gon trong 2-4 doan ngan hoac 3-6 cau ngan, nhung van du y chinh.',
      getResponseStyleInstruction(locale, responseStyle)
    ].join(' ');
  }

  return [
    'You are the unified AI assistant for the Le Duan Digital Museum.',
    'Your top priority is to answer questions about the history of the Communist Party of Vietnam well.',
    'You can answer questions about the history of the Communist Party of Vietnam, broader Vietnamese history, Le Duan, and content from the museum website.',
    'If the question is directly about Le Duan, the museum, exhibits, timeline, media, or website navigation, prioritize the verified museum context provided in this request.',
    'If the question goes beyond the website, you may use broader historical knowledge carefully, especially for the history of the Communist Party of Vietnam and modern Vietnamese history.',
    'For broad Party history questions, prefer structuring the answer by period such as 1930-1945, 1945-1954, 1954-1975, 1975-1986, and 1986 to the present, or by Party congress when useful.',
    'For broad Vietnamese history questions, prefer a chronological structure that is easy to follow.',
    'If part of the answer comes from general historical knowledge rather than the website dataset, you may say that briefly.',
    'When helpful, distinguish clearly between context, events, figures, documents, and historical significance.',
    'If there are competing historical interpretations, mention that briefly.',
    'For time-sensitive current-office, current-price, current-news, or other recently changing facts, do not guess if no directly verified live data is available.',
    'Do not invent dates, quotes, or claims.',
    responseStyle === 'detailed'
      ? 'You may answer in more depth and use short sections such as context, developments, significance, and impact when useful.'
      : 'Prefer concise answers in 2-4 short paragraphs or 3-6 short sentences while still covering the key point.',
    getResponseStyleInstruction(locale, responseStyle)
  ].join(' ');
}

function getSystemInstruction(
  locale: Locale,
  responseStyle: ChatbotResponseStyle,
  contextSummary: string,
  currentPath?: string
) {
  if (locale === 'vi') {
    return [
      getInstructions(locale, responseStyle),
      getCurrentDateContext(locale),
      '',
      'Verified museum context for grounding:',
      contextSummary,
      '',
      `Trang hien tai: ${currentPath || '/'}`,
      'Voi cau hoi lich su rong, ban khong bi gioi han boi website nay. Voi cau hoi ve website, hay bam sat context.'
    ].join('\n');
  }

  return [
    getInstructions(locale, responseStyle),
    getCurrentDateContext(locale),
    '',
    'Verified museum context for grounding:',
    contextSummary,
    '',
    `Current page: ${currentPath || '/'}`,
    'For broad history questions you are not limited to this website. For site questions, stay grounded in the provided context.'
  ].join('\n');
}

function getUserPrompt(locale: Locale, message: string) {
  if (locale === 'vi') {
    return `Cau hoi cua nguoi dung. Neu cau hoi thuoc lich su Dang Cong san Viet Nam, hay uu tien tra loi day du va truc tiep: ${message}`;
  }

  return `User question. If it is about the history of the Communist Party of Vietnam, prioritize answering it directly and fully: ${message}`;
}

export async function generateGeminiChatbotReply(
  options: GenerateGeminiChatbotReplyOptions
): Promise<ChatbotReply> {
  const { locale, message, currentPath, history, responseStyle = 'concise' } = options;
  const liveFactReply = await resolveLiveFactReply({ locale, message });

  if (liveFactReply) {
    return liveFactReply;
  }

  const contextQuery = buildContextQuery(message, history);
  const museumContextBundle = getChatbotContextBundle({
    locale,
    message: contextQuery,
    currentPath
  });
  const fallbackReply = getUnifiedFallback(locale, museumContextBundle.fallbackReply);
  const contextSummary = museumContextBundle.contextSummary;
  const geminiClient = createGeminiClient();

  if (!geminiClient) {
    return getUnifiedFallback(locale, museumContextBundle.fallbackReply, 'missing_api_key');
  }

  const contents: Content[] = [
    ...sanitizeHistory(history),
    {
      role: 'user',
      parts: [{ text: getUserPrompt(locale, message) }]
    }
  ];

  const failures: GeminiAttemptFailure[] = [];

  for (const model of getChatbotModelCandidates()) {
    try {
      const response = await geminiClient.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: getSystemInstruction(locale, responseStyle, contextSummary, currentPath),
          temperature: 0.35,
          maxOutputTokens: getMaxOutputTokens(responseStyle)
        }
      });

      const answer = response.text?.trim();

      if (!answer) {
        failures.push({ model, message: 'empty response' });
        continue;
      }

      return {
        ...fallbackReply,
        answer
      };
    } catch (error) {
      const failure = parseGeminiFailure(model, error);
      console.error(`Gemini museum chatbot request failed for model ${model}:`, error);

      if (isInvalidApiKeyFailure(failure)) {
        return getUnifiedFallback(
          locale,
          museumContextBundle.fallbackReply,
          'invalid_api_key',
          summarizeFailure(locale, failure)
        );
      }

      failures.push(failure);
    }
  }

  const firstQuotaFailure = failures.find(isQuotaFailure);

  if (firstQuotaFailure) {
    return getUnifiedFallback(
      locale,
      museumContextBundle.fallbackReply,
      'quota_exceeded',
      summarizeFailure(locale, firstQuotaFailure)
    );
  }

  return getUnifiedFallback(
    locale,
    museumContextBundle.fallbackReply,
    'model_failed',
    failures[0] ? summarizeFailure(locale, failures[0]) : undefined
  );
}
