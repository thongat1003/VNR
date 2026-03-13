import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Clock3,
  Cuboid,
  Flag,
  GraduationCap,
  Landmark,
  Lightbulb,
  Shield,
  type LucideIcon
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

type HistoricalMark = {
  id: string;
  title: string;
  summary: string;
  image: string;
  icon: LucideIcon;
};

type ProjectFeature = {
  id: string;
  title: string;
  detail: string;
  icon: LucideIcon;
};

const keyFigures = [
  { label: 'Năm sinh - mất', value: '1907 - 1986' },
  { label: 'Hoạt động cách mạng', value: 'Gần 60 năm' },
  { label: 'Giữ cương vị lãnh đạo', value: '26 năm' }
] as const;

const historicalMarks: HistoricalMark[] = [
  {
    id: 'prison',
    title: 'Ý chí gang thép trong chốn lao tù',
    summary:
      'Bị thực dân Pháp bắt giam nhiều lần và đày qua Hỏa Lò, Sơn La, Côn Đảo với tổng thời gian gần 15 năm, đồng chí Lê Duẩn không hề khuất phục mà cùng đồng chí biến nhà tù thành trường học cách mạng để rèn ý chí và lý luận.',
    image: '/assets/archive/ban-tu-con-dao-1931-1936.jpg',
    icon: Shield
  },
  {
    id: 'south',
    title: 'Ngọn hải đăng của Cách mạng miền Nam',
    summary:
      'Sau Hiệp định Genève 1954, ông bám trụ lại miền Nam trong lòng nhân dân. Bản Đề cương cách mạng miền Nam năm 1956 đã mở ra con đường đấu tranh tất yếu, đặt nền cho phong trào Đồng Khởi và cuộc kháng chiến giải phóng.',
    image: '/assets/archive/de-cuong-cach-mang-mien-nam-1956.png',
    icon: Flag
  },
  {
    id: 'spring',
    title: '"Kiến trúc sư" của Đại thắng Mùa Xuân 1975',
    summary:
      'Trên cương vị Bí thư Thứ nhất, ông cùng Bộ Chính trị đồng thời xây dựng hậu phương miền Bắc và hoạch định chiến lược giải phóng miền Nam, để rồi đi đến mệnh lệnh lịch sử “Thần tốc, táo bạo” và thắng lợi trọn vẹn ngày 30/4/1975.',
    image: '/assets/archive/bo-chinh-tri-xuan-1975.jpg',
    icon: Landmark
  },
  {
    id: 'legacy',
    title: 'Di sản tư tưởng lớn',
    summary:
      'Không chỉ là nhà chiến lược quân sự, chính trị, Lê Duẩn còn để lại hệ thống tư tưởng quan trọng về quyền làm chủ tập thể, về mối quan hệ giữa Đảng, Nhà nước và nhân dân, vẫn còn giá trị trong công cuộc đổi mới hôm nay.',
    image: '/assets/archive/tham-lien-xo-1980.jpg',
    icon: Lightbulb
  }
];

