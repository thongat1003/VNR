import type { Locale } from '@/i18n/config';
import type { ChatbotReply } from '@/lib/chatbot';

type ResolveLiveFactReplyOptions = {
  locale: Locale;
  message: string;
};

type SourceLink = {
  label: string;
  href: string;
};

type CurrentUsPresident = {
  name: string;
  sources: SourceLink[];
};

const requestTimeoutMs = 8000;
const chatbotTimeZone = 'Asia/Bangkok';

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatCurrentDate(locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-US', {
    timeZone: chatbotTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
}

function detectCurrentUsPresidentIntent(message: string) {
  const normalized = normalizeText(message);

  return (
    /\b(president of (the )?(united states|us|usa)|us president|u s president|current president|current us president)\b/.test(
      normalized
    ) ||
    /\b(tong thong (hoa ky|my|nuoc my)|tong thong hoa ki|tong thong hien nay)\b/.test(normalized)
  );
}

async function fetchHtml(url: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'LeDuanMuseumBot/1.0'
      },
      signal: controller.signal,
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function extractPresidentName(html: string) {
  const compact = html.replace(/\s+/g, ' ');
  const headingMatch = compact.match(/>\s*President\s+([^<]{2,80}?)\s*<\/h[1-6]>/i);

  if (headingMatch?.[1]) {
    return headingMatch[1].replace(/\s+/g, ' ').trim();
  }

  const fallbackMatch = compact.match(/President\s+([A-Z][A-Za-z.'’\-]+(?:\s+[A-Z][A-Za-z.'’\-]+){1,4})/);
  return fallbackMatch?.[1]?.trim() ?? null;
}

async function resolveCurrentUsPresident(): Promise<CurrentUsPresident | null> {
  const officialSources = [
    {
      label: 'The White House Administration',
      href: 'https://www.whitehouse.gov/administration/'
    },
    {
      label: 'The White House Home',
      href: 'https://www.whitehouse.gov/'
    }
  ];

  const results = await Promise.allSettled(
    officialSources.map(async (source) => {
      const html = await fetchHtml(source.href);
      const name = extractPresidentName(html);

      if (!name) {
        throw new Error(`Could not parse president name from ${source.href}`);
      }

      return {
        source,
        name
      };
    })
  );

  const successful = results
    .filter((result): result is PromiseFulfilledResult<{ source: SourceLink; name: string }> => result.status === 'fulfilled')
    .map((result) => result.value);

  if (successful.length === 0) {
    return null;
  }

  const primaryName = successful[0].name;
  const consistentSources = successful.filter((item) => item.name === primaryName).map((item) => item.source);

  return {
    name: primaryName,
    sources: consistentSources.length > 0 ? consistentSources : [successful[0].source]
  };
}

function createCurrentUsPresidentReply(locale: Locale, fact: CurrentUsPresident): ChatbotReply {
  const currentDate = formatCurrentDate(locale);

  if (locale === 'vi') {
    return {
      answer: `Tính đến ngày ${currentDate}, nguồn chính thức của White House xác nhận Tổng thống Hoa Kỳ là ${fact.name}. Nếu chatbot từng trả lời Joe Biden là tổng thống hiện nay thì đó là thông tin lỗi thời, không đúng ở mốc thời gian này.`,
      suggestions: ['Ai là Phó Tổng thống Hoa Kỳ hiện nay?', 'Donald Trump nhậm chức ngày nào?', 'Tại sao chatbot dễ sai câu hỏi thời sự?'],
      pages: [],
      sources: fact.sources
    };
  }

  return {
    answer: `As of ${currentDate}, official White House sources identify ${fact.name} as the President of the United States. If the chatbot previously answered Joe Biden, that was stale information and is not correct at this date.`,
    suggestions: ['Who is the current U.S. vice president?', 'When was Donald Trump sworn in?', 'Why do chatbots get current facts wrong?'],
    pages: [],
    sources: fact.sources
  };
}

function createCurrentUsPresidentUnverifiedReply(locale: Locale): ChatbotReply {
  if (locale === 'vi') {
    return {
      answer:
        'Đây là câu hỏi thời sự về chức vụ hiện tại, nhưng tôi chưa xác minh được từ nguồn chính thức ngay lúc này. Tôi sẽ không đoán theo trí nhớ cũ vì rất dễ sai.',
      suggestions: ['Thử hỏi lại sau ít phút', 'Ai là Tổng thống Hoa Kỳ hiện nay?', 'Tại sao chatbot cần xác minh dữ liệu thời sự?'],
      pages: [],
      sources: []
    };
  }

  return {
    answer:
      'This is a time-sensitive current-office question, but I could not verify it from an official source right now. I will not guess from stale model memory.',
    suggestions: ['Try again in a moment', 'Who is the current U.S. president?', 'Why do chatbots need live verification?'],
    pages: [],
    sources: []
  };
}

export async function resolveLiveFactReply(options: ResolveLiveFactReplyOptions): Promise<ChatbotReply | null> {
  const { locale, message } = options;

  if (!detectCurrentUsPresidentIntent(message)) {
    return null;
  }

  try {
    const fact = await resolveCurrentUsPresident();

    if (!fact) {
      return createCurrentUsPresidentUnverifiedReply(locale);
    }

    return createCurrentUsPresidentReply(locale, fact);
  } catch (error) {
    console.error('Live fact verification failed:', error);
    return createCurrentUsPresidentUnverifiedReply(locale);
  }
}
