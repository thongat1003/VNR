import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MuseumScene } from '@/components/museum/MuseumScene';

export default function MuseumPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
      <SectionHeading eyebrow="Bao tang 3D" title="Khong gian trung bay ao co the tuong tac ngay" />

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/museum/postcard"
          className="rounded-full border border-museum.accent/35 bg-museum.accent/15 px-4 py-2 text-sm font-medium text-museum.accent transition hover:bg-museum.accent/20"
        >
          Mo postcard MP4
        </Link>
      </div>

      <div className="mt-8">
        <MuseumScene />
      </div>

      <div className="mt-10 rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum md:p-8">
        <blockquote className="text-lg font-medium leading-8 text-white md:text-xl">
          "Su sang suot cua dong chi the hien noi bat truoc buoc ngoat cua lich su va nhung tinh huong phuc tap."
        </blockquote>
        <p className="mt-3 text-sm uppercase tracking-[0.24em] text-museum.accent">Trich Dieu van cua Tong Bi thu Truong Chinh</p>

        <div className="mt-6 space-y-4 text-base leading-8 text-stone-300">
          <p>
            Voi 79 tuoi doi, gan 60 nam hoat dong cach mang lien tuc va 26 nam dam nhan cuong vi Bi thu Thu nhat, Tong Bi thu,
            dong chi Le Duan thuc su la ket tinh cua tri tue cach mang va gia tri lich su - van hoa Viet Nam.
          </p>
          <p>
            Du an Bao tang 3D nay la mot no luc so hoa nham tri an va luu giu mai mai hinh anh mot nguoi cong san kien trung,
            mot nha lanh dao kiet xuat cho muon doi sau.
          </p>
        </div>
      </div>
    </section>
  );
}
