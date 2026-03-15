'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, LoaderCircle, MessageCircleMore, Plus, SendHorizontal, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Locale } from '@/i18n/config';
import { chatbotResponseStyles, type ChatbotResponseStyle } from '@/types/chatbot';

type ChatbotLink = {
  label: string;
  href: string;
};

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  suggestions?: string[];
  pages?: ChatbotLink[];
  sources?: ChatbotLink[];
};

type ChatbotResponse = {
  answer: string;
  suggestions: string[];
  pages: ChatbotLink[];
  sources: ChatbotLink[];
};

type ChatbotRequestHistoryItem = {
  role: 'assistant' | 'user';
  content: string;
};

type MuseumChatbotProps = {
  locale: Locale;
};

const widgetCopy = {
  vi: {
    open: 'Mở chatbot',
    close: 'Đóng chatbot',
    inputPlaceholder: 'Nhập câu hỏi của bạn...',
    send: 'Gửi',
    typing: 'Đang soạn câu trả lời...',
    pages: 'Trang liên quan',
    sources: 'Nguồn tham khảo',
    title: 'Trợ lý lịch sử và bảo tàng',
    subtitle: 'Hỏi về lịch sử Đảng, lịch sử Việt Nam, Lê Duẩn và nội dung trên website.',
    intro:
      'Tôi là trợ lý AI tổng hợp. Bạn có thể hỏi về lịch sử Đảng Cộng sản Việt Nam, lịch sử Việt Nam nói chung, vai trò của Lê Duẩn, hoặc các nội dung trong Bảo tàng số Lê Duẩn.',
    initialSuggestions: [
      'Đảng Cộng sản Việt Nam thành lập trong bối cảnh nào?',
      'Tóm tắt lịch sử Việt Nam từ 1930 đến nay',
      'Vai trò của Lê Duẩn trong lịch sử Đảng là gì?',
      'Bảo tàng 3D có gì?'
    ],
    responseStyleLabel: 'Độ dài',
    responseStyles: {
      concise: 'Ngắn',
      detailed: 'Chi tiết'
    },
    error:
      'Kết nối tới chatbot đang gặp lỗi. Bạn có thể thử lại sau hoặc đặt câu hỏi ngắn hơn để tôi xử lý tốt hơn.',
    newSession: 'Phiên mới'
  },
  en: {
    open: 'Open chatbot',
    close: 'Close chatbot',
    inputPlaceholder: 'Type your question...',
    send: 'Send',
    typing: 'Preparing an answer...',
    pages: 'Related pages',
    sources: 'Sources',
    title: 'History and museum guide',
    subtitle: 'Ask about Party history, Vietnamese history, Le Duan, and site content.',
    intro:
      'I am a unified AI assistant. You can ask about the history of the Communist Party of Vietnam, broader Vietnamese history, the role of Le Duan, or content from the Le Duan Digital Museum website.',
    initialSuggestions: [
      'What was the context for the founding of the Communist Party of Vietnam?',
      'Summarize Vietnamese history from 1930 to the present',
      'What was Le Duan role in Party history?',
      'What is in the 3D museum?'
    ],
    responseStyleLabel: 'Length',
    responseStyles: {
      concise: 'Short',
      detailed: 'Detailed'
    },
    error:
      'The chatbot request failed. Please try again or ask a shorter, more specific question.',
    newSession: 'New session'
  }
} as const;

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createWelcomeMessage(locale: Locale): ChatMessage {
  const ui = widgetCopy[locale];
  const welcomePages =
    locale === 'vi'
      ? [
          { label: 'Timeline', href: '/vi/timeline' },
          { label: 'Bao tang 3D', href: '/vi/museum' }
        ]
      : [
          { label: 'Timeline', href: '/en/timeline' },
          { label: '3D Museum', href: '/en/museum' }
        ];

  return {
    id: `welcome-${locale}`,
    role: 'assistant',
    content: ui.intro,
    suggestions: [...ui.initialSuggestions],
    pages: welcomePages,
    sources: []
  };
}

