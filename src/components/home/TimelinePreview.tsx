import Image from 'next/image';
import Link from 'next/link';
import { timelineEvents } from '@/data/timeline';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function TimelinePreview() {
  const featuredEvents = timelineEvents.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Timeline"
        title="Các mốc gợi ý để mở rộng thành dòng thời gian trực quan"
        description="Mỗi mốc có thể liên kết ngược lại hiện vật 3D, ảnh, video, trích đoạn và bản đồ tương ứng."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredEvents.map((event) => (
          <article key={event.id} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-museum.card shadow-museum">
            <Image
              src={event.image}
              alt={event.title}
              width={800}
              height={480}
              className="h-44 w-full object-cover"
              style={{ objectPosition: event.imagePosition ?? '50% 50%' }}
            />
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-museum.accent">{event.year}</span>
                {event.verified ? <VerifiedBadge /> : null}
              </div>
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              <p className="text-sm leading-7 text-stone-300">{event.summary}</p>
              <p className="text-sm text-stone-400">Không gian: {event.room}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/timeline" className="text-sm font-medium text-museum.accent transition hover:text-white">
          Xem toàn bộ timeline →
        </Link>
      </div>
    </section>
  );
}
