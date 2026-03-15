'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import type { Locale } from '@/i18n/config';
import type { TimelineEvent } from '@/types';

type TimelineListProps = {
  events: TimelineEvent[];
  locale: Locale;
  roomLabel: string;
};

export function TimelineList({ events, locale, roomLabel }: TimelineListProps) {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);
  const copy =
    locale === 'en'
      ? {
          openImage: 'Open timeline image',
          viewImage: 'View image',
          closeImage: 'Close timeline image'
        }
      : {
          openImage: 'Mở ảnh timeline',
          viewImage: 'Xem ảnh',
          closeImage: 'Đóng ảnh timeline'
        };

  useEffect(() => {
    if (!activeEvent) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setActiveEvent(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeEvent]);

  const stopPropagation = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="relative mt-10 space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-1/2">
        {events.map((timelineEvent, index) => (
          <article key={timelineEvent.id} className="relative grid gap-6 md:grid-cols-2 md:gap-10">
            <div className={index % 2 === 0 ? 'md:pr-10' : 'md:order-2 md:pl-10'}>
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-museum.card shadow-museum">
                <button
                  type="button"
                  onClick={() => setActiveEvent(timelineEvent)}
                  className="group relative block h-56 w-full cursor-zoom-in overflow-hidden text-left"
                  aria-label={`${copy.openImage} ${timelineEvent.title}`}
                >
                  <Image
                    src={timelineEvent.image}
                    alt={timelineEvent.title}
                    width={1200}
                    height={700}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    style={{ objectPosition: timelineEvent.imagePosition ?? '50% 50%' }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition group-hover:border-museum.accent/60 group-hover:text-museum.accent">
                    {copy.viewImage}
                  </div>
                </button>

                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-museum.accent">{timelineEvent.year}</span>
                    {timelineEvent.verified ? <VerifiedBadge locale={locale} /> : null}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{timelineEvent.title}</h3>
                  <p className="text-base leading-7 text-stone-300">{timelineEvent.summary}</p>
                  {timelineEvent.detail ? (
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-sm leading-7 text-stone-300">{timelineEvent.detail}</p>
                    </div>
                  ) : null}
                  <p className="text-sm text-stone-400">
                    {roomLabel}: {timelineEvent.room}
                  </p>
                </div>
              </div>
            </div>

            <div className={index % 2 === 0 ? 'md:order-2' : ''} />
            <div className="absolute left-4 top-8 h-3.5 w-3.5 rounded-full border-4 border-museum.bg bg-museum.accent md:left-1/2 md:-translate-x-1/2" />
          </article>
        ))}
      </div>

      {activeEvent ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeEvent.title}
          onClick={() => setActiveEvent(null)}
        >
          <div
            className="relative h-full w-full max-w-7xl"
            onClick={stopPropagation}
          >
            <button
              type="button"
              onClick={() => setActiveEvent(null)}
              className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/65 p-2.5 text-white transition hover:bg-black/80"
              aria-label={`${copy.closeImage} ${activeEvent.title}`}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#381611_0%,#170d0c_48%,#060303_100%)] shadow-[0_32px_90px_rgba(0,0,0,0.55)]">
              <Image
                src={activeEvent.image}
                alt={activeEvent.title}
                fill
                className="object-contain p-4 md:p-8"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
