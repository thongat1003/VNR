import type { Exhibit } from '@/types';
import { archiveImages } from '@/data/documentArchive';

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
    image: archiveImages.homeland,
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
      'Năm 1928, Lê Văn Nhuận tham gia Hội Việt Nam Cách mạng Thanh niên – tổ chức do Nguyễn Ái Quốc thành lập. Hoạt động trong tổ chức này, ông tham gia tuyên truyền tư tưởng cách mạng, vận động quần chúng và tổ chức phong trào công nhân. Năm 1930, khi Đảng Cộng sản Đông Dương được thành lập, ông trở thành một trong những đảng viên đầu tiên, chính thức bước vào con đường hoạt động cách mạng chuyên nghiệp.',
    image: archiveImages.youth,
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
      'Năm 1931, Lê Duẩn bị thực dân Pháp bắt tại Hải Phòng và kết án 20 năm tù khổ sai. Dù bị đày ải qua các nhà tù tàn bạo như Hỏa Lò, Sơn La và Côn Đảo, ông cùng các đồng chí vẫn kiên cường biến chốn giam cầm thành “trường học cách mạng” để rèn luyện bản lĩnh chính trị và ý chí đấu tranh',
    image: archiveImages.prison,
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
    name: 'Hội nghị Khu ủy Khu 9',
    room: 'Kháng chiến chống Pháp (1945-1954)',
    title: 'Lãnh đạo kháng chiến ở Nam Bộ',
    summary:
      'Ảnh tư liệu ghi lại Hội nghị cán bộ Khu ủy khu 9 lần thứ 3, ngày 24-1-1949, với đồng chí Lê Duẩn và đồng chí Lê Đức Thọ trong không gian lãnh đạo kháng chiến ở Nam Bộ.',
    detail:
      'Hội nghị cán bộ Khu ủy khu 9 lần thứ 3, ngày 24-1-1949. Trong ảnh (trái qua phải) là các đồng chí : Lê Duẩn (Bí thư Xứ ủy Nam Bộ); người quàng khăn là đồng chí Lê Đức Thọ (phó Bí thư Xứ ủy Nam Bộ). Điểm trưng bày này phù hợp để nối sang bản đồ căn cứ U Minh - Đồng Tháp Mười và lớp thuyết minh về thời kỳ Lê Duẩn là Bí thư Xứ ủy Nam Bộ, Bí thư Trung ương Cục miền Nam.',
    image: archiveImages.southernResistance,
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
      'Năm 1956, trước sự đàn áp khốc liệt của chính quyền Ngô Đình Diệm sau Hiệp định Genève 1954, đồng chí Lê Duẩn đã soạn thảo "Đề cương cách mạng miền Nam. Bản đề cương phân tích sâu sắc tình hình chính trị, xác định con đường đấu tranh và khẳng định vai trò của quần chúng nhân dân. Đây là tài liệu mang tính nền tảng, trở thành cơ sở để Đảng ban hành Nghị quyết 15 (1959), chính thức mở đường cho phong trào đấu tranh vũ trang ở miền Nam',
    image: archiveImages.southernThesis,
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
    id: 'first-secretary-hall',
    name: 'Đại hội III toàn quốc',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Lê Duẩn được bầu làm Bí thư thứ nhất',
    summary:
      'Tại Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III, được tổ chức tại Hà Nội từ 5 - 10/9/1960, đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng.',
    detail:
      'Tại Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III, được tổ chức tại Hà Nội từ 5 - 10/9/1960, đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng.',
    image: archiveImages.firstSecretary,
    position: [4.2, 1.35, 0],
    color: '#8d6b46',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'QĐND: Một trí tuệ lớn của cách mạng Việt Nam',
        href: 'https://www.qdnd.vn/chinh-tri/tin-tuc/tong-bi-thu-le-duan-mot-tri-tue-lon-cua-cach-mang-viet-nam-691283'
      }
    ]
  },
  {
    id: 'congress-session-1960',
    name: 'Đại hội III năm 1960',
    room: 'Kiến trúc sư Thống nhất',
    title: 'Chủ tịch Hồ Chí Minh phát biểu tại Đại Hội III',
    summary:
      'Ảnh tư liệu ghi lại khoảnh khắc Chủ tịch Hồ Chí Minh phát biểu tại Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III năm 1960.',
    detail:
      'Ảnh tư liệu ghi lại khoảnh khắc Chủ tịch Hồ Chí Minh phát biểu tại Đại hội đại biểu Đảng Lao động Việt Nam toàn quốc lần thứ III năm 1960.',
    image: archiveImages.congressSession1960,
    position: [8.5, 1.35, 0],
    color: '#8a7257',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1keooPJK_mGLCaRKSi_y5YGqM7SkBYaSh10fDs87iLkqqpuwamwcrmSli4lGBVgQ/1crv5fXcdngxXUbcDrjxhlfru43Z9LqPWM7Cp1yTtJMVr6qYzKfG-GKoPdp2keA_b?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'northern-leadership-1966',
    name: 'Lãnh đạo miền Bắc năm 1966',
    room: 'Kiến trúc sư Thống nhất',
    title: 'Lê Duẩn cùng các lãnh đạo miền Bắc',
    summary:
      'TBT Lê Duẩn (thứ 2 từ bên phải) cùng các lãnh đạo miền Bắc Việt Nam vào năm 1966. Ông Duẩn được coi là người điều hành cuộc tổng tiến công Mậu Thân, chứ không phải Hồ Chí Minh hay Võ Nguyên Giáp.',
    detail:
      'TBT Lê Duẩn (thứ 2 từ bên phải) cùng các lãnh đạo miền Bắc Việt Nam vào năm 1966. Ông Duẩn được coi là người điều hành cuộc tổng tiến công Mậu Thân, chứ không phải Hồ Chí Minh hay Võ Nguyên Giáp.',
    image: archiveImages.northernLeadership,
    position: [14.2, 1.35, 0],
    color: '#8a7461',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Anh AP 1966',
        href: 'https://keep.google.com/u/0/media/v2/1B-Fo7yAFo2sJEqZ-a9J8DNQAxOAr9eRyCncb0zaHsRHbzxotpbRwiPrB5RY_LOw/1dWU9X7Bs2iIMgIF8wzuLOA3wDNxvq7zWokBUGxoK_NLIlL5odI3nZK3OKDRkEpgy?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'memorial-1969',
    name: 'Lễ truy điệu',
    room: 'Kiến trúc thống nhất',
    title: 'Lê Duẩn đọc điếu văn tại Lễ truy điệu ',
    summary:
      'Đồng chí Lê Duẩn đọc điếu văn tại Lễ truy điệu Chủ tịch Hồ Chí Minh tại Hà Nội, ngày 9-9-1969.',
    detail:
      'Đồng chí Lê Duẩn đọc điếu văn tại Lễ truy điệu Chủ tịch Hồ Chí Minh tại Hà Nội, ngày 9-9-1969.',
    image: archiveImages.hoChiMinhMemorial,
    position: [7.2, 1.35, 0],
    color: '#837061',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Anh le truy dieu 1969',
        href: 'https://keep.google.com/u/0/media/v2/1S8BgW_EbHJGRJkkjRiv7oddP8BvP_EwPzx9wjMOrKgP85CllCdWbaGeGgD40PieG/1TdIDnIROVuhp12CCksJjiXx54YTPeVsak-dWRJZ8E0UC3UVy3yuhAIFoJRkB0aYr?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'southern-heroes-1972',
    name: 'Dũng sĩ miền Nam 1972',
    room: 'Kiến trúc sư Thống nhất',
    title: 'Lê Duẩn với các dũng sĩ miền Nam',
    summary:
      'Bí thư thứ nhất Lê Duẩn với các dũng sĩ miền Nam (1972).',
    detail:
      'Bí thư thứ nhất Lê Duẩn với các dũng sĩ miền Nam (1972).',
    image: archiveImages.southernHeroes,
    position: [18.2, 1.35, 0],
    color: '#8b755f',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1pFnyuFE2vCJKbd0fMDx55DI3Q-sqk9qu0Yf5MBvAragqCyszjjLFL_g5jfnzSKqM/1pWVRQDuRvO9waTBN8txG-PLCMqvUcW2TQjyFrDog7XyYGIwSyOvHSUFo5iebWHc8?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'fidel-castro-1973',
    name: 'Fidel Castro thăm Việt Nam',
    room: 'Kiến trúc sư Thống nhất',
    title: 'Lê Duẩn đón đại biểu Cuba',
    summary:
      'Tổng Bí thư Lê Duẩn đón Đoàn đại biểu Đảng và Chính phủ Cuba, do Chủ tịch Fidel Castro dẫn đầu, sang thăm Việt Nam, ngày 12/9/1973.',
    detail:
      'Tổng Bí thư Lê Duẩn đón Đoàn đại biểu Đảng và Chính phủ Cuba, do Chủ tịch Fidel Castro dẫn đầu, sang thăm Việt Nam, ngày 12/9/1973. ',
    image: archiveImages.fidelCastroVisit,
    position: [21.8, 1.35, 0],
    color: '#88735d',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1TVRFMZaYvMTmZebl-YmLSWkEnZZY3j0yvjtvdxnYOGliLkZIFQBkQre_VlIk_ywA/1-8bNJ7EssaWjTPgTXV0V58TTN_uQTdeMF8zQwnFjZq0S-C5vuRNv8a_bddVqalwe?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'politburo-meeting-1975',
    name: 'Họp mở rộng Bộ Chính trị 1975',
    room: 'Kiến trúc sư Thống nhất',
    title: 'Lê Duẩn chủ trì cuộc họp mở rộng lần 2',
    summary:
      'Đồng chí Lê Duẩn chủ trì cuộc họp mở rộng, đợt 2 (từ ngày 18-12-1974 đến ngày 7-1-1975) của Bộ Chính trị, quyết định mở cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975',
    detail:
      'Đồng chí Lê Duẩn chủ trì cuộc họp mở rộng, đợt 2 (từ ngày 18-12-1974 đến ngày 7-1-1975) của Bộ Chính trị, quyết định mở cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975',
    image: archiveImages.politburoMeeting1975,
    position: [17.4, 1.35, 0],
    color: '#8a7460',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/18jNAj65XAz8x6puV4c4LW33ty3Wl-FCxA_IwIwATO_QZOpkIVVZLUluShLw7zwsA/1zqqepCHEgiouBdFYD3Hhec-roTMGSy9XgMl_03YCOPM3vqvv5foDFNGMsnrcb64?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'east-germany-1975',
    name: 'Thăm Cộng hòa Dân chủ Đức 1975',
    room: 'Kiến trúc sư Thống nhất',
    title: 'Lê Duẩn thăm Cộng hoà Dân chủ Đức',
    summary:
      'Tổng Bí thư Lê Duẩn thăm Cộng hòa Dân chủ Đức (15/10/1975).',
    detail:
      'Tổng Bí thư Lê Duẩn thăm Cộng hòa Dân chủ Đức (15/10/1975).',
    image: archiveImages.eastGermanyVisit,
    position: [18.8, 1.35, 0],
    color: '#85715d',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1_rRKW_citHdzEwwau4u6ZEvPO_ETyCMEop4f4IJ52odx6cZAbVrp94NNnESQfDVW/13NrIpih_0eh1PyPyI-h5tBFH8DsBBricMLQtwhs7Ecswyv-owEDqISPQRZVdXARi?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'poland-1975',
    name: 'Thăm Ba Lan 1975',
    room: 'Kiến trúc sư Thống nhất',
    title: 'Lê Duẩn thăm Ba Lan',
    summary:
      'Tổng Bí thư Lê Duẩn thăm Ba Lan (12/11/1975).',
    detail:
      'Tổng Bí thư Lê Duẩn thăm Ba Lan (12/11/1975).',
    image: archiveImages.polandVisit,
    position: [19.8, 1.35, 0],
    color: '#85715d',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1gP4OB-fRFP41g7UGOB0NnpWwsHERUEvEhkmXiJiFZcvfgUKNwU6KjHJGwSC98K8/1xI5mm751bXAQZlXQ0IbqN5o6nk-XB-YoJv_JUmbiyTr02ZLL2oeD3Qj9cHIi9HDp?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'congress-iv-1976',
    name: 'Đại hội IV năm 1976',
    room: 'Di sản & Đổi mới',
    title: 'Lê Duẩn đọc Báo cáo chính trị tại Đại hội IV',
    summary:
      'Đồng chí Lê Duẩn đọc Báo cáo chính trị tại Đại hội Đảng toàn quốc lần thứ IV, tổ chức tại Hà Nội từ 14 - 20/12/1976.',
    detail:
      'Đồng chí Lê Duẩn đọc Báo cáo chính trị tại Đại hội Đảng toàn quốc lần thứ IV, tổ chức tại Hà Nội từ 14 - 20/12/1976.',
    image: archiveImages.congress1976,
    position: [22.8, 1.35, 0],
    color: '#8a745f',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1mcRXketUkk6eMyNm-JPLx9eIQlJBaK38wo-uPdv1USwvAIsRVX-8geWoqwJecACJ/1XPb1Usyzgw7TAuDHFlskSaa9MASd3eonQCTv6QJKv270VIgdrIrxkiY7DqFL7CVo?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'youth-army-1980',
    name: 'Đại biểu Thanh niên Quân đội 1980',
    room: 'Di sản & Đổi mới',
    title: 'Lê Duẩn với các đại biểu Thanh niên Quân đội',
    summary:
      'Tổng Bí thư Lê Duẩn và Tổng Bí thư Đảng Cộng sản Liên Xô Leonid Ilyich Brezhnev ký Hiệp ước Hữu nghị và Hợp tác Việt Nam - Liên Xô (Moskva, 2/11/1978).',
    detail:
      'Tổng Bí thư Lê Duẩn và Tổng Bí thư Đảng Cộng sản Liên Xô Leonid Ilyich Brezhnev ký Hiệp ước Hữu nghị và Hợp tác Việt Nam - Liên Xô (Moskva, 2/11/1978).',
    image: archiveImages.youthArmy1980,
    position: [24.2, 1.35, 0],
    color: '#8a7560',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1_nu_DMYGBNCc92Uk14QmV2OLY2xM5mLI9oxFhmQZEMYSnfDEWTKwP2BH5_8Mxf-P/1HC9dAZaZ1EPW23EOv17w6uz82GyOQ6kpCff7un95-j4DwS_eUZA9E5qa73sBD1c?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'soviet-visit-1980',
    name: 'Thăm Liên Xô 1980',
    room: 'Di sản & Đổi mới',
    title: 'Lê Duẩn dẫn đầu đoàn đại biểu thăm Liên Xô',
    summary:
      'Tổng Bí thư Lê Duẩn dẫn đầu Đoàn đại biểu cấp cao Việt Nam thăm Liên Xô (28/6/1980).',
    detail:
      'Tổng Bí thư Lê Duẩn dẫn đầu Đoàn đại biểu cấp cao Việt Nam thăm Liên Xô (28/6/1980).',
    image: archiveImages.sovietVisit1980,
    position: [25.8, 1.35, 0],
    color: '#8a7560',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1SYIpqdZXxmYLEm_BxFHmiDPkE6Bz4i8sja8UUJdEsdhUnKvTw2ycpOa-z3zGT2kN/1DotNL2chpjBnI0DVr89OSasHt2du4FzcSpElABC5h-VhJs68zzTIHzo73RCnaBx7?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'congress-v-1982',
    name: 'Đại hội V năm 1982',
    room: 'Di sản & Đổi mới',
    title: 'Lê Duẩn với các đại biểu Đại hội V',
    summary:
      'Tổng Bí thư Lê Duẩn với các đại biểu dự Đại hội Đảng toàn quốc lần thứ V tại Hà Nội (29/3/1982).',
    detail:
      'Tổng Bí thư Lê Duẩn với các đại biểu dự Đại hội Đảng toàn quốc lần thứ V tại Hà Nội (29/3/1982).',
    image: archiveImages.congress1982,
    position: [27.4, 1.35, 0],
    color: '#8a7560',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: [
      {
        label: 'Google Keep image',
        href: 'https://keep.google.com/u/0/media/v2/1t7OHTYLOhFwTHSwdSk7Tiy9t232Lg3VSLbkL-0BBqDvUClwFlJELJdkbitkTnQg/1eJzMk5Qq5AbnDqofSTe1xmDrHZ7CzCjt9rxTZ8vQZTbdih_nEFUU8HfGoY2vg28?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
      }
    ]
  },
  {
    id: 'working-desk',
    name: 'Đại hội III năm 1960',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Lê Duẩn đọc báo cáo chính trị',
    summary:
      'Ảnh gốc từ hồ sơ Word ghi lại khoảnh khắc Lê Duẩn đọc báo cáo chính trị tại Đại hội III, đánh dấu vai trò lãnh đạo cao nhất của ông trong giai đoạn mới.',
    detail:
      'Điểm trưng bày này phù hợp để mở sang các lớp tư liệu về Đại hội III, chiến lược hai miền và chuỗi quyết sách lớn dẫn tới các bước ngoặt 1968 và 1975.',
    image: archiveImages.congressSpeech,
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
    name: 'Cuộc họp Bộ Chính trị đầu 1975',
    room: '“Kiến trúc sư” Thống nhất',
    title: 'Quyết định Tổng tiến công mùa Xuân',
    summary:
      'Ảnh tư liệu trong hồ sơ gắn trực tiếp với mốc Bộ Chính trị quyết định mở cuộc Tổng tiến công và nổi dậy mùa Xuân 1975.',
    detail:
      'Thay vì chỉ hiển thị sơ đồ chiến dịch, hiện vật này nên kết hợp ảnh cuộc họp, trích khẩu hiệu “Thần tốc, táo bạo” và bản đồ diễn biến để tạo cao trào cho phòng 1954-1975.',
    image: archiveImages.springVictory,
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
    name: 'Hiệp ước Việt - Xô 1978',
    room: 'Di sản & Đổi mới',
    title: 'Di sản hậu chiến và đối ngoại',
    summary:
      'Cụm tư liệu hậu chiến trong hồ sơ làm rõ vai trò của Lê Duẩn ở giai đoạn xây dựng đất nước, mở rộng quan hệ quốc tế và xử lý những thách thức sau thống nhất.',
    detail:
      'Ảnh ký Hiệp ước Hữu nghị và Hợp tác Việt Nam - Liên Xô nên được đặt như điểm kết của bảo tàng để nối từ chiến thắng quân sự sang câu chuyện điều hành đất nước và di sản chính trị lâu dài.',
    image: archiveImages.treaty1978,
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
  },

  {
    id: 'passaway-1986',
    name: 'Lễ Quốc tang Tổng Bí thư Lê Duẩn',
    room: 'Di sản & Đổi mới',
    title: 'Sự ra đi và Di sản để lại',
    summary: 'Ngày 10/7/1986, Tổng Bí thư Lê Duẩn qua đời tại Hà Nội sau gần 60 năm hoạt động cách mạng. Lễ quốc tang được tổ chức trọng thể.',
    detail: 'Cuộc đời ông gắn liền với phong trào cách mạng Việt Nam, kháng chiến chống Pháp, kháng chiến chống Mỹ và công cuộc xây dựng đất nước sau thống nhất.',
    image: archiveImages.passing1986News,
    position: [28, 1.35, 0],
    color: '#3d3d3d',
    size: [1.8, 1.1, 0.08],
    type: 'document',
    verified: true,
    sourceLinks: []
  }
];
const treatyLegacyExhibit = exhibits.find((exhibit) => exhibit.id === 'medal-legacy');

