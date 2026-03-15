import type { RouteItem } from '@/types';

export const routes: RouteItem[] = [
  { label: 'Trang chủ', href: '/', description: 'Giới thiệu tổng quan dự án' },
  { label: 'Bảo tàng 3D', href: '/museum', description: 'Không gian ảo tương tác' },
  { label: 'Postcard', href: '/museum/postcard', description: 'Phát video MP4 postcard' },
  { label: 'Timeline', href: '/timeline', description: 'Dòng thời gian trực quan' },
  { label: 'Tư liệu', href: '/media', description: 'Ảnh và video lịch sử' },
  { label: 'Công nghệ', href: '/technology', description: 'Công nghệ được sử dụng và phụ lục AI' },
  { label: 'Giới thiệu', href: '/about', description: 'Nguồn tư liệu và định hướng dự án' }
];
