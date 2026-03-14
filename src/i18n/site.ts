import type { Locale } from '@/i18n/config';

export function getSiteConfig(locale: Locale) {
  if (locale === 'en') {
    return {
      title: 'Le Duan Digital Museum',
      exhibitionSuffix: 'Virtual Exhibition',
      description:
        'A 3D virtual exhibition about the life, leadership, and historical legacy of General Secretary Le Duan.',
      subtitle:
        'A solemn, modern, and immersive digital space that retells a historical journey through images, artifacts, and interactive data.'
    };
  }

  return {
    title: 'Bảo tàng số Lê Duẩn',
    exhibitionSuffix: 'Triển lãm ảo',
    description:
      'Triển lãm ảo 3D về cuộc đời, sự nghiệp và dấu ấn lịch sử của Tổng Bí thư Lê Duẩn.',
    subtitle:
      'Một không gian số trang trọng, hiện đại và trực quan để kể lại hành trình lịch sử qua hình ảnh, hiện vật và dữ liệu tương tác.'
  };
}