export function MuseumChatbot({ locale }: MuseumChatbotProps) {
  const pathname = usePathname();
  const ui = widgetCopy[locale];
  const [responseStyle, setResponseStyle] = useState<ChatbotResponseStyle>('concise');
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [createWelcomeMessage(locale)]);
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([createWelcomeMessage(locale)]);
    setInputValue('');
    setIsLoading(false);
  }, [locale]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, open, isLoading]);

  function resetSession() {
    setMessages([createWelcomeMessage(locale)]);
    setInputValue('');
    setIsLoading(false);
  }

  async function sendMessage(rawMessage: string) {
    const message = rawMessage.trim();

    if (!message || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      content: message
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInputValue('');
    setOpen(true);
    setIsLoading(true);

    try {
      const history: ChatbotRequestHistoryItem[] = messages
        .filter((item) => item.role === 'assistant' || item.role === 'user')
        .slice(-6)
        .map((item) => ({
          role: item.role,
          content: item.content
        }));

      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          locale,
          message,
          currentPath: pathname,
          history,
          responseStyle
        })
      });

      if (!response.ok) {
        throw new Error(`Chatbot request failed with status ${response.status}`);
      }

      const data = (await response.json()) as ChatbotResponse;

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createId(),
          role: 'assistant',
          content: data.answer,
          suggestions: data.suggestions,
          pages: data.pages,
          sources: data.sources
        }
      ]);
    } catch {
      const welcome = createWelcomeMessage(locale);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createId(),
          role: 'assistant',
          content: ui.error,
          suggestions: welcome.suggestions,
          pages: welcome.pages
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:right-6 sm:w-[28rem]">
      {open ? (
        <section className="pointer-events-auto flex flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(28,22,18,0.98),rgba(15,12,10,0.99))] shadow-[0_32px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300">
          <header className="relative border-b border-white/10 px-6 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-6 items-center gap-2 rounded-full bg-white/5 px-2.5 py-1">
                    <Sparkles className="h-3.5 w-3.5 text-museum.accent" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">{ui.title}</p>
                  </div>
                  <span className="animate-pulse rounded-full bg-museum.accent/10 border border-museum.accent/30 px-2 py-0.5 text-[9px] font-black text-museum.accent">NEW</span>
                </div>
                <p className="mt-2.5 text-xs leading-5 text-stone-400/90">{ui.subtitle}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetSession}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition-all hover:bg-white/10 hover:text-white"
                  title={ui.newSession}
                >
                  <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition-all hover:bg-white/10 hover:text-white"
                  aria-label={ui.close}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>


          </header>

          <div className="scrollbar-thin scrollbar-thumb-stone-700/50 scrollbar-track-transparent max-h-[22rem] overflow-y-auto px-6 py-5 transition-all duration-300">
            <div className="space-y-6">
              {messages.map((message) => (
                <article key={message.id} className={`flex flex-col ${message.role === 'assistant' ? 'items-start' : 'items-end'}`}>
                  <div
                    className={`max-w-[90%] rounded-[2rem] px-5 py-4 text-[13.5px] leading-7 shadow-sm transition-all ${
                      message.role === 'assistant'
                        ? 'border border-white/10 bg-white/5 text-stone-200'
                        : 'bg-museum.primary text-white shadow-xl shadow-museum.primary/10'
                    } ${message.role === 'assistant' ? 'rounded-tl-none' : 'rounded-tr-none'}`}
                  >
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                      </ReactMarkdown>
                    </div>

                    {message.pages?.length ? (
                      <div className="mt-4">
                        <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-400">{ui.pages}</div>
                        <div className="flex flex-wrap gap-2">
                          {message.pages.map((page) => (
                            <Link
                              key={page.href}
                              href={page.href}
                              className="rounded-full border border-museum.accent/30 bg-museum.accent/10 px-3 py-1.5 text-xs font-medium text-museum.accent transition hover:bg-museum.accent/20"
                            >
                              {page.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {message.sources?.length ? (
                      <div className="mt-4">
                        <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-400">{ui.sources}</div>
                        <div className="space-y-2">
                          {message.sources.map((source) => (
                            <a
                              key={source.href}
                              href={source.href}
                              target="_blank"
                              rel="noreferrer"
                              className="block rounded-2xl border border-white/8 bg-white/5 px-3 py-2 text-xs leading-6 text-stone-200 transition hover:bg-white/10"
                            >
                              {source.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {message.role === 'assistant' && message.suggestions?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion) => (
                          <button
                            key={`${message.id}-${suggestion}`}
                            type="button"
                            onClick={() => void sendMessage(suggestion)}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-200 transition hover:bg-white/10"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}

              {isLoading ? (
                <div className="flex flex-col items-start gap-1">
                  <div className="rounded-[1.5rem] rounded-tl-none border border-white/8 bg-white/5 px-5 py-4 text-sm text-stone-400 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <LoaderCircle className="h-4 w-4 animate-spin text-museum.accent" />
                      <span className="font-medium">{ui.typing}</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div ref={endRef} />
          </div>

          <form
            className="border-t border-white/10 bg-black/20 px-6 py-5"
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(inputValue);
            }}
          >
            <div className="group relative flex items-center gap-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-1.5 pl-5 ring-museum.accent/20 transition-all focus-within:border-museum.accent/40 focus-within:ring-4">
              <input
                id="museum-chatbot-input"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={ui.inputPlaceholder}
                className="min-w-0 flex-1 border-0 bg-transparent py-2 text-[13.5px] text-white outline-none placeholder:text-stone-500"
              />
              <button
                type="submit"
                disabled={isLoading || inputValue.trim().length === 0}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-museum.accent text-black transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                aria-label={ui.send}
              >
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </form>
        </section>
      ) : null}

      <div className={`flex ${open ? 'justify-end pt-5' : 'justify-end'}`}>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full border border-museum.accent/40 bg-[linear-gradient(135deg,rgba(159,29,32,1),rgba(194,158,91,1))] text-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-4px] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          aria-expanded={open}
          aria-label={open ? ui.close : ui.open}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Bot className="h-7 w-7 transition-transform group-hover:scale-110" />
          )}
        </button>
      </div>
    </div>
  );
}
