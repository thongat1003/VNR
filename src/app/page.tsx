import { Hero } from '@/components/home/Hero';
import { TimelinePreview } from '@/components/home/TimelinePreview';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { mediaAssets } from '@/data/media';
import { exhibits } from '@/data/exhibits';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Khái niệm nội dung"
          title="Cấu trúc không gian gợi ý cho bảo tàng lịch sử số"
          description="Các phòng được thiết kế như một hành trình kể chuyện theo thời gian, kết hợp giữa hiện vật 3D, media wall và popup tư liệu."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {[
            'Quê hương & Tuổi trẻ',
            'Hoạt động Cách mạng (1930-1945)',
            'Kháng chiến chống Pháp (1945-1954)',
            '“Kiến trúc sư” Thống nhất (1954-1975)',
            'Di sản & Đổi mới (1976-1986)'
          ].map((room, index) => (
            <div key={room} className="rounded-[1.6rem] border border-white/10 bg-museum.card p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-museum.accent/20 bg-museum.accent/10 text-sm font-semibold text-museum.accent">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{room}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Thêm panel, ảnh lịch sử, hiện vật mô phỏng, sơ đồ tư duy, âm thanh và video ngắn tương ứng.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6">
            <SectionHeading
              eyebrow="Hiện vật"
              title="Mẫu hiện vật 3D và popup"
              description="Bộ khung đã có sẵn hiện vật mẫu để bạn thay trực tiếp bằng mô hình thật hoặc ảnh/tài liệu đã số hóa."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {exhibits.slice(0, 6).map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-white">{item.name}</h3>
                    {item.verified ? <VerifiedBadge /> : null}
                  </div>
                  <p className="mt-2 text-sm text-stone-300">{item.room}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6">
            <SectionHeading
              eyebrow="Media"
              title="Ảnh và video để dựng bảo tàng lịch sử"
              description="Trang Tư liệu trong project tách riêng ảnh và video theo từng không gian để bạn quản lý dễ hơn."
            />
            <div className="mt-6 grid gap-4">
              {mediaAssets.slice(0, 4).map((asset) => (
                <div key={asset.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-white">{asset.title}</h3>
                    {asset.verified ? <VerifiedBadge /> : null}
                  </div>
                  <p className="mt-2 text-sm text-stone-300">{asset.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TimelinePreview />
    </>
  );
}
