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
        eyebrow="Tư liệu"
        title="Kho ảnh, video và storyboard cho các trận đánh lịch sử"
        description="Thumbnail và ảnh cốt lõi trong trang này đã được thay bằng ảnh thật trích từ file Word, đồng thời giữ lại phần bối cảnh lịch sử và cách dùng trong trưng bày."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { label: 'Bộ ảnh', value: imageCount.toString().padStart(2, '0') },
          { label: 'Module video', value: videoCount.toString().padStart(2, '0') },
          { label: 'Ưu tiên cốt lõi', value: coreCount.toString().padStart(2, '0') }
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
                    {asset.priority === 'core' ? 'cốt lõi' : 'bổ trợ'}
                  </span>
                </div>
                {asset.verified ? <VerifiedBadge /> : null}
              </div>
              <h3 className="text-xl font-semibold text-white">{asset.title}</h3>
              <p className="text-sm text-museum.accent">{asset.section}</p>
              <p className="text-sm leading-7 text-stone-300">{asset.note}</p>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-1 text-xs uppercase tracking-[0.22em] text-stone-400">Bối cảnh lịch sử</div>
                <p className="text-sm leading-7 text-stone-300">{asset.historicalContext}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-1 text-xs uppercase tracking-[0.22em] text-stone-400">Cách dùng trong trưng bày</div>
                <p className="text-sm leading-7 text-stone-300">{asset.usage}</p>
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
          eyebrow="Chiến dịch"
          title="Storyboard chi tiết cho các trận đánh và bước ngoặt lịch sử"
          description="Mỗi hồ sơ dưới đây ghép sẵn phần diễn giải lịch sử, vai trò của Lê Duẩn và checklist hình ảnh/video cần chuẩn bị để đẩy thẳng vào bảo tàng."
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
              <div className="mt-4 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-4">
                  <p className="text-base leading-7 text-stone-300">{campaign.overview}</p>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">Chi tiết lịch sử</div>
                    <p className="text-sm leading-7 text-stone-300">{campaign.historicalDetail}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-stone-400">Vai trò trong tuyến kể chuyện về Lê Duẩn</div>
                    <p className="text-sm leading-7 text-stone-300">{campaign.leDuanRole}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-400">Hình ảnh cần có</div>
                    <ul className="space-y-2 text-sm leading-7 text-stone-300">
                      {campaign.keyVisuals.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-400">Kế hoạch video</div>
                    <ul className="space-y-2 text-sm leading-7 text-stone-300">
                      {campaign.videoPlan.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
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
