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
      'Khung thông tin cần hiển thị ảnh chân dung giai đoạn sớm, tài liệu tổ chức, và thuyết minh ngắn về chặng đường từ người thanh niên yêu nước ở miền Trung trở thành cán bộ lãnh đạo cách mạng. Có thể bổ sung hotspot dẫn sang timeline mốc 1928 và bộ ảnh tư liệu đầu đời.',
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
      'Phần mô tả nên tập trung vào việc Lê Duẩn bị thực dân Pháp bắt năm 1931, trải qua nhiều nhà tù và tiếp tục rèn luyện ý chí, bản lĩnh trong lao tù. Với bảo tàng 3D, nhóm tư liệu này cần đi kèm âm thanh nền tiết chế và lớp ánh sáng tối để tăng chiều sâu cảm xúc.',
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
      'Khung thông tin nên cho thấy rõ đây không chỉ là một tài liệu chính trị đơn lẻ, mà là mắt xích quan trọng trong quá trình hình thành đường lối cách mạng miền Nam, sau này gắn với Nghị quyết 15 và bước ngoặt Đồng khởi. Phù hợp để thêm facsimile, dòng trích dẫn và sơ đồ bối cảnh 1954-1956.',
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
    name: 'Dai hoi III nam 1960',
    room: 'Kien truc su Thong nhat',
    title: 'Chu tich Ho Chi Minh phat bieu tai Dai hoi III',
    summary:
      'Anh tu lieu ghi lai khoanh khac Chu tich Ho Chi Minh phat bieu tai Dai hoi dai bieu Dang Lao dong Viet Nam toan quoc lan thu III nam 1960.',
    detail:
      'Anh tu lieu ghi lai khoanh khac Chu tich Ho Chi Minh phat bieu tai Dai hoi dai bieu Dang Lao dong Viet Nam toan quoc lan thu III nam 1960.',
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
    name: 'Lanh dao mien Bac nam 1966',
    room: 'Kien truc su Thong nhat',
    title: 'Le Duan cung cac lanh dao mien Bac',
    summary:
      'TBT Le Duan (thu 2 tu ben phai) cung cac lanh dao mien Bac Viet Nam vao nam 1966. Ong Duan duoc coi la nguoi dieu hanh cuoc tong tien cong Mau Than, chu khong phai Ho Chi Minh hay Vo Nguyen Giap.',
    detail:
      'TBT Le Duan (thu 2 tu ben phai) cung cac lanh dao mien Bac Viet Nam vao nam 1966. Ong Duan duoc coi la nguoi dieu hanh cuoc tong tien cong Mau Than, chu khong phai Ho Chi Minh hay Vo Nguyen Giap.',
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
    name: 'Le Duan truy dieu Bac Ho',
    room: 'Kien truc su Thong nhat',
    title: 'Le Duan doc dieu van tai Le truy dieu',
    summary:
      'Dong chi Le Duan doc dieu van tai Le truy dieu Chu tich Ho Chi Minh tai Ha Noi, ngay 9-9-1969.',
    detail:
      'Dong chi Le Duan doc dieu van tai Le truy dieu Chu tich Ho Chi Minh tai Ha Noi, ngay 9-9-1969.',
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
    name: 'Dung si mien Nam 1972',
    room: 'Kien truc su Thong nhat',
    title: 'Le Duan voi cac dung si mien Nam',
    summary:
      'Bi thu thu nhat Le Duan voi cac dung si mien Nam nam 1972.',
    detail:
      'Bi thu thu nhat Le Duan voi cac dung si mien Nam nam 1972.',
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
    name: 'Fidel Castro tham Viet Nam',
    room: 'Kien truc su Thong nhat',
    title: 'Le Duan don doan dai bieu Cuba',
    summary:
      'Tong Bi thu Le Duan don Doan dai bieu Dang va Chinh phu Cuba, do Chu tich Fidel Castro dan dau, sang tham Viet Nam, ngay 12/9/1973.',
    detail:
      'Tong Bi thu Le Duan don Doan dai bieu Dang va Chinh phu Cuba, do Chu tich Fidel Castro dan dau, sang tham Viet Nam, ngay 12/9/1973.',
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
    name: 'Hop mo rong Bo Chinh tri 1975',
    room: 'Kien truc su Thong nhat',
    title: 'Le Duan chu tri cuoc hop mo rong dot 2',
    summary:
      'Dong chi Le Duan chu tri cuoc hop mo rong, dot 2 (tu ngay 18-12-1974 den ngay 7-1-1975) cua Bo Chinh tri, quyet dinh mo cuoc Tong tien cong va noi day mua Xuan nam 1975.',
    detail:
      'Dong chi Le Duan chu tri cuoc hop mo rong, dot 2 (tu ngay 18-12-1974 den ngay 7-1-1975) cua Bo Chinh tri, quyet dinh mo cuoc Tong tien cong va noi day mua Xuan nam 1975.',
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
    name: 'Tham Cong hoa Dan chu Duc 1975',
    room: 'Kien truc su Thong nhat',
    title: 'Le Duan tham Cong hoa Dan chu Duc',
    summary:
      'Tong Bi thu Le Duan tham Cong hoa Dan chu Duc ngay 15/10/1975.',
    detail:
      'Tong Bi thu Le Duan tham Cong hoa Dan chu Duc ngay 15/10/1975.',
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
    name: 'Tham Ba Lan 1975',
    room: 'Kien truc su Thong nhat',
    title: 'Le Duan tham Ba Lan',
    summary:
      'Tong Bi thu Le Duan tham Ba Lan ngay 12/11/1975.',
    detail:
      'Tong Bi thu Le Duan tham Ba Lan ngay 12/11/1975.',
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
    name: 'Dai hoi IV nam 1976',
    room: 'Di san & Doi moi',
    title: 'Le Duan doc Bao cao chinh tri tai Dai hoi IV',
    summary:
      'Dong chi Le Duan doc Bao cao chinh tri tai Dai hoi Dang toan quoc lan thu IV, to chuc tai Ha Noi tu 14 - 20/12/1976.',
    detail:
      'Dong chi Le Duan doc Bao cao chinh tri tai Dai hoi Dang toan quoc lan thu IV, to chuc tai Ha Noi tu 14 - 20/12/1976.',
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
    name: 'Dai bieu Thanh nien Quan doi 1980',
    room: 'Di san & Doi moi',
    title: 'Le Duan voi cac dai bieu Thanh nien Quan doi',
    summary:
      'Tong Bi thu Le Duan voi cac dai bieu Thanh nien Quan doi tham du Dai hoi dai bieu Doan Thanh nien Cong san Ho Chi Minh toan quoc lan thu IV tai Ha Noi (20/2/1980).',
    detail:
      'Tong Bi thu Le Duan voi cac dai bieu Thanh nien Quan doi tham du Dai hoi dai bieu Doan Thanh nien Cong san Ho Chi Minh toan quoc lan thu IV tai Ha Noi (20/2/1980).',
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
    name: 'Tham Lien Xo 1980',
    room: 'Di san & Doi moi',
    title: 'Le Duan dan dau doan dai bieu tham Lien Xo',
    summary:
      'Tong Bi thu Le Duan dan dau Doan dai bieu cap cao Viet Nam tham Lien Xo (28/6/1980).',
    detail:
      'Tong Bi thu Le Duan dan dau Doan dai bieu cap cao Viet Nam tham Lien Xo (28/6/1980).',
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
    name: 'Dai hoi V nam 1982',
    room: 'Di san & Doi moi',
    title: 'Le Duan voi cac dai bieu Dai hoi V',
    summary:
      'Tong Bi thu Le Duan voi cac dai bieu du Dai hoi Dang toan quoc lan thu V tai Ha Noi (29/3/1982).',
    detail:
      'Tong Bi thu Le Duan voi cac dai bieu du Dai hoi Dang toan quoc lan thu V tai Ha Noi (29/3/1982).',
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
  }
];

const treatyLegacyExhibit = exhibits.find((exhibit) => exhibit.id === 'medal-legacy');

if (treatyLegacyExhibit) {
  treatyLegacyExhibit.name = 'Ky Hiep uoc Viet Nam - Lien Xo 1978';
  treatyLegacyExhibit.room = 'Di san & Doi moi';
  treatyLegacyExhibit.title = 'Le Duan va Brezhnev ky Hiep uoc Huu nghi';
  treatyLegacyExhibit.summary =
    'Tong Bi thu Le Duan va Tong Bi thu Dang Cong san Lien Xo Leonid Ilyich Brezhnev ky Hiep uoc Huu nghi va Hop tac Viet Nam - Lien Xo (Moskva, 2/11/1978).';
  treatyLegacyExhibit.detail =
    'Tong Bi thu Le Duan va Tong Bi thu Dang Cong san Lien Xo Leonid Ilyich Brezhnev ky Hiep uoc Huu nghi va Hop tac Viet Nam - Lien Xo (Moskva, 2/11/1978).';
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
