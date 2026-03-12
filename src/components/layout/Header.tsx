'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/routes';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-museum.bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-museum.accent/30 bg-museum.primary/20 text-lg font-bold text-museum.accent">
            LD
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Bảo tàng số</p>
            <p className="font-semibold text-white">Lê Duẩn</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {routes.map((route) => {
            const active = pathname === route.href;
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

        <div className="hidden md:block">
          <VerifiedBadge label="Bản demo kỹ thuật" />
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-stone-200 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Mở menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-museum.surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
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
