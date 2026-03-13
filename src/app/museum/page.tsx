import { SectionHeading } from '@/components/shared/SectionHeading';
import { MuseumScene } from '@/components/museum/MuseumScene';

export default function MuseumPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Bảo tàng 3D"
        title="Không gian trưng bày ảo có thể tương tác ngay"
      />

      <div className="mt-8">
        <MuseumScene />
      </div>

      <div className="mt-10 rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-8">
        <blockquote className="text-lg font-medium leading-8 text-white md:text-xl">
          "Sự sáng suốt của đồng chí thể hiện nổi bật trước bước ngoặt của lịch sử và những tình huống phức tạp."
        </blockquote>
        <p className="mt-3 text-sm uppercase tracking-[0.24em] text-museum.accent">
          Trích Điếu văn của Tổng Bí thư Trường Chinh
        </p>

        <div className="mt-6 space-y-4 text-base leading-8 text-stone-300">
          <p>
            Với 79 tuổi đời, gần 60 năm hoạt động cách mạng liên tục và 26 năm đảm nhận cương vị Bí thư Thứ nhất,
            Tổng Bí thư, đồng chí Lê Duẩn thực sự là kết tinh của trí tuệ cách mạng và giá trị lịch sử - văn hóa Việt
            Nam.
          </p>
          <p>
            Dự án Bảo tàng 3D này là một nỗ lực số hóa nhằm tri ân và lưu giữ mãi mãi hình ảnh một người cộng sản kiên
            trung, một nhà lãnh đạo kiệt xuất cho muôn đời sau.
          </p>
        </div>
      </div>
    </section>
  );
}
