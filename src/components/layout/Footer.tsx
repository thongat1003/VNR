import Link from 'next/link';
import { routes } from '@/routes';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-museum.surface/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-[1.4fr_1fr] md:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-museum.accent">Dự án mẫu</p>
          <h3 className="text-2xl font-semibold text-white">Bảo tàng lịch sử số về Lê Duẩn</h3>
          <p className="max-w-2xl text-stone-300">
            Bộ khung này ưu tiên kiến trúc rõ ràng, giao diện trang trọng, hỗ trợ SEO và sẵn sàng để thay thế
            ảnh, video, mô hình 3D, âm thanh và tư liệu đã kiểm chứng.
          </p>
        </div>

        <div className="grid gap-3">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="text-stone-300 transition hover:text-white">
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
