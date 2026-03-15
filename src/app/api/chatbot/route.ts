export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { defaultLocale, isLocale } from '@/i18n/config';
import { generateGeminiChatbotReply, type ChatbotHistoryItem } from '@/lib/chatbot-gemini';
import { isChatbotResponseStyle, type ChatbotResponseStyle } from '@/types/chatbot';

type ChatbotRequestBody = {
  locale?: string;
  message?: string;
  currentPath?: string;
  history?: ChatbotHistoryItem[];
  responseStyle?: ChatbotResponseStyle | string;
};

export async function POST(request: Request) {
  let body: ChatbotRequestBody;

  try {
    body = (await request.json()) as ChatbotRequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const locale = body.locale && isLocale(body.locale) ? body.locale : defaultLocale;
  const message = typeof body.message === 'string' ? body.message : '';
  const currentPath = typeof body.currentPath === 'string' ? body.currentPath : undefined;
  const history = Array.isArray(body.history) ? body.history : undefined;
  const responseStyle =
    typeof body.responseStyle === 'string' && isChatbotResponseStyle(body.responseStyle)
      ? body.responseStyle
      : 'concise';

  return NextResponse.json(await generateGeminiChatbotReply({ locale, message, currentPath, history, responseStyle }));
}
