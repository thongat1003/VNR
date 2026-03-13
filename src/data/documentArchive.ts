import type { DocumentArchiveItem } from '@/types';

export const archiveImages = {
  homeland: '/assets/archive/que-huong-quang-tri-1907.png',
  youth: '/assets/archive/le-duan-tre-1928.jpg',
  prison: '/assets/archive/ban-tu-con-dao-1931-1936.jpg',
  southernResistance: '/assets/archive/hoi-nghi-khu-uy-khu-9-1949-moi.jpg',
  southernThesis: '/assets/archive/de-cuong-cach-mang-mien-nam-1956.png',
  firstSecretary: '/assets/archive/dai-hoi-iii-1960-khoi-canh.jpg',
  congressSession1960: '/assets/archive/dai-hoi-iii-ho-chi-minh-phat-bieu-1960.jpg',
  congressSpeech: '/assets/archive/dai-hoi-iii-doc-bao-cao-1960.jpg',
  northernLeadership: '/assets/archive/lanh-dao-mien-bac-1966.jpg',
  hoChiMinhMemorial: '/assets/archive/le-truy-dieu-ho-chi-minh-1969.jpg',
  southernHeroes: '/assets/archive/dung-si-mien-nam-1972.jpg',
  fidelCastroVisit: '/assets/archive/fidel-castro-tham-viet-nam-1973.jpg',
  politburoMeeting1975: '/assets/archive/bo-chinh-tri-xuan-1975.jpg',
  springVictory: '/assets/archive/bo-chinh-tri-xuan-1975.jpg',
  eastGermanyVisit: '/assets/archive/tham-cong-hoa-dan-chu-duc-1975.jpg',
  polandVisit: '/assets/archive/tham-ba-lan-1975.jpg',
  congress1976: '/assets/archive/dai-hoi-iv-1976.jpg',
  treaty1978: '/assets/archive/hiep-uoc-viet-xo-1978.jpg',
  youthArmy1980: '/assets/archive/thanh-nien-quan-doi-1980.jpg',
  sovietVisit1980: '/assets/archive/tham-lien-xo-1980.jpg',
  congress1982: '/assets/archive/dai-hoi-v-1982-a.jpg',
  passing1986Funeral: '/assets/archive/tu-lieu-cuoi-ho-so-03.jpg',
  passing1986News: '/assets/archive/tu-lieu-cuoi-ho-so-01.jpg',
  passing1986Presidium: '/assets/archive/tu-lieu-cuoi-ho-so-02.jpg'
} as const;

