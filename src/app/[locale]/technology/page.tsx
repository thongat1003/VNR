import {
  Clock3,
  Cuboid,
  GraduationCap,
  Landmark,
  Lightbulb,
  Shield,
  type LucideIcon
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import { isLocale } from '@/i18n/config';
import { getTechnologyPageCopy } from '@/i18n/copy';

type TechnologyPageProps = {
  params: Promise<{ locale: string }>;
};

const stackIcons: Record<string, LucideIcon> = {
  app: Landmark,
  three: Cuboid,
  style: Lightbulb,
  tooling: Shield
};

const assistantIcons: Record<string, LucideIcon> = {
  codex: GraduationCap,
  other: Clock3
};

export default async function LocalizedTechnologyPage({ params }: TechnologyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getTechnologyPageCopy(locale);
  const promptUi =
    locale === 'en'
      ? {
          hint: 'Scroll inside this box to read the full prompt.'
        }
      : {
          hint: 'Cuộn trong khung này để xem toàn bộ prompt.'
        };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(214,178,111,0.18),transparent_28%),linear-gradient(135deg,#120d0a_0%,#1a130f_56%,#0b0908_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_28%,rgba(255,255,255,0.02)_62%,transparent)]" />

        <div className="relative z-10 p-6 md:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-museum.accent">{copy.hero.eyebrow}</p>
            <VerifiedBadge locale={locale} />
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">{copy.hero.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">{copy.hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#stack"
              className="inline-flex items-center rounded-full border border-museum.accent/35 bg-museum.accent/15 px-5 py-3 text-sm font-medium text-museum.accent transition hover:bg-museum.accent/20"
            >
              {copy.hero.sectionLinks.stack}
            </a>
            <a
              href="#ai-appendix"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10"
            >
              {copy.hero.sectionLinks.ai}
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {copy.hero.highlights.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.24em] text-stone-400">{item.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="stack" className="mt-16 scroll-mt-28">
        <SectionHeading eyebrow={copy.stack.eyebrow} title={copy.stack.title} description={copy.stack.description} />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {copy.stack.items.map((item, index) => {
            const Icon = stackIcons[item.id];

            return (
              <article
                key={item.id}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(214,178,111,0.1),rgba(255,255,255,0.03))] p-6 shadow-museum md:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-museum.accent/30 bg-museum.accent/10 text-museum.accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">{String(index + 1).padStart(2, '0')}</div>
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-stone-300">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div id="ai-appendix" className="mt-16 scroll-mt-28">
        <SectionHeading eyebrow={copy.ai.eyebrow} title={copy.ai.title} description={copy.ai.description} />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            {copy.ai.assistants.map((assistant) => {
              const Icon = assistantIcons[assistant.id];

              return (
                <article key={assistant.id} className="rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-museum.accent/30 bg-museum.accent/10 text-museum.accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">{assistant.title}</h2>
                      <p className="mt-3 text-base leading-8 text-stone-300">{assistant.summary}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {assistant.notes.map((note) => (
                      <div key={note} className="rounded-[1.25rem] border border-white/8 bg-black/20 px-4 py-3 text-sm leading-7 text-stone-200">
                        {note}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(214,178,111,0.08))] p-6 shadow-museum md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-museum.accent">
                  <Clock3 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold text-white">{copy.ai.promptsTitle}</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-stone-400">
                {promptUi.hint}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {copy.ai.prompts.map((prompt, index) => (
                <div key={prompt} className="rounded-[1.4rem] border border-white/8 bg-black/25 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-museum.accent">{String(index + 1).padStart(2, '0')}</div>
                  <div className="mt-3 max-h-[26rem] overflow-y-auto pr-2">
                    <p className="whitespace-pre-line text-sm leading-6 text-stone-200">{prompt}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
