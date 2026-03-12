'use client';

import type { Exhibit } from '@/types';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

type MuseumLegendProps = {
  isLocked: boolean;
  nearbyExhibit: Exhibit | null;
};

export function MuseumLegend({ isLocked, nearbyExhibit }: MuseumLegendProps) {
  return (
    <div className="absolute left-4 top-4 z-10 max-w-sm rounded-[1.5rem] border border-white/10 bg-museum.surface/85 p-4 shadow-museum backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.24em] text-museum.accent">Điều khiển</p>
      <h3 className="mt-2 text-lg font-semibold text-white">Tham quan góc nhìn thứ nhất</h3>
      <p className="mt-2 text-sm leading-6 text-stone-300">
        Máy tính: nhấn vào nút bắt đầu để khóa chuột, rê chuột để nhìn quanh, dùng WASD hoặc phím mũi tên để di
        chuyển. Khi đứng gần hiện vật, nhấn E để mở thông tin. Nhấn ESC để thoát chế độ nhìn thứ nhất.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-200">WASD / mũi tên</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-200">Chuột để nhìn</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-200">E để xem hiện vật</span>
        <VerifiedBadge label="Hiện vật có mô tả" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          id="museum-enter-fps"
          type="button"
          disabled={isLocked}
          className="pointer-events-auto rounded-full border border-museum.accent/30 bg-museum.accent/15 px-4 py-2 text-sm font-medium text-museum.accent transition hover:border-museum.accent/60 hover:bg-museum.accent/20 disabled:cursor-default disabled:opacity-80"
        >
          {isLocked ? 'Đang tham quan' : 'Bắt đầu tham quan'}
        </button>

        {nearbyExhibit ? (
          <div className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-stone-200">
            Gần hiện vật: {nearbyExhibit.name}. Nhấn E để xem.
          </div>
        ) : null}
      </div>
    </div>
  );
}
