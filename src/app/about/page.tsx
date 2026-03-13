import { SectionHeading } from '@/components/shared/SectionHeading';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import { editorialPrinciples, licensingChecklist, productionPhases } from '@/data/contentPlan';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Giới thiệu"
        title="Kế hoạch biên tập và triển khai toàn bộ ảnh, video, chiến dịch lịch sử"
        description="Trang này tổng hợp nguyên tắc biên tập, checklist bản quyền và lộ trình sản xuất để bạn có thể đưa bộ ảnh/video thật về Lê Duẩn vào không gian trưng bày theo từng giai đoạn rõ ràng."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold text-white">Nguyên tắc biên tập</h3>
            <VerifiedBadge />
          </div>
          <ul className="mt-4 space-y-3 text-stone-300">
            {editorialPrinciples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6">
          <h3 className="text-2xl font-semibold text-white">Checklist bản quyền & xuất bản</h3>
          <ul className="mt-4 space-y-3 text-stone-300">
            {licensingChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <SectionHeading
          eyebrow="Lộ trình"
          title="4 giai đoạn để lên full nội dung ảnh và video"
          description="Nếu bạn đã có đầy đủ hình ảnh về Lê Duẩn, đây là trình tự nên làm để đưa toàn bộ lên bảo tàng số mà không bị rối phần dữ liệu, bản quyền và kể chuyện lịch sử."
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {productionPhases.map((phase) => (
            <article key={phase.id} className="rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-museum.accent/20 bg-museum.accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-museum.accent">
                  {phase.timeframe}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{phase.objective}</p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-400">Deliverables</div>
                <ul className="space-y-2 text-sm leading-7 text-stone-300">
                  {phase.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
