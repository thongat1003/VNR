'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { Exhibit } from '@/types';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

type ExhibitModalProps = {
  exhibit: Exhibit | null;
  onClose: () => void;
};

export function ExhibitModal({ exhibit, onClose }: ExhibitModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [exhibit]);

  useEffect(() => {
    if (!isZoomed) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  if (!exhibit) {
    return null;
  }

  const isRuntimeImage = exhibit.image.startsWith('data:') || exhibit.image.startsWith('blob:');

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/82 px-4 py-6 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`exhibit-title-${exhibit.id}`}
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#090706]/95 shadow-[0_32px_90px_rgba(0,0,0,0.55)]"
          onClick={stopPropagation}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/65 p-2.5 text-white transition hover:bg-black/80"
            aria-label="Dong cua so hien vat"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid max-h-[88vh] gap-0 md:grid-cols-[0.92fr_1.08fr]">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top,#6b241e_0%,#24100d_46%,#090706_100%)] p-6 md:min-h-[680px] md:border-b-0 md:border-r md:border-r-white/8 md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_32%,rgba(0,0,0,0.38)_100%)]" />
              <div className="pointer-events-none absolute inset-x-[12%] top-[8%] h-px bg-museum.accent/30" />
              <div className="pointer-events-none absolute inset-x-[10%] bottom-[10%] h-px bg-museum.accent/20" />

              <div className="relative z-10 flex w-full max-w-[30rem] flex-col gap-4">
                <button
                  type="button"
                  onClick={() => setIsZoomed(true)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/12 bg-black/25 p-4 text-left shadow-[0_22px_48px_rgba(0,0,0,0.34)] backdrop-blur-sm transition hover:border-museum.accent/40"
                  aria-label={`Phong to hien vat ${exhibit.title}`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-black/20">
                    <Image
                      src={exhibit.image}
                      alt={exhibit.title}
                      fill
                      className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 42vw"
                      unoptimized={isRuntimeImage}
                    />
                  </div>

                  <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-2 text-sm text-stone-100 backdrop-blur-sm">
                    <span>Bam de phong to</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-museum.accent">Zoom</span>
                  </div>
                </button>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/28 px-4 py-3 text-sm text-stone-200 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-[0.24em] text-museum.accent">Hien vat trung bay</div>
                  <div className="mt-2 text-base font-medium text-white">{exhibit.name}</div>
                </div>
              </div>
            </div>

            <div className="max-h-[88vh] overflow-y-auto bg-[linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.48))] p-6 md:p-8">
              <div className="space-y-5 pr-0 md:pr-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white">
                    {exhibit.room}
                  </span>
                  {exhibit.verified ? <VerifiedBadge /> : null}
                </div>

                <div className="max-w-2xl">
                  <h3 id={`exhibit-title-${exhibit.id}`} className="text-3xl font-semibold leading-tight text-white md:text-[2.5rem]">
                    {exhibit.title}
                  </h3>
                  <p className="mt-4 text-[1.05rem] leading-8 text-stone-200">{exhibit.summary}</p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="mb-3 text-xs uppercase tracking-[0.24em] text-museum.accent">Thuyet minh chi tiet</div>
                  <p className="text-base leading-8 text-stone-100">{exhibit.detail}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 text-sm text-stone-300">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">Loai hien vat</div>
                    <div className="text-base font-medium capitalize text-white">{exhibit.type}</div>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 text-sm text-stone-300">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">Muc dich hien thi</div>
                    <div className="text-base font-medium text-white">Anh hien vat, mo ta lich su va lien ket tu lieu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isZoomed ? (
        <div className="fixed inset-0 z-[80] bg-black/92 px-4 py-6 backdrop-blur-md" onClick={() => setIsZoomed(false)}>
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/65 p-2.5 text-white transition hover:bg-black/80"
            aria-label={`Dong che do phong to ${exhibit.title}`}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-center" onClick={stopPropagation}>
            <div className="relative h-full max-h-[88vh] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#351511_0%,#120b09_48%,#050303_100%)] p-4 md:p-8">
              <Image
                src={exhibit.image}
                alt={exhibit.title}
                fill
                className="object-contain p-4 md:p-8"
                sizes="100vw"
                priority
                unoptimized={isRuntimeImage}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
