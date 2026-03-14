import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Landmark, PlayCircle, ShieldCheck } from 'lucide-react';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import type { Locale } from '@/i18n/config';
import { localizeHref } from '@/i18n/routing';
import { getHomeCopy } from '@/i18n/copy';
import { getHomeStats } from '@/i18n/data';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const copy = getHomeCopy(locale).hero;
  const statValues = getHomeStats(locale);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-hero-radial">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <VerifiedBadge locale={locale} label={copy.wordBadge} />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300">
              <ShieldCheck className="h-3.5 w-3.5 text-museum.accent" />
              TypeScript · Next.js · Tailwind · React Three Fiber
            </span>
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.32em] text-museum.accent">{copy.eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">{copy.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300">{copy.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={localizeHref(locale, '/museum')}
              className="inline-flex items-center gap-2 rounded-2xl bg-museum.primary px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              {copy.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={localizeHref(locale, '/media')}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-stone-100 transition hover:bg-white/10"
            >
              {copy.secondaryCta}
              <PlayCircle className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {copy.stats.map(({ label }, index) => {
              const Icon = [Landmark, ShieldCheck, PlayCircle][index];

              return (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <Icon className="mb-3 h-5 w-5 text-museum.accent" />
                  <div className="text-2xl font-semibold text-white">{statValues[index]}</div>
                  <div className="text-sm text-stone-400">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-museum.primary/20 to-museum.accent/10 blur-2xl" />
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-museum.card shadow-museum">
            <Image
              src="/assets/hero/le-duan-hero-source.png"
              alt={copy.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
