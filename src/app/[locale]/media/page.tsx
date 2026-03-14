import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import { getCampaignPlans, getMediaAssets } from '@/i18n/data';
import { getMediaPageCopy } from '@/i18n/copy';
import { isLocale } from '@/i18n/config';

type MediaPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedMediaPage({ params }: MediaPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getMediaPageCopy(locale);
  const mediaAssets = getMediaAssets(locale);
  const campaignPlans = getCampaignPlans(locale);
  const imageCount = mediaAssets.filter((asset) => asset.category === 'image').length;
  const videoCount = mediaAssets.filter((asset) => asset.category === 'video').length;
  const coreCount = mediaAssets.filter((asset) => asset.priority === 'core').length;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading eyebrow={copy.archiveHeading.eyebrow} title={copy.archiveHeading.title} />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { label: copy.statLabels.images, value: imageCount.toString().padStart(2, '0') },
          { label: copy.statLabels.videos, value: videoCount.toString().padStart(2, '0') },
          { label: copy.statLabels.core, value: coreCount.toString().padStart(2, '0') }
        ].map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-museum.card p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-stone-400">{item.label}</div>
            <div className="mt-3 text-3xl font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {mediaAssets.map((asset) => (
          <article key={asset.id} className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-museum.card shadow-museum">
            <Image src={asset.thumbnail} alt={asset.title} width={800} height={480} className="h-48 w-full object-cover" />
            <div className="space-y-4 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-300">
                    {copy.category[asset.category]}
                  </span>
                  <span className="rounded-full border border-museum.accent/20 bg-museum.accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-museum.accent">
                    {copy.priority[asset.priority]}
                  </span>
                </div>
                {asset.verified ? <VerifiedBadge locale={locale} /> : null}
              </div>
              <h3 className="text-xl font-semibold text-white">{asset.title}</h3>
              <p className="text-sm text-museum.accent">{asset.section}</p>
              <p className="text-sm leading-7 text-stone-300">{asset.note}</p>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-1 text-xs uppercase tracking-[0.22em] text-stone-400">{copy.historicalContextLabel}</div>
                <p className="text-sm leading-7 text-stone-300">{asset.historicalContext}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-stone-300">{asset.source}</div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow={copy.campaignHeading.eyebrow} title={copy.campaignHeading.title} />

        <div className="mt-8 space-y-6">
          {campaignPlans.map((campaign) => (
            <article key={campaign.id} className="rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-museum.accent/20 bg-museum.accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-museum.accent">
                  {campaign.period}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-300">
                  {campaign.room}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-white">{campaign.title}</h3>
              <div className="mt-4 space-y-4">
                <p className="text-base leading-7 text-stone-300">{campaign.overview}</p>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">{copy.historicalDetailLabel}</div>
                    <p className="text-sm leading-7 text-stone-300">{campaign.historicalDetail}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">{copy.leDuanRoleLabel}</div>
                    <p className="text-sm leading-7 text-stone-300">{campaign.leDuanRole}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
