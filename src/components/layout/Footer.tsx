import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getRoutes } from '@/i18n/routing';

type FooterProps = {
  locale: Locale;
};

const credits = [
  'Soạn nội dung: Hứa Hoài Thương, Đào Bùi Thanh Duy',
  'Thuyết trình: Ngô Huỳnh Tuấn, Vũ Trung Tín',
  'Làm web: Trần Anh Thông, Đỗ Trần Phúc Hậu'
] as const;

const copy = {
  vi: {
    eyebrow: 'Dự án mẫu',
    title: 'Bảo tàng lịch sử số về Lê Duẩn'
  },
  en: {
    eyebrow: 'Prototype project',
    title: 'A digital historical museum on Le Duan'
  }
} as const;

export function Footer({ locale }: FooterProps) {
  const routes = getRoutes(locale);
  const splitIndex = Math.max(1, Math.floor(routes.length / 2));
  const routeColumns = [routes.slice(0, splitIndex), routes.slice(splitIndex)];
  const ui = copy[locale];

  return (
    <footer className="border-t border-white/10 bg-museum.surface/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-[1.4fr_1fr] md:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-museum.accent">{ui.eyebrow}</p>
          <h3 className="text-2xl font-semibold text-white">{ui.title}</h3>
          <div className="max-w-2xl space-y-1 text-stone-300">
            {credits.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {routeColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="grid content-start gap-3">
              {column.map((route) => (
                <Link key={route.href} href={route.href} className="text-stone-300 transition hover:text-white">
                  {route.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
