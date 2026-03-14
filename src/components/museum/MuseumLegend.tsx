'use client';

import type { Exhibit } from '@/types';
import type { Locale } from '@/i18n/config';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

type MuseumLegendProps = {
  isLocked: boolean;
  nearbyExhibit: Exhibit | null;
  locale: Locale;
};

export function MuseumLegend({ isLocked, nearbyExhibit, locale }: MuseumLegendProps) {
  const copy =
    locale === 'en'
      ? {
          eyebrow: 'Controls',
          title: 'First-person museum tour',
          description:
            'Desktop: click the start button to lock the pointer, move the mouse to look around, and use WASD or the arrow keys to move. When you stand near an exhibit, press E to open its information panel. Press ESC to leave first-person mode.',
          note: 'Detailed captions are hidden in overview mode. Move inside the museum to inspect each exhibit.',
          keyboard: 'WASD / arrows',
          mouse: 'Mouse to look',
          inspect: 'Press E to inspect',
          described: 'Exhibit has description',
          active: 'Tour in progress',
          start: 'Start tour',
          nearby: 'Nearby exhibit'
        }
      : {
          eyebrow: 'Điều khiển',
          title: 'Tham quan góc nhìn thứ nhất',
          description:
            'Máy tính: nhấn nút bắt đầu để khóa chuột, rê chuột để nhìn quanh, dùng WASD hoặc phím mũi tên để di chuyển. Khi đứng gần hiện vật, nhấn E để mở thông tin. Nhấn ESC để thoát chế độ nhìn thứ nhất.',
          note: 'Chi tiết được ẩn ở màn hình tổng quan. Vào bên trong để xem từng hiện vật.',
          keyboard: 'WASD / mũi tên',
          mouse: 'Chuột để nhìn',
          inspect: 'E để xem hiện vật',
          described: 'Hiện vật có mô tả',
          active: 'Đang tham quan',
          start: 'Bắt đầu tham quan',
          nearby: 'Gần hiện vật'
        };

  return (
    <div className="absolute left-4 top-4 z-10 max-w-sm rounded-[1.5rem] border border-white/10 bg-museum.surface/85 p-4 shadow-museum backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.24em] text-museum.accent">{copy.eyebrow}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{copy.title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-300">{copy.description}</p>
      <p className="mt-2 text-xs leading-5 text-stone-400">{copy.note}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-200">{copy.keyboard}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-200">{copy.mouse}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-200">{copy.inspect}</span>
        <VerifiedBadge locale={locale} label={copy.described} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          id="museum-enter-fps"
          type="button"
          disabled={isLocked}
          className="pointer-events-auto rounded-full border border-museum.accent/30 bg-museum.accent/15 px-4 py-2 text-sm font-medium text-museum.accent transition hover:border-museum.accent/60 hover:bg-museum.accent/20 disabled:cursor-default disabled:opacity-80"
        >
          {isLocked ? copy.active : copy.start}
        </button>

        {nearbyExhibit ? (
          <div className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-stone-200">
            {copy.nearby}: {nearbyExhibit.name}
          </div>
        ) : null}
      </div>
    </div>
  );
}
