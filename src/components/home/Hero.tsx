import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Landmark, PlayCircle, ShieldCheck } from 'lucide-react';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-hero-radial">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <VerifiedBadge label="Đã ghép tư liệu từ file Word" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300">
              <ShieldCheck className="h-3.5 w-3.5 text-museum.accent" />
              TypeScript · Next.js · Tailwind · React Three Fiber
            </span>
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.32em] text-museum.accent">Triển lãm ảo / Digital Museum</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Bảo tàng lịch sử 3D về cuộc đời và sự nghiệp của Tổng Bí thư Lê Duẩn
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300">
              Bảo tàng số Lê Duẩn: Nơi lịch sử và công nghệ hội tụ. Với nền tảng web tương tác 3D hiện đại, dự án này
              số hóa toàn diện hàng loạt tài liệu, hình ảnh và hiện vật gốc về cuộc đời Tổng Bí thư Lê Duẩn. Người xem
              có thể tự do khám phá dòng thời gian chi tiết, tương tác với các sơ đồ tư duy, popup tư liệu và lắng
              nghe âm thanh lịch sử qua 5 phòng trưng bày chuyên đề (từ Quê hương &amp; Tuổi trẻ đến Di sản &amp; Đổi
              mới). Hãy bắt đầu hành trình trực quan để thấu hiểu di sản của một tư duy lớn, gắn liền với công cuộc
              thống nhất và xây dựng đất nước.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/museum"
              className="inline-flex items-center gap-2 rounded-2xl bg-museum.primary px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              Vào không gian 3D
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-stone-100 transition hover:bg-white/10"
            >
              Xem ảnh & video tư liệu
              <PlayCircle className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Landmark, value: '5', label: 'phòng trưng bày chính' },
              { icon: ShieldCheck, value: '24', label: 'ảnh gốc đã nhập từ hồ sơ' },
              { icon: PlayCircle, value: '8', label: 'cụm tư liệu đã ghép vào giao diện' }
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <Icon className="mb-3 h-5 w-5 text-museum.accent" />
                <div className="text-2xl font-semibold text-white">{value}</div>
                <div className="text-sm text-stone-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-museum.primary/20 to-museum.accent/10 blur-2xl" />
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-museum.card shadow-museum">
            <Image
              src="/assets/hero/le-duan-hero-source.png"
              alt="Poster Tổng Bí thư Lê Duẩn ở phần mở đầu trang chủ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
