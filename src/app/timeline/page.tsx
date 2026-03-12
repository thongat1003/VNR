import Image from 'next/image';
import { timelineEvents } from '@/data/timeline';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

export default function TimelinePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Timeline"
        title="Dòng thời gian đầy đủ hơn về cuộc đời, chiến lược và các bước ngoặt lịch sử"
        description="Mỗi mốc nay đã có lớp diễn giải sâu hơn, gợi ý media tương ứng và nguồn kiểm chứng để nối trực tiếp với bảo tàng 3D, kho ảnh/video và hồ sơ chiến dịch."
      />

      <div className="relative mt-10 space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-1/2">
        {timelineEvents.map((event, index) => (
          <article key={event.id} className="relative grid gap-6 md:grid-cols-2 md:gap-10">
            <div className={index % 2 === 0 ? 'md:pr-10' : 'md:order-2 md:pl-10'}>
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-museum.card shadow-museum">
                <Image src={event.image} alt={event.title} width={1200} height={700} className="h-56 w-full object-cover" />
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-museum.accent">{event.year}</span>
                    {event.verified ? <VerifiedBadge /> : null}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
                  <p className="text-base leading-7 text-stone-300">{event.summary}</p>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm leading-7 text-stone-300">{event.detail}</p>
                  </div>
                  <p className="text-sm text-stone-400">Không gian liên kết: {event.room}</p>
                  {event.sourceLinks?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {event.sourceLinks.map((source) => (
                        <a
                          key={source.href}
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-200 transition hover:border-museum.accent/40 hover:text-white"
                        >
                          {source.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className={index % 2 === 0 ? 'md:order-2' : ''} />
            <div className="absolute left-4 top-8 h-3.5 w-3.5 rounded-full border-4 border-museum.bg bg-museum.accent md:left-1/2 md:-translate-x-1/2" />
          </article>
        ))}
      </div>
    </section>
  );
}
