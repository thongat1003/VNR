import type { TimelineEvent } from '@/types';
import { archiveImages } from '@/data/documentArchive';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'birth-1907',
    year: '1907',
    title: 'Sinh tại Quảng Trị',
    summary:
      'Lê Duẩn sinh ngày 7-4-1907 tại xã Triệu Thành, huyện Triệu Phong, tỉnh Quảng Trị. Không gian mở đầu cần dùng ảnh quê hương, gia đình và khu lưu niệm để giới thiệu nền tảng văn hóa, truyền thống yêu nước nơi ông trưởng thành.',
    detail:
      'Phòng đầu tiên nên dùng bộ ảnh toàn cảnh Quảng Trị, ảnh khu lưu niệm, bản đồ hành chính và một trục kể chuyện ngắn về gia đình, tuổi thơ, môi trường xã hội đầu thế kỷ XX ở miền Trung. Đây là nền cho toàn bộ hành trình trưng bày.',
    room: 'Quê hương & Tuổi trẻ',
    image: archiveImages.homeland,
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
    id: 'join-1928',
    year: '1928',
    title: 'Bước vào con đường cách mạng',
    summary:
      'Cuối thập niên 1920, ông tham gia phong trào yêu nước và hoạt động cách mạng, mở đầu chặng đường chính trị dài lâu gắn với phong trào cách mạng ở Trung Kỳ và sau này trên cả nước.',
    detail:
      'Nội dung nên thể hiện bằng ảnh chân dung giai đoạn sớm, tài liệu tổ chức, bản đồ các địa điểm hoạt động và thuyết minh ngắn về quá trình từ thanh niên yêu nước đến cán bộ lãnh đạo cách mạng.',
    room: 'Quê hương & Tuổi trẻ',
    image: archiveImages.youth,
    imagePosition: '50% 14%',
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Triển lãm về Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/58617/trien-lam-le-duan-nha-lanh-djao-kiet-xuat-nguoi-hoc-tro-loi-lac-cua-chu-tich-ho-chi-minh.html'
      }
    ]
  },
  {
    id: 'prison-1931',
    year: '1931',
    title: 'Bị bắt và giam cầm',
    summary:
      'Năm 1931 ông bị thực dân Pháp bắt, trải qua nhiều nhà tù như Hỏa Lò, Sơn La, Côn Đảo. Đây là giai đoạn thể hiện rõ ý chí và bản lĩnh của người chiến sĩ cách mạng.',
    detail:
      'Không gian nên dùng ảnh di tích nhà tù, hồ sơ lưu trữ, facsimile quyết định giam giữ và trích dẫn về đời sống đấu tranh trong lao tù. Phần này phù hợp với tông màu nén, ánh sáng hẹp và audio ambience.',
    room: 'Hoạt động Cách mạng (1930-1945)',
    image: archiveImages.prison,
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Lê Duẩn qua tư liệu, hiện vật',
        href: 'https://baotanglichsu.vn/vi/Articles/3097/20935/tong-bi-thu-le-duan-qua-tu-lieu-hien-vat-bao-quan-tai-bao-tang-lich-su-quoc-gia.html'
      }
    ]
  },
  {
    id: 'south-1946',
    year: '1946-1954',
    title: 'Gắn bó với chiến trường Nam Bộ',
    summary:
      'Trong cuộc kháng chiến chống Pháp, Lê Duẩn đảm nhiệm nhiều trọng trách ở Nam Bộ, trực tiếp gắn với thực tiễn chiến trường và công tác lãnh đạo ở miền Nam.',
    detail:
      'Nên dùng ảnh Hội nghị cán bộ Khu ủy khu 9 lần thứ 3, ngày 24-1-1949. Trong ảnh (trái qua phải) là các đồng chí : Lê Duẩn (Bí thư Xứ ủy Nam Bộ); người quàng khăn là đồng chí Lê Đức Thọ (phó Bí thư Xứ ủy Nam Bộ). Kết hợp cùng bản đồ Nam Bộ kháng chiến, điện chỉ đạo và sơ đồ tổ chức để cho thấy kinh nghiệm thực tiễn tích lũy từ giai đoạn chống Pháp đã ảnh hưởng đến tư duy chiến lược về sau.',
    room: 'Kháng chiến chống Pháp (1945-1954)',
    image: archiveImages.southernResistance,
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: 115 năm ngày sinh Tổng Bí thư Lê Duẩn',
        href: 'https://www.qdnd.vn/chinh-tri/tin-tuc/tong-bi-thu-le-duan-mot-tri-tue-lon-cua-cach-mang-viet-nam-691283'
      }
    ]
  },
  {
    id: 'south-thesis-1956',
    year: '1956',
    title: 'Đề cương Cách mạng miền Nam',
    summary:
      'Đây là điểm nhấn tư tưởng quan trọng của bảo tàng, gắn với quá trình hình thành đường lối cách mạng miền Nam trong bối cảnh sau Hiệp định Giơ-ne-vơ.',
    detail:
      'Bố cục nên trưng bày facsimile bản thảo, chú giải bối cảnh lịch sử 1954-1956, các lớp diễn giải liên quan đến Nghị quyết 15 và bước chuyển từ giữ gìn lực lượng sang thế tiến công.',
    room: '“Kiến trúc sư” Thống nhất',
    image: archiveImages.southernThesis,
    verified: true,
    sourceLinks: [
      {
        label: 'Nhân Dân: Nghị quyết 15 mở đường',
        href: 'https://nhandan.vn/nghi-quyet-15-mo-duong-cho-cach-mang-mien-nam-post567818.html'
      }
    ]
  },
  {
    id: 'first-secretary-1960',
    year: '1960',
    title: 'Giữ cương vị Bí thư thứ nhất',
    summary:
      'Từ năm 1960, ông giữ cương vị lãnh đạo cao nhất của Đảng trong giai đoạn chiến tranh chống Mỹ cứu nước ngày càng quyết liệt, gắn với nhiều quyết sách chiến lược lớn.',
    detail:
      'Đây là điểm nối giữa tiểu sử cá nhân và lịch sử dân tộc. Nên dùng ảnh làm việc, bàn làm việc mô phỏng, điện chỉ đạo và màn hình tương tác dẫn sang hồ sơ các chiến dịch lớn.',
    room: '“Kiến trúc sư” Thống nhất',
    image: archiveImages.firstSecretary,
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Một trí tuệ lớn của cách mạng Việt Nam',
        href: 'https://www.qdnd.vn/chinh-tri/tin-tuc/tong-bi-thu-le-duan-mot-tri-tue-lon-cua-cach-mang-viet-nam-691283'
      }
    ]
  },
  {
    id: 'tet-1968',
    year: '1968',
    title: 'Tổng tiến công và nổi dậy Tết Mậu Thân',
    summary:
      'Xuân 1968 là bước ngoặt lớn về chiến lược, chính trị và ngoại giao. Bảo tàng cần dành riêng một cụm nội dung cho bản đồ đô thị, ảnh tác chiến và tác động lịch sử của Mậu Thân.',
    detail:
      'Nên trình bày theo cấu trúc ba lớp: diễn biến tại các đô thị trọng điểm, tác động chiến lược đối với Mỹ và chính quyền Sài Gòn, cùng ý nghĩa lâu dài đối với tiến trình đi tới thắng lợi cuối cùng năm 1975.',
    room: '“Kiến trúc sư” Thống nhất',
    image: archiveImages.northernLeadership,
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Tầm vóc và ý nghĩa lịch sử Tết Mậu Thân 1968',
        href: 'https://media.qdnd.vn/long-form/cuoc-tong-tien-cong-va-noi-day-tet-mau-than-1968-tam-voc-va-y-nghia-lich-su-56412'
      }
    ]
  },
  {
    id: 'spring-1975',
    year: '1975',
    title: 'Đại thắng mùa Xuân 1975',
    summary:
      'Từ Tây Nguyên đến Huế - Đà Nẵng rồi Chiến dịch Hồ Chí Minh, mùa Xuân 1975 là cao trào lớn nhất của toàn bộ tuyến kể chuyện trong bảo tàng số.',
    detail:
      'Nội dung nên dùng bản đồ động liên hoàn, ảnh tư liệu các mũi tiến công, sa bàn số hóa và một clip tổng hợp 90-120 giây để người xem nắm được logic phát triển từ thắng lợi chiến dịch đến sụp đổ hoàn toàn của đối phương.',
    room: '“Kiến trúc sư” Thống nhất',
    image: archiveImages.springVictory,
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Chiến dịch Tây Nguyên',
        href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-tay-nguyen-mo-man-dai-thang-mua-xuan-1975-819811'
      },
      {
        label: 'QĐND: Chiến dịch Hồ Chí Minh',
        href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-ho-chi-minh-lich-su-to-chuc-su-dung-luc-luong-rat-sang-tao-de-gianh-thang-loi-tron-ven-817547'
      }
    ]
  },
  {
    id: 'reunification-1976',
    year: '1976',
    title: 'Đất nước thống nhất bước sang giai đoạn mới',
    summary:
      'Sau thắng lợi 1975, đất nước bước vào thời kỳ thống nhất, xây dựng và khôi phục sau chiến tranh. Nội dung về Lê Duẩn cần nối từ chiến thắng quân sự sang bài toán chính trị, kinh tế, xã hội sau hòa bình.',
    detail:
      'Không gian này phù hợp với ảnh hội nghị, ảnh làm việc sau thống nhất, sơ đồ tái thiết đất nước và các văn kiện về điều hành kinh tế - xã hội. Đây cũng là nơi chuyển từ chiến tranh sang di sản tư tưởng, lãnh đạo.',
    room: 'Di sản & Đổi mới',
    image: archiveImages.congress1976,
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Triển lãm về Lê Duẩn',
        href: 'https://baotanglichsu.vn/vi/Articles/3098/58617/trien-lam-le-duan-nha-lanh-djao-kiet-xuat-nguoi-hoc-tro-loi-lac-cua-chu-tich-ho-chi-minh.html'
      }
    ]
  },
  {
    id: 'legacy-1986',
    year: '1986',
    title: 'Khép lại một chặng đường lịch sử',
    summary:
      'Năm 1986 đánh dấu sự kết thúc cuộc đời hoạt động cách mạng của Lê Duẩn. Phần cuối bảo tàng nên nhìn ông trong tổng thể di sản chính trị, vai trò lịch sử và ký ức công chúng.',
    detail:
      'Nên dùng ảnh chân dung cuối đời, sách nghiên cứu, hình ảnh tưởng niệm và một video tổng kết để kết thúc hành trình bằng giọng điệu lắng hơn, thiên về đánh giá lịch sử và di sản lâu dài.',
    room: 'Di sản & Đổi mới',
    image: archiveImages.treaty1978,
    verified: true,
    sourceLinks: [
      {
        label: 'BTLSQG: Lê Duẩn qua tư liệu, hiện vật',
        href: 'https://baotanglichsu.vn/vi/Articles/3097/20935/tong-bi-thu-le-duan-qua-tu-lieu-hien-vat-bao-quan-tai-bao-tang-lich-su-quoc-gia.html'
      }
    ]
  }
];

const firstSecretary1960Event = timelineEvents.find((event) => event.id === 'first-secretary-1960');

if (firstSecretary1960Event) {
  firstSecretary1960Event.summary =
    'Tại Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III, được tổ chức tại Hà Nội từ 5 - 10/9/1960, đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng.';
  firstSecretary1960Event.detail =
    'Tại Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III, được tổ chức tại Hà Nội từ 5 - 10/9/1960, đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng.';
  firstSecretary1960Event.image = archiveImages.firstSecretary;
}
