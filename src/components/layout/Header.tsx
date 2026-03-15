'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import type { Locale } from '@/i18n/config';
import { getRoutes, localizeHref, stripLocaleFromPath, swapLocaleInPath } from '@/i18n/routing';

type HeaderProps = {
  locale: Locale;
};

const copy = {
  vi: {
    eyebrow: 'Bảo tàng số',
    brand: 'Lê Duẩn',
    menuLabel: 'Mở menu',
    // techDemo: 'Bản demo kỹ thuật',
    localeLabel: 'Ngôn ngữ',
  },
  en: {
    eyebrow: 'Digital Museum',
    brand: 'Le Duan',
    menuLabel: 'Open menu',
    techDemo: 'Technical demo',
    localeLabel: 'Language'
  }
} as const;

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const routes = getRoutes(locale);
  const normalizedPath = stripLocaleFromPath(pathname);
  const ui = copy[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-museum.bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href={localizeHref(locale, '/')} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-museum.accent/30 bg-museum.primary/20 text-lg font-bold text-museum.accent">
            LD
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">{ui.eyebrow}</p>
            <p className="font-semibold text-white">{ui.brand}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {routes.map((route) => {
            const active = normalizedPath === stripLocaleFromPath(route.href);
            return (
              <Link
                key={route.href}
                href={route.href}
                className={active ? 'text-museum.accent' : 'text-stone-300 transition hover:text-white'}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <span className="px-2 text-[10px] uppercase tracking-[0.22em] text-stone-400">{ui.localeLabel}</span>
            {(['vi', 'en'] as const).map((targetLocale) => (
              <Link
                key={targetLocale}
                href={swapLocaleInPath(pathname, targetLocale)}
                className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] transition ${
                  locale === targetLocale ? 'bg-museum.accent text-black' : 'text-stone-300 hover:text-white'
                }`}
              >
                {targetLocale}
              </Link>
            ))}
          </div>
          <VerifiedBadge locale={locale} />
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-stone-200 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={ui.menuLabel}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-museum.surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            <div className="mb-2 flex gap-2">
              {(['vi', 'en'] as const).map((targetLocale) => (
                <Link
                  key={targetLocale}
                  href={swapLocaleInPath(pathname, targetLocale)}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] ${
                    locale === targetLocale ? 'bg-museum.accent text-black' : 'border border-white/10 text-stone-200'
                  }`}
                >
                  {targetLocale}
                </Link>
              ))}
            </div>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-stone-200 transition hover:bg-white/5"
              >
                <div className="font-medium">{route.label}</div>
                {route.description ? <div className="text-sm text-stone-400">{route.description}</div> : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
