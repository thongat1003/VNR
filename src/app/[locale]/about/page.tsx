import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Clock3,
  Cuboid,
  Flag,
  GraduationCap,
  Landmark,
  Lightbulb,
  Shield,
  type LucideIcon
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import { getAboutPageCopy } from '@/i18n/copy';
import { isLocale } from '@/i18n/config';
import { localizeHref } from '@/i18n/routing';

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

const historicalMarkIcons: Record<string, LucideIcon> = {
  prison: Shield,
  south: Flag,
  spring: Landmark,
  legacy: Lightbulb
};

const featureIcons: Record<string, LucideIcon> = {
  spaces: Landmark,
  timeline: Clock3,
  artifacts: Cuboid
};

const historicalMarkImages: Record<string, string> = {
  prison: '/assets/archive/ban-tu-con-dao-1931-1936.jpg',
  south: '/assets/archive/de-cuong-cach-mang-mien-nam-1956.png',
  spring: '/assets/archive/bo-chinh-tri-xuan-1975.jpg',
  legacy: '/assets/archive/tham-lien-xo-1980.jpg'
};

export default async function LocalizedAboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getAboutPageCopy(locale);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(214,178,111,0.18),transparent_30%),linear-gradient(135deg,#130e0b_0%,#1a120d_55%,#0b0908_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_30%,rgba(255,255,255,0.02)_60%,transparent)]" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 p-6 md:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-museum.accent">{copy.hero.eyebrow}</p>
              <VerifiedBadge locale={locale} label={copy.hero.badge} />
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">{copy.hero.title}</h1>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-stone-200 md:text-xl">{copy.hero.subtitle}</p>

            <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-stone-300">
              {copy.hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={localizeHref(locale, '/museum')}
                className="inline-flex items-center gap-2 rounded-full border border-museum.accent/35 bg-museum.accent/15 px-5 py-3 text-sm font-medium text-museum.accent transition hover:bg-museum.accent/20"
              >
                {copy.hero.ctas.museum}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={localizeHref(locale, '/timeline')}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10"
              >
                {copy.hero.ctas.timeline}
              </Link>
              <Link
                href={localizeHref(locale, '/media')}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10"
              >
                {copy.hero.ctas.media}
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {copy.hero.keyFigures.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-400">{item.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-full">
            <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(214,178,111,0.16),rgba(255,255,255,0.02)_26%,rgba(0,0,0,0.18)_70%)]" />

            <div className="absolute left-6 top-6 right-20 bottom-24 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/assets/hero/le-duan-portrait.png"
                alt={copy.hero.portraitAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.2)_55%,rgba(0,0,0,0.65))]" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.24em] text-museum.accent">{copy.hero.portraitTag}</div>
                <div className="mt-2 text-xl font-semibold text-white">{copy.hero.portraitName}</div>
              </div>
            </div>

            <div className="absolute bottom-8 right-6 w-[46%] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/35 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/archive/dai-hoi-iii-1960-voi-chu-tich-ho-chi-minh.jpg"
                  alt={copy.hero.sideCardTitle}
                  fill
                  sizes="(max-width: 1024px) 45vw, 18vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.7))]" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-stone-400">{copy.hero.sideCardEyebrow}</div>
                <div className="mt-2 text-sm font-medium leading-6 text-white">{copy.hero.sideCardTitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(214,178,111,0.12),rgba(255,255,255,0.03))] p-6 shadow-museum md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-museum.accent">{copy.leadership.eyebrow}</p>
          <blockquote className="mt-4 text-2xl font-medium leading-10 text-white">{copy.leadership.quote}</blockquote>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-stone-400">{copy.leadership.credit}</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-8">
          <SectionHeading eyebrow={copy.leadership.eyebrow} title={copy.leadership.title} description={copy.leadership.description} />

          <div className="mt-6 space-y-4 text-base leading-8 text-stone-300">
            {copy.leadership.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow={copy.marks.eyebrow} title={copy.marks.title} description={copy.marks.description} />

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {copy.marks.items.map((item, index) => {
            const Icon = historicalMarkIcons[item.id];

            return (
              <article key={item.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0807] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <div className="relative h-56">
                  <Image src={historicalMarkImages[item.id]} alt={item.title} fill sizes="(max-width: 1280px) 100vw, 48vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.82))]" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone-200 backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5 text-museum.accent" />
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-2xl font-semibold leading-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-stone-300">{item.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow={copy.project.eyebrow} title={copy.project.title} description={copy.project.description} />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone-300">
              <GraduationCap className="h-3.5 w-3.5 text-museum.accent" />
              {copy.project.tag}
            </div>

            <div className="mt-6 space-y-4 text-base leading-8 text-stone-300">
              {copy.project.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {copy.project.features.map((feature) => {
              const Icon = featureIcons[feature.id];

              return (
                <article key={feature.id} className="rounded-[1.75rem] border border-white/10 bg-museum.card p-5 shadow-museum">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-museum.accent/30 bg-museum.accent/10 text-museum.accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">{feature.detail}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            href={localizeHref(locale, '/museum')}
            className="group rounded-[1.8rem] border border-museum.accent/25 bg-[linear-gradient(135deg,rgba(214,178,111,0.14),rgba(255,255,255,0.04))] p-6 transition hover:border-museum.accent/45"
          >
            <div className="text-sm uppercase tracking-[0.24em] text-museum.accent">{copy.project.cards.museumEyebrow}</div>
            <div className="mt-3 text-2xl font-semibold text-white">{copy.project.cards.museumTitle}</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-stone-200">
              {copy.project.cards.museumAction}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href={localizeHref(locale, '/timeline')} className="group rounded-[1.8rem] border border-white/10 bg-museum.card p-6 transition hover:border-white/20">
            <div className="text-sm uppercase tracking-[0.24em] text-stone-400">{copy.project.cards.timelineEyebrow}</div>
            <div className="mt-3 text-2xl font-semibold text-white">{copy.project.cards.timelineTitle}</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-stone-200">
              {copy.project.cards.timelineAction}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href={localizeHref(locale, '/media')} className="group rounded-[1.8rem] border border-white/10 bg-museum.card p-6 transition hover:border-white/20">
            <div className="text-sm uppercase tracking-[0.24em] text-stone-400">{copy.project.cards.mediaEyebrow}</div>
            <div className="mt-3 text-2xl font-semibold text-white">{copy.project.cards.mediaTitle}</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-stone-200">
              {copy.project.cards.mediaAction}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
