import { notFound } from 'next/navigation';
import { TimelineList } from '@/components/timeline/TimelineList';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { getTimelineEvents } from '@/i18n/data';
import { getTimelinePageCopy } from '@/i18n/copy';
import { isLocale } from '@/i18n/config';

type TimelinePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedTimelinePage({ params }: TimelinePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getTimelinePageCopy(locale);
  const timelineEvents = getTimelineEvents(locale);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <TimelineList events={timelineEvents} locale={locale} roomLabel={copy.roomLabel} />
    </section>
  );
}