const projectFeatures: ProjectFeature[] = [
  {
    id: 'spaces',
    title: '5 không gian trưng bày chuyên đề',
    detail:
      'Quê hương & Tuổi trẻ, Hoạt động Cách mạng, Kháng chiến chống Pháp, “Kiến trúc sư” Thống nhất và Di sản & Đổi mới.',
    icon: Landmark
  },
  {
    id: 'timeline',
    title: 'Timeline chi tiết 1907 - 1986',
    detail: 'Theo dõi trọn vẹn cuộc đời, sự nghiệp và các bước ngoặt lớn của Tổng Bí thư Lê Duẩn theo dòng thời gian trực quan.',
    icon: Clock3
  },
  {
    id: 'artifacts',
    title: 'Hiện vật 3D và tư liệu số hóa',
    detail:
      'Từ bản đồ quê hương Quảng Trị, hồ sơ nhà tù, đài radio kháng chiến đến bản phục chế Đề cương Cách mạng miền Nam.',
    icon: Cuboid
  }
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(214,178,111,0.18),transparent_30%),linear-gradient(135deg,#130e0b_0%,#1a120d_55%,#0b0908_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_30%,rgba(255,255,255,0.02)_60%,transparent)]" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 p-6 md:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-museum.accent">Giới thiệu dự án</p>
              <VerifiedBadge label="Lớp học không tường" />
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Bảo tàng số 3D Tổng Bí thư Lê Duẩn
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-stone-200 md:text-xl">
              “Kiến trúc sư chiến lược của cách mạng Việt Nam - Trọn đời vì sự nghiệp giải phóng dân tộc”
            </p>

            <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-stone-300">
              <p>
                Tổng Bí thư Lê Duẩn (1907 - 1986), tên khai sinh là Lê Văn Nhuận, sinh ra tại huyện Triệu Phong, tỉnh Quảng Trị
                - miền quê giàu truyền thống yêu nước. Ông là một trong những nhà lãnh đạo có tầm vóc và ảnh hưởng sâu sắc nhất
                trong lịch sử Việt Nam hiện đại.
              </p>
              <p>
                Thuộc lớp đảng viên đầu tiên của Đảng Cộng sản Đông Dương và là người học trò xuất sắc của Chủ tịch Hồ Chí Minh,
                cuộc đời ông là một bản anh hùng ca lớn. Với 79 năm tuổi đời, gần 60 năm hoạt động cách mạng liên tục và 26 năm
                giữ cương vị Bí thư Thứ nhất, Tổng Bí thư, ông đã cống hiến trọn đời cho độc lập dân tộc, thống nhất Tổ quốc và
                hạnh phúc của nhân dân.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/museum"
                className="inline-flex items-center gap-2 rounded-full border border-museum.accent/35 bg-museum.accent/15 px-5 py-3 text-sm font-medium text-museum.accent transition hover:bg-museum.accent/20"
              >
                Bắt đầu tham quan Không gian 3D
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/timeline"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10"
              >
                Xem toàn bộ Timeline
              </Link>
              <Link
                href="/media"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10"
              >
                Khám phá Kho Ảnh & Video
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {keyFigures.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-400">{item.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-full">
            <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(214,178,111,0.16),rgba(255,255,255,0.02)_26%,rgba(0,0,0,0.18)_70%)]" />

            <div className="absolute left-6 top-6 right-20 bottom-24 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/assets/hero/le-duan-portrait.png"
                alt="Tổng Bí thư Lê Duẩn"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.2)_55%,rgba(0,0,0,0.65))]" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.24em] text-museum.accent">Nhân vật trung tâm</div>
                <div className="mt-2 text-xl font-semibold text-white">Tổng Bí thư Lê Duẩn</div>
              </div>
            </div>

            <div className="absolute bottom-8 right-6 w-[46%] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/35 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/archive/dai-hoi-iii-1960-voi-chu-tich-ho-chi-minh.jpg"
                  alt="Lê Duẩn cùng Chủ tịch Hồ Chí Minh"
                  fill
                  sizes="(max-width: 1024px) 45vw, 18vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.7))]" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-stone-400">Tư liệu tiêu biểu</div>
                <div className="mt-2 text-sm font-medium leading-6 text-white">Hình ảnh bên Chủ tịch Hồ Chí Minh tại Đại hội III năm 1960</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(214,178,111,0.12),rgba(255,255,255,0.03))] p-6 shadow-museum md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-museum.accent">Tầm vóc lãnh đạo</p>
          <blockquote className="mt-4 text-2xl font-medium leading-10 text-white">
            “Sự sáng suốt của đồng chí thể hiện nổi bật trước bước ngoặt của lịch sử và những tình huống phức tạp.”
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-stone-400">Trích Điếu văn của Tổng Bí thư Trường Chinh</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-8">
          <SectionHeading
            eyebrow="1. Tầm vóc một nhà lãnh đạo kiệt xuất"
            title="Một nhân cách lớn, một tầm nhìn chiến lược xuyên suốt lịch sử hiện đại Việt Nam"
            description="Cuộc đời và sự nghiệp của đồng chí Lê Duẩn gắn liền với những chặng đường trọng yếu nhất của cách mạng Việt Nam, từ đấu tranh giải phóng dân tộc đến xây dựng đất nước sau hòa bình."
          />

          <div className="mt-6 space-y-4 text-base leading-8 text-stone-300">
            <p>
              Từ miền quê Triệu Phong giàu truyền thống yêu nước, đồng chí Lê Duẩn bước vào con đường cách mạng với khí chất của
              một người cộng sản kiên trung. Ông trở thành một trong những nhà lãnh đạo có ảnh hưởng sâu rộng nhất đến tiến trình
              phát triển của đất nước trong thế kỷ XX.
            </p>
            <p>
              Trong lịch sử Việt Nam hiện đại, tên tuổi Lê Duẩn gắn với bản lĩnh chính trị vững vàng, tư duy chiến lược sắc bén
              và khả năng đưa ra quyết sách ở những thời điểm bước ngoặt. Đó cũng là lý do bảo tàng số này được xây dựng như một
              không gian tri ân, học tập và truyền cảm hứng cho các thế hệ hôm nay.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading
          eyebrow="2. Những dấu ấn lịch sử vĩ đại"
          title="Bốn dấu ấn cốt lõi làm nên tầm vóc của Tổng Bí thư Lê Duẩn"
          description="Hành trình cách mạng của ông gắn liền với những giai đoạn cam go và hào hùng nhất của dân tộc, từ lao tù thực dân đến đại thắng thống nhất đất nước và di sản tư tưởng để lại cho hôm nay."
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {historicalMarks.map((item, index) => {
            const Icon = item.icon;

            return (
              <article key={item.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0807] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <div className="relative h-56">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1280px) 100vw, 48vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.82))]" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone-200 backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5 text-museum.accent" />
                    Dấu ấn {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-2xl font-semibold leading-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-stone-300">{item.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading
          eyebrow="3. Về dự án Bảo tàng số 3D Lê Duẩn"
          title="Lịch sử và công nghệ hội tụ trong một lớp học không tường"
          description="Bảo tàng số Lê Duẩn ra đời như một nỗ lực tri ân và gìn giữ di sản của Tổng Bí thư Lê Duẩn trên không gian mạng, nơi người xem có thể vượt qua giới hạn không gian và thời gian để tự do khám phá."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone-300">
              <GraduationCap className="h-3.5 w-3.5 text-museum.accent" />
              Địa chỉ đỏ trên không gian số
            </div>

            <div className="mt-6 space-y-4 text-base leading-8 text-stone-300">
              <p>
                Sử dụng nền tảng web tương tác 3D với React Three Fiber và Next.js, dự án số hóa toàn diện kho hiện vật, ảnh tư
                liệu, video và bút tích lịch sử, tạo thành một không gian tưởng niệm sống động và dễ tiếp cận.
              </p>
              <p>
                Bảo tàng số không chỉ là nơi nhìn lại một nhân cách lớn, mà còn là không gian giáo dục truyền cảm hứng về lòng yêu
                nước, ý chí tự lực tự cường và tư duy sáng tạo cho các thế hệ Việt Nam hôm nay và mai sau.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {projectFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.id} className="rounded-[1.75rem] border border-white/10 bg-museum.card p-5 shadow-museum">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-museum.accent/30 bg-museum.accent/10 text-museum.accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">{feature.detail}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            href="/museum"
            className="group rounded-[1.8rem] border border-museum.accent/25 bg-[linear-gradient(135deg,rgba(214,178,111,0.14),rgba(255,255,255,0.04))] p-6 transition hover:border-museum.accent/45"
          >
            <div className="text-sm uppercase tracking-[0.24em] text-museum.accent">Call to action</div>
            <div className="mt-3 text-2xl font-semibold text-white">Bắt đầu tham quan Không gian 3D</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-stone-200">
              Mở bảo tàng
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/timeline"
            className="group rounded-[1.8rem] border border-white/10 bg-museum.card p-6 transition hover:border-white/20"
          >
            <div className="text-sm uppercase tracking-[0.24em] text-stone-400">Điều hướng</div>
            <div className="mt-3 text-2xl font-semibold text-white">Xem toàn bộ Dòng thời gian</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-stone-200">
              Mở timeline
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/media"
            className="group rounded-[1.8rem] border border-white/10 bg-museum.card p-6 transition hover:border-white/20"
          >
            <div className="text-sm uppercase tracking-[0.24em] text-stone-400">Tư liệu</div>
            <div className="mt-3 text-2xl font-semibold text-white">Khám phá Kho Ảnh & Video Tư liệu</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-stone-200">
              Mở kho tư liệu
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
