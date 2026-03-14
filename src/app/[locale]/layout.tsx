import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeCustomizer } from '@/components/layout/ThemeCustomizer';
import { isLocale, locales, type Locale } from '@/i18n/config';
import { getSiteConfig } from '@/i18n/site';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const siteConfig = getSiteConfig(locale);

  return {
    title: `${siteConfig.title} | ${siteConfig.exhibitionSuffix}`,
    description: siteConfig.description
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const activeLocale = locale as Locale;

  return (
    <>
      <Header locale={activeLocale} />
      <main>{children}</main>
      <Footer locale={activeLocale} />
      <ThemeCustomizer locale={activeLocale} />
    </>
  );
}
