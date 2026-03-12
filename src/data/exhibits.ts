import type { Exhibit } from '@/types';

export const exhibits: Exhibit[] = [
  {
    id: 'homeland-map',
    name: 'Bản đồ Quảng Trị',
    room: 'Quê hương & Tuổi trẻ',
    title: 'Quê hương Quảng Trị',
    summary:
      'Bản đồ và cụm chú giải về quê hương, gia đình, khu lưu niệm và không gian xã hội đầu thế kỷ XX nơi Lê Duẩn lớn lên.',
    detail:
      'Hiện vật này nên gắn với ảnh toàn cảnh Quảng Trị, khu lưu niệm, sơ đồ làng quê và tuyến kể chuyện về ngày sinh 7-4-1907 tại Triệu Thành, Triệu Phong. Trong bảo tàng 3D, đây là điểm mở để người xem hiểu xuất phát điểm văn hóa và truyền thống yêu nước của nhân vật trung tâm.',
    image: '/assets/exhibits/quang-tri-map.svg',
    position: [-10, 1.4, 0],
    color: '#d6b26f',
    size: [1.8, 1.1, 0.08],
    type: 'map',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: 110 năm ngày sinh Tổng Bí thư Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/72238/110-nam-ngay-sinh-tong-bi-thu-le-duan-7-4-1907-7-4-2017.html'
      }
    ]
  },
  {
    id: 'youth-doc',
    name: 'Tài liệu thanh niên cách mạng',
    room: 'Quê hương & Tuổi trẻ',
    title: 'Khởi đầu con đường cách mạng',
    summary:
      'Tài liệu mô phỏng quá trình tham gia phong trào yêu nước và bước vào hoạt động cách mạng từ cuối thập niên 1920.',
    detail:
      'Popup cần hiển thị ảnh chân dung giai đoạn sớm, tài liệu tổ chức, và thuyết minh ngắn về chặng đường từ người thanh niên yêu nước ở miền Trung trở thành cán bộ lãnh đạo cách mạng. Có thể bổ sung hotspot dẫn sang timeline mốc 1928 và bộ ảnh tư liệu đầu đời.',
    image: '/assets/exhibits/youth-document.svg',
    position: [-6.5, 1.1, -1],
    color: '#b53f3f',
    size: [1.6, 0.1, 1],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Triển lãm về Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/58617/trien-lam-le-duan-nha-lanh-djao-kiet-xuat-nguoi-hoc-tro-loi-lac-cua-chu-tich-ho-chi-minh.html'
      }
    ]
  },
  {
    id: 'prison-files',
    name: 'Hồ sơ nhà tù',
    room: 'Hoạt động Cách mạng (1930-1945)',
    title: 'Những năm tháng bị giam cầm',
    summary:
      'Không gian hồ sơ, ảnh và kỷ vật gợi nhắc các nhà tù Hỏa Lò, Sơn La, Côn Đảo và ý chí của người chiến sĩ cách mạng.',
    detail:
      'Phần mô tả nên tập trung vào việc Lê Duẩn bị thực dân Pháp bắt năm 1931, trải qua nhiều nhà tù và tiếp tục rèn luyện ý chí, bản lĩnh trong lao tù. Với bảo tàng 3D, nhóm tư liệu này cần đi kèm âm thanh nền tiết chế và lớp ánh sáng tối để tăng chiều sâu cảm xúc.',
    image: '/assets/exhibits/prison-file.svg',
    position: [-2, 1.2, 0],
    color: '#8c5b40',
    size: [1.5, 0.1, 1],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Lê Duẩn qua tư liệu, hiện vật',
        href: 'https://baotanglichsu.vn/vi/Articles/3097/20935/tong-bi-thu-le-duan-qua-tu-lieu-hien-vat-bao-quan-tai-bao-tang-lich-su-quoc-gia.html'
      }
    ]
  },
  {
    id: 'resistance-radio',
    name: 'Đài radio kháng chiến',
    room: 'Kháng chiến chống Pháp (1945-1954)',
    title: 'Nam Bộ kháng chiến và kinh nghiệm thực tiễn',
    summary:
      'Hiện vật tượng trưng cho luồng thông tin, chỉ đạo và nhịp vận hành của chiến trường Nam Bộ trong thời kỳ kháng chiến chống Pháp.',
    detail:
      'Dù chỉ là hiện vật mô phỏng, điểm trưng bày này nên mở ra phần kể chuyện về vai trò của Lê Duẩn ở Nam Bộ giai đoạn 1946-1954, nơi ông tích lũy nhiều kinh nghiệm thực tiễn về chiến trường, tổ chức và chỉ đạo. Có thể gắn thêm bản đồ Nam Bộ kháng chiến và ảnh chiến khu để làm rõ bối cảnh.',
    image: '/assets/exhibits/radio.svg',
    position: [2.8, 0.75, -0.4],
    color: '#a47551',
    size: [1.2, 0.8, 0.8],
    type: 'radio',
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Một trí tuệ lớn của cách mạng Việt Nam',
        href: 'https://www.qdnd.vn/chinh-tri/tin-tuc/tong-bi-thu-le-duan-mot-tri-tue-lon-cua-cach-mang-viet-nam-691283'
      }
    ]
  },
  {
    id: 'southern-thesis',
    name: 'Đề cương Cách mạng miền Nam',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Đề cương Cách mạng miền Nam',
    summary:
      'Điểm nhấn chiến lược gắn với tư duy về cách mạng miền Nam trong bối cảnh sau Hiệp định Giơ-ne-vơ.',
    detail:
      'Popup nên cho thấy rõ đây không chỉ là một tài liệu chính trị đơn lẻ, mà là mắt xích quan trọng trong quá trình hình thành đường lối cách mạng miền Nam, sau này gắn với Nghị quyết 15 và bước ngoặt Đồng khởi. Phù hợp để thêm facsimile, dòng trích dẫn và sơ đồ bối cảnh 1954-1956.',
    image: '/assets/exhibits/south-thesis.svg',
    position: [8, 1.35, 0],
    color: '#c0392b',
    size: [1.8, 1.1, 0.08],
    type: 'book',
    verified: true,
    sourceLinks: [
      {
        label: 'Nhân Dân: Nghị quyết 15 mở đường',
        href: 'https://nhandan.vn/nghi-quyet-15-mo-duong-cho-cach-mang-mien-nam-post567818.html'
      }
    ]
  },
  {
    id: 'working-desk',
    name: 'Bàn làm việc mô phỏng',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Trung tâm chỉ đạo chiến lược',
    summary:
      'Tổ hợp hiện vật 3D dành cho ảnh làm việc, bản đồ chiến dịch, điện chỉ đạo và các lớp kể chuyện về vai trò lãnh đạo chiến lược.',
    detail:
      'Bàn làm việc mô phỏng nên là “hub” của toàn bộ phòng 1954-1975. Từ đây người xem có thể mở ra hồ sơ về Mậu Thân 1968, mùa Xuân 1975, các bản đồ chiến dịch và ảnh làm việc của Lê Duẩn với Bộ Chính trị. Đây là nơi phù hợp nhất để gắn các video giải thích đường lối, quyết sách và thời cơ chiến lược.',
    image: '/assets/exhibits/desk.svg',
    position: [11.8, 0.8, -0.5],
    color: '#6d4c41',
    size: [2.2, 0.8, 1.4],
    type: 'desk',
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Một trí tuệ lớn của cách mạng Việt Nam',
        href: 'https://www.qdnd.vn/chinh-tri/tin-tuc/tong-bi-thu-le-duan-mot-tri-tue-lon-cua-cach-mang-viet-nam-691283'
      }
    ]
  },
  {
    id: 'victory-map',
    name: 'Bản đồ mùa Xuân 1975',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Bản đồ thống nhất đất nước',
    summary:
      'Bản đồ chiến dịch liên kết ba mũi Tây Nguyên, Huế - Đà Nẵng và Chiến dịch Hồ Chí Minh, phù hợp cho hotspot theo địa điểm và theo ngày.',
    detail:
      'Trong bảo tàng 3D, đây nên là hiện vật tương tác quan trọng nhất của phòng chiến dịch. Người xem có thể chạm vào từng hướng để xem ngày mở màn, diễn biến chính, ảnh tư liệu và clip ngắn. Phần mô tả cần nhấn vào logic phát triển thần tốc từ Tây Nguyên (4-3 đến 3-4-1975), Huế - Đà Nẵng (5-3 đến 29-3-1975) đến Chiến dịch Hồ Chí Minh (26-4 đến 30-4-1975).',
    image: '/assets/exhibits/unification-map.svg',
    position: [15.5, 1.35, 0],
    color: '#d4a017',
    size: [1.8, 1.1, 0.08],
    type: 'map',
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
    id: 'medal-legacy',
    name: 'Huy chương & di sản',
    room: 'Di sản & Đổi mới',
    title: 'Di sản sau thống nhất',
    summary:
      'Không gian kết thúc với huân chương, chân dung, sách và tư liệu về giai đoạn 1976-1986 cùng cách hậu thế nhìn lại vai trò lịch sử của Lê Duẩn.',
    detail:
      'Hiện vật cuối nên không chỉ dừng ở yếu tố tưởng niệm mà còn mở sang các tài liệu nghiên cứu, ảnh hội nghị, ảnh làm việc sau thống nhất và video tổng kết di sản. Đây là điểm kết giúp người xem chuyển từ cảm xúc chiến thắng sang suy ngẫm lịch sử và đánh giá lâu dài.',
    image: '/assets/exhibits/legacy-medal.svg?v=20260312',
    position: [21, 1.1, 0.2],
    color: '#d6b26f',
    size: [1.1, 1.1, 0.1],
    type: 'medal',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Triển lãm về Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/58617/trien-lam-le-duan-nha-lanh-djao-kiet-xuat-nguoi-hoc-tro-loi-lac-cua-chu-tich-ho-chi-minh.html'
      }
    ]
  }
];