if (treatyLegacyExhibit) {
  treatyLegacyExhibit.name = 'Ký Hiệp ước Việt Nam - Liên Xô 1978';
  treatyLegacyExhibit.room = 'Di sản & Đổi mới';
  treatyLegacyExhibit.title = 'Lê Duẩn và Brezhnev ký Hiệp ước Hữu nghị';
  treatyLegacyExhibit.summary =
    'Tổng Bí thư Lê Duẩn và Tổng Bí thư Đảng Cộng sản Liên Xô Leonid Ilyich Brezhnev ký Hiệp ước Hữu nghị và Hợp tác Việt Nam - Liên Xô (Moskva, 2/11/1978).';
  treatyLegacyExhibit.detail =
    'Tổng Bí thư Lê Duẩn và Tổng Bí thư Đảng Cộng sản Liên Xô Leonid Ilyich Brezhnev ký Hiệp ước Hữu nghị và Hợp tác Việt Nam - Liên Xô (Moskva, 2/11/1978).';
    treatyLegacyExhibit.image = archiveImages.treaty1978;
  treatyLegacyExhibit.position = [21, 1.35, 0.2];
  treatyLegacyExhibit.color = '#8a7560';
  treatyLegacyExhibit.size = [1.8, 1.1, 0.08];
  treatyLegacyExhibit.type = 'document';
  treatyLegacyExhibit.sourceLinks = [
    {
      label: 'Google Keep image',
      href: 'https://keep.google.com/u/0/media/v2/1ED7emEKCxIYcHSl7ZwBpKjayKRzq337f-ItJwavTYvrcDNWadpa4iXPsNUiQuQw/1kvCgcr5B-7LEADKzFnw12W63WFBJNzdVOhVIfhgljHfJqVdNeEKfljUm_sy81pwa?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp'
    }
  ];
}

const congressSpeechExhibit = exhibits.find((exhibit) => exhibit.id === 'working-desk');

if (congressSpeechExhibit) {
  congressSpeechExhibit.image = archiveImages.congressSpeech;
  congressSpeechExhibit.summary =
    'Đại hội Đảng toàn quốc lần thứ 3 ngày 5-9-1960: Đồng chí Lê Duẩn đọc báo cáo chính trị tại đại hội.';
  congressSpeechExhibit.detail =
    'Đại hội Đảng toàn quốc lần thứ 3 ngày 5-9-1960: Đồng chí Lê Duẩn đọc báo cáo chính trị tại đại hội.';
}
