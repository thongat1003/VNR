import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeCustomizer } from '@/components/layout/ThemeCustomizer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `${siteConfig.title} | Triển lãm ảo`,
  description: siteConfig.description,
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-museum.bg text-stone-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ThemeCustomizer />
      </body>
    </html>
  );
}
