import { notFound } from 'next/navigation';
import { Hero } from '@/components/home/Hero';
import { TimelinePreview } from '@/components/home/TimelinePreview';
import { getTimelineEvents } from '@/i18n/data';
import { isLocale } from '@/i18n/config';

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Hero locale={locale} />
      <TimelinePreview locale={locale} events={getTimelineEvents(locale)} />
    </>
  );
}
