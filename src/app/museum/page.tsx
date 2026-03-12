import { SectionHeading } from '@/components/shared/SectionHeading';
import { MuseumScene } from '@/components/museum/MuseumScene';

export default function MuseumPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Bảo tàng 3D"
        title="Không gian trưng bày ảo có thể tương tác ngay"
        description="Đây là bản demo kỹ thuật: bạn có thể thay từng hiện vật bằng glTF, ảnh, video hoặc hotspot dữ liệu lịch sử thật."
      />

      <div className="mt-8">
        <MuseumScene />
      </div>
    </section>
  );
}
