'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, LoaderCircle, MessageCircleMore, SendHorizontal, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
    open: 'Mo chatbot',
    close: 'Dong chatbot',
    inputPlaceholder: 'Nhap cau hoi cua ban...',
    send: 'Gui',
    typing: 'Dang soan cau tra loi...',
    pages: 'Trang lien quan',
    sources: 'Nguon tham khao',
    title: 'Tro ly lich su va bao tang',
    subtitle: 'Hoi ve lich su Dang, lich su Viet Nam, Le Duan va noi dung tren website.',
    intro:
      'Toi la tro ly AI tong hop. Ban co the hoi ve lich su Dang Cong san Viet Nam, lich su Viet Nam noi chung, vai tro cua Le Duan, hoac cac noi dung trong Bao tang so Le Duan.',
    initialSuggestions: [
      'Dang Cong san Viet Nam thanh lap trong boi canh nao?',
      'Tom tat lich su Viet Nam tu 1930 den nay',
      'Vai tro cua Le Duan trong lich su Dang la gi?',
      'Bao tang 3D co gi?'
    ],
    responseStyleLabel: 'Do dai',
    responseStyles: {
      concise: 'Ngan',
      detailed: 'Chi tiet'
    },
    error:
      'Ket noi toi chatbot dang gap loi. Ban co the thu lai sau hoac dat cau hoi ngan hon de toi xu ly tot hon.'
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
      'The chatbot request failed. Please try again or ask a shorter, more specific question.'
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
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:right-6 sm:w-[24rem]">
      {open ? (
        <section className="pointer-events-auto rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(43,32,25,0.96),rgba(18,14,11,0.98))] shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <header className="border-b border-white/10 px-4 py-4 sm:px-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-museum.accent">
                  <Sparkles className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.24em]">{ui.title}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-stone-300">{ui.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-stone-300 transition hover:bg-white/10 hover:text-white"
                aria-label={ui.close}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-400">{ui.responseStyleLabel}</div>
              <div className="flex flex-wrap gap-2">
                {chatbotResponseStyles.map((nextStyle) => (
                  <button
                    key={nextStyle}
                    type="button"
                    onClick={() => setResponseStyle(nextStyle)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                      responseStyle === nextStyle
                        ? 'bg-museum.accent text-black'
                        : 'border border-white/10 bg-white/5 text-stone-200 hover:bg-white/10'
                    }`}
                  >
                    {ui.responseStyles[nextStyle]}
                  </button>
                ))}
              </div>
            </div>
          </header>

          <div className="max-h-[28rem] overflow-y-auto px-4 py-4 sm:px-5">
            <div className="space-y-4">
              {messages.map((message) => (
                <article key={message.id} className={message.role === 'assistant' ? 'mr-8' : 'ml-8'}>
                  <div
                    className={`rounded-[1.5rem] px-4 py-3 text-sm leading-7 ${
                      message.role === 'assistant'
                        ? 'border border-white/8 bg-black/25 text-stone-100'
                        : 'bg-museum.primary text-white'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>

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
                <div className="mr-8 rounded-[1.5rem] border border-white/8 bg-black/25 px-4 py-3 text-sm text-stone-300">
                  <div className="flex items-center gap-2">
                    <LoaderCircle className="h-4 w-4 animate-spin text-museum.accent" />
                    <span>{ui.typing}</span>
                  </div>
                </div>
              ) : null}
            </div>
            <div ref={endRef} />
          </div>

          <form
            className="border-t border-white/10 px-4 py-4 sm:px-5"
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(inputValue);
            }}
          >
            <div className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-2">
              <label htmlFor="museum-chatbot-input" className="sr-only">
                {ui.inputPlaceholder}
              </label>
              <input
                id="museum-chatbot-input"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={ui.inputPlaceholder}
                className="min-w-0 flex-1 border-0 bg-transparent px-2 text-sm text-white outline-none placeholder:text-stone-500"
              />
              <button
                type="submit"
                disabled={isLoading || inputValue.trim().length === 0}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-museum.accent text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label={ui.send}
              >
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </form>
        </section>
      ) : null}

      <div className={`flex ${open ? 'justify-end pt-3' : 'justify-end'}`}>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-museum.accent/30 bg-[linear-gradient(135deg,rgba(159,29,32,0.95),rgba(214,178,111,0.92))] px-4 py-3 text-sm font-medium text-black shadow-[0_18px_48px_rgba(0,0,0,0.38)] transition hover:translate-y-[-1px]"
          aria-expanded={open}
          aria-label={open ? ui.close : ui.open}
        >
          {open ? <X className="h-4 w-4" /> : <MessageCircleMore className="h-4 w-4" />}
          <span className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            {ui.title}
          </span>
        </button>
      </div>
    </div>
  );
}
