import type { MediaAsset } from '@/types';

export const mediaAssets: MediaAsset[] = [
  {
    id: 'portrait-gallery',
    title: 'Bộ chân dung Lê Duẩn theo từng giai đoạn',
    category: 'image',
    priority: 'core',
    section: 'Nhân vật trung tâm',
    source: 'BTLSQG / Báo Nhân Dân / TTXVN',
    note:
      'Dùng cho hero banner, gallery chân dung, popup tiểu sử và các khung chuyển cảnh giữa các phòng.',
    usage:
      'Chọn 1 ảnh hero ngang, 1 ảnh bán thân trang trọng và 6-8 ảnh tư liệu theo giai đoạn 1930, 1954, 1960, 1968, 1975, 1976-1986.',
    historicalContext:
      'Đây là trục thị giác quan trọng nhất của toàn bộ bảo tàng vì giúp người xem nhìn rõ tiến trình từ nhà hoạt động cách mạng đến nhà lãnh đạo cao nhất của Đảng.',
    thumbnail: '/assets/media/portrait.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Lê Duẩn qua tư liệu, hiện vật',
        href: 'https://baotanglichsu.vn/vi/Articles/3097/20935/tong-bi-thu-le-duan-qua-tu-lieu-hien-vat-bao-quan-tai-bao-tang-lich-su-quoc-gia.html'
      },
      {
        label: 'BTLSQG: Triển lãm Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/58617/trien-lam-le-duan-nha-lanh-djao-kiet-xuat-nguoi-hoc-tro-loi-lac-cua-chu-tich-ho-chi-minh.html'
      }
    ]
  },
  {
    id: 'quang-tri-memorial',
    title: 'Ảnh quê hương và khu lưu niệm tại Quảng Trị',
    category: 'image',
    priority: 'core',
    section: 'Quê hương & Tuổi trẻ',
    source: 'BTLSQG / Báo Nhân Dân',
    note:
      'Phục vụ phòng mở đầu, bản đồ quê hương, panel tiểu sử và phần giới thiệu về môi trường hình thành nhân cách.',
    usage:
      'Cần 1 ảnh toàn cảnh khu lưu niệm, 2-3 ảnh nhà lưu niệm hoặc không gian thờ tự, 1 bản đồ Quảng Trị đầu thế kỷ XX.',
    historicalContext:
      'Nhóm ảnh này giúp đặt Lê Duẩn vào không gian xã hội - văn hóa cụ thể của Quảng Trị, thay vì chỉ mở đầu bằng chân dung rời rạc.',
    thumbnail: '/assets/media/quang-tri-home.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: 110 năm ngày sinh Tổng Bí thư Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/72238/110-nam-ngay-sinh-tong-bi-thu-le-duan-7-4-1907-7-4-2017.html'
      },
      {
        label: 'Nhân Dân English: 110th birthday of Le Duan',
        href: 'https://en.nhandan.vn/the-110th-birthday-anniversary-of-party-general-secretary-le-duan-celebrated-post30257.html'
      }
    ]
  },
  {
    id: 'prison-archive',
    title: 'Tư liệu nhà tù Hỏa Lò, Sơn La, Côn Đảo',
    category: 'image',
    priority: 'core',
    section: 'Hoạt động Cách mạng (1930-1945)',
    source: 'BTLSQG / Di tích nhà tù / Báo chính thống',
    note:
      'Dùng cho khu “những năm tháng giam cầm”, phù hợp với ảnh hồ sơ, buồng giam, hiện vật tù chính trị và trích dẫn hồi ức.',
    usage:
      'Cần 1 ảnh hồ sơ, 2 ảnh di tích, 1 ảnh hiện vật tù chính trị và 1 ảnh đồ họa minh họa tuyến giam giữ.',
    historicalContext:
      'Đây là nhóm tư liệu cho thấy sức bền chính trị và tinh thần của thế hệ cách mạng tiền bối, đồng thời tạo chiều sâu cảm xúc trong hành trình bảo tàng.',
    thumbnail: '/assets/media/prison-years.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Lê Duẩn qua tư liệu, hiện vật',
        href: 'https://baotanglichsu.vn/vi/Articles/3097/20935/tong-bi-thu-le-duan-qua-tu-lieu-hien-vat-bao-quan-tai-bao-tang-lich-su-quoc-gia.html'
      }
    ]
  },
  {
    id: 'south-thesis-facsimile',
    title: 'Facsimile Đề cương Cách mạng miền Nam',
    category: 'image',
    priority: 'core',
    section: '“Kiến trúc sư” Thống nhất',
    source: 'Báo Nhân Dân / Văn kiện Đảng',
    note:
      'Đây là cụm tư liệu nền cho phòng 1954-1960, dùng cho popup tài liệu, bản đồ tư duy và bảng chú giải.',
    usage:
      'Cần ảnh bìa, ảnh trang mở đầu, 2-3 trang trích dẫn có đánh dấu và một sơ đồ tóm tắt bối cảnh 1954-1956.',
    historicalContext:
      'Nhóm tư liệu này giúp bảo tàng đi từ tiểu sử cá nhân sang chiều sâu đường lối chính trị, lý giải vì sao Lê Duẩn thường được gắn với tư duy chiến lược về miền Nam.',
    thumbnail: '/assets/media/southern-revolution.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'Nhân Dân: Nghị quyết 15 mở đường',
        href: 'https://nhandan.vn/nghi-quyet-15-mo-duong-cho-cach-mang-mien-nam-post567818.html'
      }
    ]
  },
  {
    id: 'dong-khoi-photo-roll',
    title: 'Bộ ảnh phong trào Đồng khởi',
    category: 'image',
    priority: 'core',
    section: 'Chiến dịch & bước ngoặt lịch sử',
    source: 'Báo Nhân Dân / Bến Tre / Tư liệu địa phương',
    note:
      'Phục vụ cho panel về bước chuyển chiến lược của cách mạng miền Nam từ cuối thập niên 1950 sang đầu thập niên 1960.',
    usage:
      'Nên có 1 bản đồ Bến Tre, 2 ảnh phong trào quần chúng, 1 ảnh lực lượng tại chỗ, 1 ảnh tư liệu lãnh đạo liên quan.',
    historicalContext:
      'Đồng khởi không chỉ là một mốc sự kiện mà là bước ngoặt cần được kể như nút mở của chặng đường đi tới Mậu Thân và mùa Xuân 1975.',
    thumbnail: '/assets/media/youth-revolution.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'Nhân Dân: Phong trào Đồng khởi ở Bến Tre',
        href: 'https://nhandan.vn/phong-trao-dong-khoi-o-ben-tre-post725552.html'
      }
    ]
  },
  {
    id: 'tet-mau-than-mapset',
    title: 'Ảnh và bản đồ Tết Mậu Thân 1968',
    category: 'image',
    priority: 'core',
    section: 'Chiến dịch & bước ngoặt lịch sử',
    source: 'QĐND / TTXVN / Bảo tàng lịch sử quân sự',
    note:
      'Dùng cho phòng cao trào chiến tranh chống Mỹ với trọng tâm là đô thị, tác động chính trị và bước ngoặt chiến lược.',
    usage:
      'Cần 1 bản đồ tổng, 3-4 ảnh đô thị trọng điểm, 1 infographic về quy mô tiến công và 1 ảnh tư liệu lãnh đạo.',
    historicalContext:
      'Bộ ảnh này giúp người xem hiểu Mậu Thân 1968 trong mạch diễn biến chiến tranh, không tách rời vai trò chỉ đạo chiến lược của Trung ương.',
    thumbnail: '/assets/media/video-documentary.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Tầm vóc và ý nghĩa lịch sử Tết Mậu Thân 1968',
        href: 'https://media.qdnd.vn/long-form/cuoc-tong-tien-cong-va-noi-day-tet-mau-than-1968-tam-voc-va-y-nghia-lich-su-56412'
      }
    ]
  },
  {
    id: 'spring-1975-gallery',
    title: 'Bản đồ chiến dịch và ảnh mùa Xuân 1975',
    category: 'image',
    priority: 'core',
    section: 'Thống nhất đất nước',
    source: 'QĐND / BTLSQG / Bảo tàng Lịch sử Quân sự Việt Nam',
    note:
      'Đây là cụm ảnh phải đầu tư mạnh nhất sau chân dung nhân vật trung tâm vì là đỉnh cao cảm xúc của toàn bộ bảo tàng.',
    usage:
      'Cần 1 bản đồ liên hoàn ba chiến dịch, 1 bộ ảnh Buôn Ma Thuột, 1 bộ ảnh Huế - Đà Nẵng, 1 bộ ảnh Chiến dịch Hồ Chí Minh và ảnh thống nhất.',
    historicalContext:
      'Chuỗi hình ảnh này cho phép dựng narrative liên tục từ đòn mở màn Tây Nguyên tới khoảnh khắc 30-4-1975, tạo climax thị giác và lịch sử.',
    thumbnail: '/assets/media/unification-1975.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Chiến dịch Tây Nguyên',
        href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-tay-nguyen-mo-man-dai-thang-mua-xuan-1975-819811'
      },
      {
        label: 'QĐND: Chiến dịch Huế - Đà Nẵng',
        href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-hue-da-nang-tao-buoc-ngoat-quyet-dinh-cho-dai-thang-mua-xuan-1975-818182'
      },
      {
        label: 'QĐND: Chiến dịch Hồ Chí Minh',
        href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-ho-chi-minh-lich-su-to-chuc-su-dung-luc-luong-rat-sang-tao-de-gianh-thang-loi-tron-ven-817547'
      }
    ]
  },
  {
    id: 'legacy-document-set',
    title: 'Ảnh làm việc và di sản sau thống nhất',
    category: 'image',
    priority: 'support',
    section: 'Di sản & Đổi mới',
    source: 'BTLSQG / Báo Nhân Dân',
    note:
      'Dùng cho không gian kết thúc, chuyển từ thắng lợi quân sự sang câu chuyện lãnh đạo đất nước thời hậu chiến.',
    usage:
      'Cần ảnh hội nghị, ảnh làm việc, ảnh đi cơ sở và 1 poster hoặc bìa sách nghiên cứu về Lê Duẩn.',
    historicalContext:
      'Nhóm ảnh này giúp phần kết không bị cụt ở mốc 1975 mà kéo dài tới giai đoạn xây dựng đất nước và đánh giá di sản.',
    thumbnail: '/assets/media/post-war-renewal.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Triển lãm Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/58617/trien-lam-le-duan-nha-lanh-djao-kiet-xuat-nguoi-hoc-tro-loi-lac-cua-chu-tich-ho-chi-minh.html'
      }
    ]
  },
  {
    id: 'vnews-profile-video',
    title: 'Video chân dung Lê Duẩn',
    category: 'video',
    priority: 'core',
    section: 'Rạp chiếu tư liệu',
    source: 'VietnamPlus / VNews',
    note:
      'Dùng cho khu mở đầu hoặc popup media dài, giúp người xem có một chân dung khái quát trước khi đi sâu vào từng phòng trưng bày.',
    usage:
      'Nên dựng dưới dạng video mở đầu 30-60 giây và một phiên bản đầy đủ hơn cho trang media hoặc kiosk video.',
    historicalContext:
      'Video chân dung đóng vai trò “narrative anchor”, gom lại các lớp tiểu sử, chiến lược, chiến dịch và di sản trong một trục kể chuyện ngắn.',
    thumbnail: '/assets/media/video-profile.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'VietnamPlus: Tổng Bí thư Lê Duẩn - vị lãnh tụ kiệt xuất',
        href: 'https://www.vietnamplus.vn/tong-bi-thu-le-duan-vi-lanh-tu-kiet-xuat-cua-dang-va-cach-mang-viet-nam-post773699.vnp'
      }
    ]
  },
  {
    id: 'campaign-storyboard-videos',
    title: 'Chuỗi clip ngắn cho Đồng khởi, Mậu Thân, mùa Xuân 1975',
    category: 'video',
    priority: 'core',
    section: 'Kiosk chiến dịch',
    source: 'QĐND / VTV / VNews',
    note:
      'Mỗi chiến dịch nên có một clip riêng 60-120 giây với bản đồ động, ảnh tư liệu và lời dẫn ngắn.',
    usage:
      'Triển khai thành 4 clip: Đồng khởi 1960, Mậu Thân 1968, Tây Nguyên 1975, Chiến dịch Hồ Chí Minh 1975.',
    historicalContext:
      'Các clip này biến trang media và không gian 3D thành một bảo tàng sống hơn, giảm cảm giác chỉ đang xem ảnh tĩnh và chữ mô tả.',
    thumbnail: '/assets/media/video-documentary.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Tết Mậu Thân 1968',
        href: 'https://media.qdnd.vn/long-form/cuoc-tong-tien-cong-va-noi-day-tet-mau-than-1968-tam-voc-va-y-nghia-lich-su-56412'
      },
      {
        label: 'QĐND: Chiến dịch Hồ Chí Minh',
        href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-ho-chi-minh-lich-su-to-chuc-su-dung-luc-luong-rat-sang-tao-de-gianh-thang-loi-tron-ven-817547'
      }
    ]
  },
  {
    id: 'legacy-video-wall',
    title: 'Video di sản và tưởng niệm',
    category: 'video',
    priority: 'support',
    section: 'Di sản',
    source: 'Báo Nhân Dân / VNews / Tư liệu tưởng niệm',
    note:
      'Phù hợp cho phòng cuối, nơi cần nhịp kể chậm hơn để khép lại hành trình bằng đánh giá lịch sử và ký ức công chúng.',
    usage:
      'Có thể dùng 1 clip tưởng niệm ngắn 45 giây và 1 video dài hơn về di sản chính trị, hình ảnh lưu niệm, hội thảo, triển lãm.',
    historicalContext:
      'Video kết thúc giúp nối các lớp tư liệu lịch sử với hiện tại, cho thấy vì sao hình ảnh và di sản của Lê Duẩn vẫn tiếp tục được nhắc lại trong không gian công cộng.',
    thumbnail: '/assets/media/video-legacy.svg',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Triển lãm Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/58617/trien-lam-le-duan-nha-lanh-djao-kiet-xuat-nguoi-hoc-tro-loi-lac-cua-chu-tich-ho-chi-minh.html'
      }
    ]
  }
];
