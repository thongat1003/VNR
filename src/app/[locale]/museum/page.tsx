import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MuseumScene } from '@/components/museum/MuseumScene';
import { getMuseumPageCopy } from '@/i18n/copy';
import { isLocale } from '@/i18n/config';
import { localizeHref } from '@/i18n/routing';

type MuseumPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedMuseumPage({ params }: MuseumPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getMuseumPageCopy(locale);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={localizeHref(locale, '/museum/postcard')}
          className="rounded-full border border-museum.accent/35 bg-museum.accent/15 px-4 py-2 text-sm font-medium text-museum.accent transition hover:bg-museum.accent/20"
        >
          {copy.postcardCta}
        </Link>
      </div>

      <div className="mt-8">
        <MuseumScene locale={locale} />
      </div>

      <div className="mt-10 rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-8">
        <blockquote className="text-lg font-medium leading-8 text-white md:text-xl">{copy.quote}</blockquote>
        <p className="mt-3 text-sm uppercase tracking-[0.24em] text-museum.accent">{copy.quoteCredit}</p>

        <div className="mt-6 space-y-4 text-base leading-8 text-stone-300">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
