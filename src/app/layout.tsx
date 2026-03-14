import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Le Duan Digital Museum',
  description: 'A bilingual virtual museum about the life and legacy of Le Duan.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-museum.bg text-stone-100 antialiased">{children}</body>
    </html>
  );
}
