import type { Metadata } from 'next';
import Link from 'next/link';

const postcardVideoSrc = '/assets/postcard/le-duan-postcard.mp4';

export const metadata: Metadata = {
  title: 'Postcard Video | Bao tang so Le Duan',
  description: 'Trang phat MP4 postcard cho du an Bao tang so Le Duan.'
};

export default function MuseumPostcardPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-museum.card shadow-museum">
        <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(214,178,111,0.14),transparent_42%)] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-museum.accent">Postcard</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              {/* <h1 className="text-3xl font-semibold text-white md:text-5xl">Trang postcard video</h1> */}
              {/* <p className="mt-3 text-base leading-7 text-stone-300 md:text-lg">
                Video MP4 moi duoc them vao du an. Trang nay dung de xem, phat toan man hinh hoac gui link trinh chieu.
              </p> */}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/museum"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100 transition hover:bg-white/10"
              >
                Ve bao tang
              </Link>
              <a
                href={postcardVideoSrc}
                download
                className="rounded-full border border-museum.accent/35 bg-museum.accent/15 px-4 py-2 text-sm text-museum.accent transition hover:bg-museum.accent/20"
              >
                Tai MP4
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <video
              className="aspect-video w-full bg-black"
              controls
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={postcardVideoSrc} type="video/mp4" />
              Trinh duyet cua ban khong ho tro the video.
            </video>
          </div>

          {/* <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-stone-400">
            <p>Duong dan file: {postcardVideoSrc}</p>
            <p>Dung fullscreen trong player de trinh chieu.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}