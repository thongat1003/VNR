import type { RouteItem } from '@/types';

export const routes: RouteItem[] = [
  { label: 'Trang chu', href: '/', description: 'Gioi thieu tong quan du an' },
  { label: 'Bao tang 3D', href: '/museum', description: 'Khong gian ao tuong tac' },
  { label: 'Postcard', href: '/museum/postcard', description: 'Phat video MP4 postcard' },
  { label: 'Timeline', href: '/timeline', description: 'Dong thoi gian truc quan' },
  { label: 'Tu lieu', href: '/media', description: 'Anh va video lich su' },
  { label: 'Gioi thieu', href: '/about', description: 'Nguon tu lieu va dinh huong du an' }
];
