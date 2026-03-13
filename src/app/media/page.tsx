import Image from 'next/image';
import { mediaAssets } from '@/data/media';
import { campaignPlans } from '@/data/contentPlan';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

export default function MediaPage() {
  const imageCount = mediaAssets.filter((asset) => asset.category === 'image').length;
  const videoCount = mediaAssets.filter((asset) => asset.category === 'video').length;
  const coreCount = mediaAssets.filter((asset) => asset.priority === 'core').length;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Tu lieu"
        title="Kho ảnh, storyboard cho các trận đánh lịch sử"
        // description="Thumbnail va anh cot loi trong trang nay da duoc thay bang anh that trich tu file Word, dong thoi giu lai phan boi canh lich su."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { label: 'Bo anh', value: imageCount.toString().padStart(2, '0') },
          // { label: 'Module video', value: videoCount.toString().padStart(2, '0') },
          { label: 'Uu tien cot loi', value: coreCount.toString().padStart(2, '0') },
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
                    {asset.category}
                  </span>
                  <span className="rounded-full border border-museum.accent/20 bg-museum.accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-museum.accent">
                    {asset.priority === 'core' ? 'cot loi' : 'bo tro'}
                  </span>
                </div>
                {asset.verified ? <VerifiedBadge /> : null}
              </div>
              <h3 className="text-xl font-semibold text-white">{asset.title}</h3>
              <p className="text-sm text-museum.accent">{asset.section}</p>
              <p className="text-sm leading-7 text-stone-300">{asset.note}</p>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-1 text-xs uppercase tracking-[0.22em] text-stone-400">Boi canh lich su</div>
                <p className="text-sm leading-7 text-stone-300">{asset.historicalContext}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-stone-300">
                {asset.source}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading
          eyebrow="Chien dich"
          title="Storyboard chi tiet cho cac tran danh va buoc ngoat lich su"
          // description="Moi ho so duoi day ghep san phan dien giai lich su, vai tro cua Le Duan va ghi chu can thiet de dua thang vao bao tang."
        />

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
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">Chi tiet lich su</div>
                    <p className="text-sm leading-7 text-stone-300">{campaign.historicalDetail}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">Vai tro trong tuyen ke chuyen ve Le Duan</div>
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
