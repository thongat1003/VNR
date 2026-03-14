import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostcardPageCopy } from '@/i18n/copy';
import { getSiteConfig } from '@/i18n/site';
import { isLocale } from '@/i18n/config';
import { localizeHref } from '@/i18n/routing';

const postcardVideoSrc = '/assets/postcard/le-duan-postcard.mp4';

type PostcardPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PostcardPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = getPostcardPageCopy(locale);
  const siteConfig = getSiteConfig(locale);

  return {
    title: `${copy.title} | ${siteConfig.title}`,
    description: copy.description
  };
}

export default async function LocalizedMuseumPostcardPage({ params }: PostcardPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getPostcardPageCopy(locale);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-museum.card shadow-museum">
        <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(214,178,111,0.14),transparent_42%)] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-museum.accent">{copy.eyebrow}</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div />
            <div className="flex flex-wrap gap-3">
              <Link
                href={localizeHref(locale, '/museum')}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100 transition hover:bg-white/10"
              >
                {copy.backLabel}
              </Link>
              <a
                href={postcardVideoSrc}
                download
                className="rounded-full border border-museum.accent/35 bg-museum.accent/15 px-4 py-2 text-sm text-museum.accent transition hover:bg-museum.accent/20"
              >
                {copy.downloadLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <video className="aspect-video w-full bg-black" controls preload="metadata" autoPlay muted loop playsInline>
              <source src={postcardVideoSrc} type="video/mp4" />
              {copy.unsupportedMessage}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