export const documentHighlights: DocumentArchiveItem[] = [
  {
    id: 'origin-1907',
    period: '1907',
    room: 'Quê hương & Tuổi trẻ',
    title: 'Cội nguồn Quảng Trị',
    summary:
      'Hồ sơ gốc mở đầu bằng phần quê hương, quê quán và bối cảnh đầu thế kỷ XX để lý giải vì sao truyền thống yêu nước ở Quảng Trị sớm hình thành lý tưởng cách mạng của Lê Duẩn.',
    caption: 'Ảnh mở đầu về quê hương Quảng Trị được đặt ngay sau phần “Năm 1907: Cội nguồn và Quê hương”.',
    image: archiveImages.homeland
  },
  {
    id: 'turning-point-1928',
    period: '1928',
    room: 'Quê hương & Tuổi trẻ',
    title: 'Bước ngoặt tuổi trẻ',
    summary:
      'Nội dung trong file Word nhấn vào môi trường công nhân đường sắt, quá trình tiếp xúc với “Đường Kách mệnh” và việc tham gia Hội Việt Nam Cách mạng Thanh niên trước khi trở thành đảng viên đầu tiên của Đảng.',
    caption: 'Cố Tổng Bí thư Lê Duẩn lúc trẻ trong trang phục khăn xếp áo dài chụp tại quê nhà Quảng Trị, năm 1928.',
    image: archiveImages.youth,
    imagePosition: '50% 14%'
  },
  {
    id: 'prison-years-1931',
    period: '1931',
    room: 'Hoạt động Cách mạng (1930-1945)',
    title: 'Thử thách trong lao tù',
    summary:
      'Tài liệu mô tả rõ việc bị bắt, bản án 20 năm tù khổ sai, các nhà tù Hỏa Lò, Sơn La, Côn Đảo và cách những năm tháng giam cầm rèn luyện bản lĩnh chính trị cho Lê Duẩn.',
    caption:
      'Đồng chí Lê Duẩn gặp ông Bùi Sính, người đánh trống trong cuộc đấu tranh của nông dân Tiền Hải và là bạn tù Côn Đảo giai đoạn 1931-1936.',
    image: archiveImages.prison
  },
  {
    id: 'south-resistance-1949',
    period: '1946-1954',
    room: 'Kháng chiến chống Pháp (1945-1954)',
    title: 'Lãnh đạo kháng chiến ở Nam Bộ',
    summary:
      'Phần tư liệu về Nam Bộ cho thấy vai trò của Lê Duẩn với tư cách Bí thư Xứ ủy Nam Bộ, Bí thư Trung ương Cục miền Nam và người trực tiếp lãnh đạo xây dựng lực lượng, căn cứ và chiến tranh du kích.',
    caption:
      'Hội nghị cán bộ Khu ủy khu 9 lần thứ 3, ngày 24-1-1949. Trong ảnh (trái qua phải) là các đồng chí : Lê Duẩn (Bí thư Xứ ủy Nam Bộ); người quàng khăn là đồng chí Lê Đức Thọ (phó Bí thư Xứ ủy Nam Bộ).',
    image: archiveImages.southernResistance
  },
  {
    id: 'south-thesis-1956',
    period: '1956',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Đề cương Cách mạng miền Nam',
    summary:
      'Trong hồ sơ, bản đề cương được đặt như một nút chuyển lớn về tư duy chiến lược: phân tích tình hình miền Nam, xác định con đường đấu tranh cách mạng và tạo nền cho Nghị quyết 15 năm 1959.',
    caption: 'Ảnh facsimile tài liệu “Đề cương cách mạng miền Nam” trong hồ sơ Word.',
    image: archiveImages.southernThesis
  },
  {
    id: 'leadership-1960',
    period: '1960',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Trở thành Bí thư thứ nhất',
    summary:
      'Cụm nội dung 1960 trong tài liệu nhấn mạnh việc Lê Duẩn được bầu làm Bí thư thứ nhất tại Đại hội III của Đảng và vai trò hoạch định chiến lược cho cả miền Bắc lẫn miền Nam.',
    caption:
      'Đồng chí Lê Duẩn ngồi bên phải Chủ tịch Hồ Chí Minh tại Đại hội đại biểu Đảng Lao động Việt Nam lần thứ III, tháng 9-1960.',
    image: archiveImages.firstSecretary
  },
  {
    id: 'victory-1975',
    period: '1975',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Mùa xuân toàn thắng',
    summary:
      'File Word dùng mốc 1975 để nhấn vào quyết định của Bộ Chính trị, khẩu hiệu “Thần tốc, táo bạo” và vai trò chỉ đạo chiến lược dẫn tới Chiến dịch Hồ Chí Minh toàn thắng.',
    caption:
      'Đồng chí Lê Duẩn chủ trì cuộc họp mở rộng, đợt 2 của Bộ Chính trị, quyết định mở cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975.',
    image: archiveImages.springVictory
  },
  {
    id: 'legacy-1978',
    period: '1976-1982',
    room: 'Di sản & Đổi mới',
    title: 'Giai đoạn hậu chiến và đối ngoại',
    summary:
      'Phần sau thống nhất trong hồ sơ được dựng bằng chuỗi ảnh Đại hội IV, các chuyến thăm quốc tế, hiệp ước hợp tác và những tư liệu về điều hành đất nước trong bối cảnh đầy khó khăn.',
    caption:
      'Tổng Bí thư Lê Duẩn và Tổng Bí thư Đảng Cộng sản Liên Xô Leonid Ilyich Brezhnev ký Hiệp ước Hữu nghị và Hợp tác Việt Nam - Liên Xô năm 1978.',
    image: archiveImages.treaty1978
  }
];

const leadership1960Highlight = documentHighlights.find((item) => item.id === 'leadership-1960');

if (leadership1960Highlight) {
  leadership1960Highlight.summary =
    'Tại Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III, được tổ chức tại Hà Nội từ 5 - 10/9/1960, đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng.';
  leadership1960Highlight.caption =
    'Toàn cảnh Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III tại Hà Nội, tháng 9-1960, nơi đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng.';
  leadership1960Highlight.image = archiveImages.firstSecretary;
}
