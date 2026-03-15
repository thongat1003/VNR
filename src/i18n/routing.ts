import type { RouteItem } from '@/types';
import type { Locale } from '@/i18n/config';

type RouteDefinition = {
  key: 'home' | 'museum' | 'postcard' | 'timeline' | 'media' | 'technology' | 'about';
  path: '/' | '/museum' | '/museum/postcard' | '/timeline' | '/media' | '/technology' | '/about';
};

const routeDefinitions: RouteDefinition[] = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'timeline', path: '/timeline' },
  { key: 'media', path: '/media' },
  { key: 'postcard', path: '/museum/postcard' },
  { key: 'museum', path: '/museum' },
  { key: 'technology', path: '/technology' }
];

const routeMessages: Record<Locale, Record<RouteDefinition['key'], { label: string; description: string }>> = {
  vi: {
    home: { label: 'Trang chủ', description: 'Giới thiệu tổng quan dự án' },
    about: { label: 'Giới thiệu', description: 'Nguồn tư liệu và định hướng dự án' },
    museum: { label: 'Bảo tàng 3D', description: 'Không gian ảo tương tác' },
    postcard: { label: 'Postcard', description: 'Phát video MP4 postcard' },
    timeline: { label: 'Timeline', description: 'Dòng thời gian trực quan' },
    media: { label: 'Tư liệu', description: 'Ảnh và video lịch sử' },
    technology: { label: 'Công nghệ', description: 'Công nghệ được sử dụng và phụ lục AI' }
  },
  en: {
    home: { label: 'Home', description: 'Project overview' },
    about: { label: 'About', description: 'Sources and project direction' },
    museum: { label: '3D Museum', description: 'Interactive virtual space' },
    postcard: { label: 'Postcard', description: 'Play the MP4 postcard' },
    timeline: { label: 'Timeline', description: 'Visual historical journey' },
    media: { label: 'Media', description: 'Historical images and videos' },
    technology: { label: 'Technology', description: 'Stack used in the project and AI appendix' }
  }
};

export function localizeHref(locale: Locale, path: string) {
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

export function getRoutes(locale: Locale): RouteItem[] {
  return routeDefinitions.map((route) => ({
    label: routeMessages[locale][route.key].label,
    description: routeMessages[locale][route.key].description,
    href: localizeHref(locale, route.path)
  }));
}

export function stripLocaleFromPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return '/';
  }

  if (segments[0] !== 'vi' && segments[0] !== 'en') {
    return pathname;
  }

  if (segments.length === 1) {
    return '/';
  }

  return `/${segments.slice(1).join('/')}`;
}

export function swapLocaleInPath(pathname: string, locale: Locale) {
  return localizeHref(locale, stripLocaleFromPath(pathname));
}
