module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mediaAssets",
    ()=>mediaAssets
]);
const mediaAssets = [
    {
        id: 'portrait-gallery',
        title: 'Bộ chân dung Lê Duẩn theo từng giai đoạn',
        category: 'image',
        priority: 'core',
        section: 'Nhân vật trung tâm',
        source: 'BTLSQG / Báo Nhân Dân / TTXVN',
        note: 'Dùng cho hero banner, gallery chân dung, popup tiểu sử và các khung chuyển cảnh giữa các phòng.',
        usage: 'Chọn 1 ảnh hero ngang, 1 ảnh bán thân trang trọng và 6-8 ảnh tư liệu theo giai đoạn 1930, 1954, 1960, 1968, 1975, 1976-1986.',
        historicalContext: 'Đây là trục thị giác quan trọng nhất của toàn bộ bảo tàng vì giúp người xem nhìn rõ tiến trình từ nhà hoạt động cách mạng đến nhà lãnh đạo cao nhất của Đảng.',
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
        note: 'Phục vụ phòng mở đầu, bản đồ quê hương, panel tiểu sử và phần giới thiệu về môi trường hình thành nhân cách.',
        usage: 'Cần 1 ảnh toàn cảnh khu lưu niệm, 2-3 ảnh nhà lưu niệm hoặc không gian thờ tự, 1 bản đồ Quảng Trị đầu thế kỷ XX.',
        historicalContext: 'Nhóm ảnh này giúp đặt Lê Duẩn vào không gian xã hội - văn hóa cụ thể của Quảng Trị, thay vì chỉ mở đầu bằng chân dung rời rạc.',
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
        note: 'Dùng cho khu “những năm tháng giam cầm”, phù hợp với ảnh hồ sơ, buồng giam, hiện vật tù chính trị và trích dẫn hồi ức.',
        usage: 'Cần 1 ảnh hồ sơ, 2 ảnh di tích, 1 ảnh hiện vật tù chính trị và 1 ảnh đồ họa minh họa tuyến giam giữ.',
        historicalContext: 'Đây là nhóm tư liệu cho thấy sức bền chính trị và tinh thần của thế hệ cách mạng tiền bối, đồng thời tạo chiều sâu cảm xúc trong hành trình bảo tàng.',
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
        note: 'Đây là cụm tư liệu nền cho phòng 1954-1960, dùng cho popup tài liệu, bản đồ tư duy và bảng chú giải.',
        usage: 'Cần ảnh bìa, ảnh trang mở đầu, 2-3 trang trích dẫn có đánh dấu và một sơ đồ tóm tắt bối cảnh 1954-1956.',
        historicalContext: 'Nhóm tư liệu này giúp bảo tàng đi từ tiểu sử cá nhân sang chiều sâu đường lối chính trị, lý giải vì sao Lê Duẩn thường được gắn với tư duy chiến lược về miền Nam.',
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
        note: 'Phục vụ cho panel về bước chuyển chiến lược của cách mạng miền Nam từ cuối thập niên 1950 sang đầu thập niên 1960.',
        usage: 'Nên có 1 bản đồ Bến Tre, 2 ảnh phong trào quần chúng, 1 ảnh lực lượng tại chỗ, 1 ảnh tư liệu lãnh đạo liên quan.',
        historicalContext: 'Đồng khởi không chỉ là một mốc sự kiện mà là bước ngoặt cần được kể như nút mở của chặng đường đi tới Mậu Thân và mùa Xuân 1975.',
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
        note: 'Dùng cho phòng cao trào chiến tranh chống Mỹ với trọng tâm là đô thị, tác động chính trị và bước ngoặt chiến lược.',
        usage: 'Cần 1 bản đồ tổng, 3-4 ảnh đô thị trọng điểm, 1 infographic về quy mô tiến công và 1 ảnh tư liệu lãnh đạo.',
        historicalContext: 'Bộ ảnh này giúp người xem hiểu Mậu Thân 1968 trong mạch diễn biến chiến tranh, không tách rời vai trò chỉ đạo chiến lược của Trung ương.',
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
        note: 'Đây là cụm ảnh phải đầu tư mạnh nhất sau chân dung nhân vật trung tâm vì là đỉnh cao cảm xúc của toàn bộ bảo tàng.',
        usage: 'Cần 1 bản đồ liên hoàn ba chiến dịch, 1 bộ ảnh Buôn Ma Thuột, 1 bộ ảnh Huế - Đà Nẵng, 1 bộ ảnh Chiến dịch Hồ Chí Minh và ảnh thống nhất.',
        historicalContext: 'Chuỗi hình ảnh này cho phép dựng narrative liên tục từ đòn mở màn Tây Nguyên tới khoảnh khắc 30-4-1975, tạo climax thị giác và lịch sử.',
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
        note: 'Dùng cho không gian kết thúc, chuyển từ thắng lợi quân sự sang câu chuyện lãnh đạo đất nước thời hậu chiến.',
        usage: 'Cần ảnh hội nghị, ảnh làm việc, ảnh đi cơ sở và 1 poster hoặc bìa sách nghiên cứu về Lê Duẩn.',
        historicalContext: 'Nhóm ảnh này giúp phần kết không bị cụt ở mốc 1975 mà kéo dài tới giai đoạn xây dựng đất nước và đánh giá di sản.',
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
        note: 'Dùng cho khu mở đầu hoặc popup media dài, giúp người xem có một chân dung khái quát trước khi đi sâu vào từng phòng trưng bày.',
        usage: 'Nên dựng dưới dạng video mở đầu 30-60 giây và một phiên bản đầy đủ hơn cho trang media hoặc kiosk video.',
        historicalContext: 'Video chân dung đóng vai trò “narrative anchor”, gom lại các lớp tiểu sử, chiến lược, chiến dịch và di sản trong một trục kể chuyện ngắn.',
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
        note: 'Mỗi chiến dịch nên có một clip riêng 60-120 giây với bản đồ động, ảnh tư liệu và lời dẫn ngắn.',
        usage: 'Triển khai thành 4 clip: Đồng khởi 1960, Mậu Thân 1968, Tây Nguyên 1975, Chiến dịch Hồ Chí Minh 1975.',
        historicalContext: 'Các clip này biến trang media và không gian 3D thành một bảo tàng sống hơn, giảm cảm giác chỉ đang xem ảnh tĩnh và chữ mô tả.',
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
        note: 'Phù hợp cho phòng cuối, nơi cần nhịp kể chậm hơn để khép lại hành trình bằng đánh giá lịch sử và ký ức công chúng.',
        usage: 'Có thể dùng 1 clip tưởng niệm ngắn 45 giây và 1 video dài hơn về di sản chính trị, hình ảnh lưu niệm, hội thảo, triển lãm.',
        historicalContext: 'Video kết thúc giúp nối các lớp tư liệu lịch sử với hiện tại, cho thấy vì sao hình ảnh và di sản của Lê Duẩn vẫn tiếp tục được nhắc lại trong không gian công cộng.',
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
}),
"[project]/src/data/contentPlan.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignPlans",
    ()=>campaignPlans,
    "editorialPrinciples",
    ()=>editorialPrinciples,
    "licensingChecklist",
    ()=>licensingChecklist,
    "productionPhases",
    ()=>productionPhases
]);
const campaignPlans = [
    {
        id: 'dong-khoi-1960',
        title: 'Phong trào Đồng khởi',
        period: 'Tháng 1-1960',
        room: '“Kiến trúc sư” Thống nhất',
        overview: 'Phong trào bùng lên từ Bến Tre rồi lan rộng ra Nam Bộ, Tây Nguyên, phá thế kìm kẹp ở nhiều vùng nông thôn và đánh dấu bước chuyển của cách mạng miền Nam từ giữ gìn lực lượng sang thế tiến công.',
        historicalDetail: 'Mốc thường được nhấn mạnh là ngày 17-1-1960 ở ba xã Định Thủy, Bình Khánh, Phước Hiệp của huyện Mỏ Cày. Từ cú hích này, lực lượng chính trị và vũ trang tại chỗ phát triển nhanh, góp phần đưa cách mạng miền Nam bước sang giai đoạn mới.',
        leDuanRole: 'Lê Duẩn là một trong những người đặt nền móng về đường lối qua bản Đề cương Cách mạng miền Nam và các định hướng sau đó, tạo cơ sở chính trị cho bước ngoặt Đồng khởi và cho Nghị quyết 15.',
        keyVisuals: [
            'Bộ ảnh Bến Tre 1960, nông thôn Nam Bộ, biểu tình chính trị và lực lượng tự vệ.',
            'Bản đồ lan tỏa của phong trào từ Bến Tre ra các tỉnh Nam Bộ và Tây Nguyên.',
            'Ảnh facsimile Đề cương Cách mạng miền Nam, Nghị quyết 15 và các trang tư liệu liên quan.'
        ],
        videoPlan: [
            'Video motion-graphic 60-90 giây mô tả tuyến thời gian từ 1956 đến Đồng khởi 1960.',
            'Clip voice-over về vì sao Đồng khởi trở thành bước ngoặt chiến lược của cách mạng miền Nam.',
            'Phỏng dựng bản đồ với lớp hotspot để liên kết sang hiện vật 3D và timeline.'
        ],
        sourceLinks: [
            {
                label: 'Nhân Dân: Phong trào Đồng khởi ở Bến Tre',
                href: 'https://nhandan.vn/phong-trao-dong-khoi-o-ben-tre-post725552.html'
            },
            {
                label: 'Nhân Dân: Nghị quyết 15 mở đường',
                href: 'https://nhandan.vn/nghi-quyet-15-mo-duong-cho-cach-mang-mien-nam-post567818.html'
            }
        ]
    },
    {
        id: 'tet-mau-than-1968',
        title: 'Tổng tiến công và nổi dậy Tết Mậu Thân',
        period: 'Xuân 1968',
        room: '“Kiến trúc sư” Thống nhất',
        overview: 'Cuộc tổng tiến công diễn ra trên toàn miền Nam trong dịp Tết Mậu Thân 1968, tạo cú sốc chiến lược lớn, buộc phía Mỹ phải xem xét lại cách tiếp cận chiến tranh và mở ra bước ngoặt mới trên bàn đàm phán.',
        historicalDetail: 'Theo tổng hợp của báo Quân đội nhân dân, cuộc tiến công đồng loạt diễn ra ở 4 trong 6 thành phố lớn, 37 trên 44 tỉnh lỵ và hàng trăm quận lỵ, căn cứ quân sự. Ý nghĩa lịch sử không chỉ nằm ở kết quả quân sự tức thời mà còn ở tác động chính trị, ngoại giao và tâm lý chiến lược.',
        leDuanRole: 'Trên cương vị lãnh đạo chủ chốt của Đảng, Lê Duẩn cùng Bộ Chính trị tham gia hoạch định và chỉ đạo đường lối tổng tiến công, gắn mục tiêu quân sự với tác động chính trị và ngoại giao.',
        keyVisuals: [
            'Bản đồ các đô thị trọng điểm: Sài Gòn, Huế, Đà Nẵng, Cần Thơ.',
            'Ảnh tư liệu lực lượng tiến công trong đô thị, hệ thống hầm bí mật, giao liên và phong trào quần chúng.',
            'Infographic so sánh cục diện chiến trường trước và sau Mậu Thân 1968.'
        ],
        videoPlan: [
            'Phim ngắn 90 giây dựng lại diễn biến theo ba lớp: đô thị, chính trị, ngoại giao.',
            'Clip kể chuyện theo nhân vật dẫn chuyện trên nền ảnh tư liệu và bản đồ.',
            'Module tương tác cho phép người xem chọn từng đô thị để xem ảnh, tài liệu và trích đoạn tư liệu.'
        ],
        sourceLinks: [
            {
                label: 'QĐND: Tầm vóc và ý nghĩa lịch sử Tết Mậu Thân 1968',
                href: 'https://media.qdnd.vn/long-form/cuoc-tong-tien-cong-va-noi-day-tet-mau-than-1968-tam-voc-va-y-nghia-lich-su-56412'
            }
        ]
    },
    {
        id: 'tay-nguyen-1975',
        title: 'Chiến dịch Tây Nguyên',
        period: '4-3 đến 3-4-1975',
        room: '“Kiến trúc sư” Thống nhất',
        overview: 'Chiến dịch Tây Nguyên mở màn cuộc Tổng tiến công và nổi dậy mùa Xuân 1975. Đòn điểm huyệt vào Buôn Ma Thuột làm tan rã một mắt xích chiến lược quan trọng, kéo theo sự sụp đổ dây chuyền của hệ thống phòng thủ đối phương.',
        historicalDetail: 'Ngày 10-3-1975, Buôn Ma Thuột bị tiến công và nhanh chóng trở thành đòn then chốt khiến đối phương mất thế chủ động. Từ thắng lợi ở Tây Nguyên, Bộ Chính trị kịp thời nhận định thời cơ chiến lược đã chín muồi để phát triển tiến công trên toàn miền Nam.',
        leDuanRole: 'Lê Duẩn cùng tập thể lãnh đạo tối cao theo sát diễn biến, nhấn mạnh yêu cầu nắm thời cơ và chuyển nhanh từ thắng lợi chiến dịch sang thay đổi cục diện chiến lược toàn miền Nam.',
        keyVisuals: [
            'Bản đồ thế trận Tây Nguyên với điểm nhấn Buôn Ma Thuột, Pleiku, Kon Tum.',
            'Ảnh tư liệu cơ động lực lượng, xe tăng, pháo binh, dân công hỏa tuyến.',
            'Tường ảnh “mở màn mùa Xuân 1975” liên kết với bản đồ thắng lợi nối tiếp.'
        ],
        videoPlan: [
            'Video 3 lớp thời gian: chuẩn bị chiến dịch, đột phá Buôn Ma Thuột, phản ứng dây chuyền của đối phương.',
            'Kiosk màn hình dọc với sa bàn số hóa Tây Nguyên và lời thuyết minh ngắn.',
            'Clip 45 giây dành cho màn hình ambient trong phòng 3D.'
        ],
        sourceLinks: [
            {
                label: 'QĐND: Chiến dịch Tây Nguyên mở màn Đại thắng mùa Xuân 1975',
                href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-tay-nguyen-mo-man-dai-thang-mua-xuan-1975-819811'
            },
            {
                label: 'QĐND: Trận Buôn Ma Thuột',
                href: 'https://www.qdnd.vn/50namgiaiphongmiennam/tran-buon-ma-thuot-mo-man-thang-loi-trong-chien-dich-tay-nguyen-818454'
            }
        ]
    },
    {
        id: 'hue-da-nang-1975',
        title: 'Chiến dịch Huế - Đà Nẵng',
        period: '5-3 đến 29-3-1975',
        room: '“Kiến trúc sư” Thống nhất',
        overview: 'Sau Tây Nguyên, chiến dịch Huế - Đà Nẵng phát triển với tốc độ rất cao, giải phóng cố đô Huế và thành phố Đà Nẵng, làm thay đổi sâu sắc tương quan lực lượng trước khi mở chiến dịch cuối cùng vào Sài Gòn.',
        historicalDetail: 'Thắng lợi liên tiếp ở Trị Thiên, Huế rồi Đà Nẵng làm tan rã một lực lượng lớn của đối phương ở miền Trung. Đây là bước phát triển trực tiếp đưa cục diện chiến tranh sang giai đoạn kết thúc với nhịp độ thần tốc.',
        leDuanRole: 'Lê Duẩn được nhìn nhận là một trong những người thúc đẩy quyết tâm chiến lược tận dụng thời cơ, chuyển từ thắng lợi khu vực sang kế hoạch giải phóng hoàn toàn miền Nam trong thời gian ngắn nhất.',
        keyVisuals: [
            'Chuỗi ảnh giải phóng Huế, tiến vào Đà Nẵng, nhân dân đón lực lượng cách mạng.',
            'Bản đồ ven biển miền Trung với các mũi phát triển tiến công.',
            'Dải ảnh báo chí và điện mừng thể hiện nhịp độ thần tốc của chiến dịch.'
        ],
        videoPlan: [
            'Clip 60 giây “thần tốc từ Huế đến Đà Nẵng” dùng bản đồ động và ảnh tư liệu.',
            'Video phân lớp địa lý: Trị Thiên, Huế, Đà Nẵng, cửa ngõ tiến vào Sài Gòn.',
            'Trạm kiosk cho phép phát theo tuyến hoặc theo mốc ngày.'
        ],
        sourceLinks: [
            {
                label: 'QĐND: Chiến dịch Huế - Đà Nẵng',
                href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-hue-da-nang-tao-buoc-ngoat-quyet-dinh-cho-dai-thang-mua-xuan-1975-818182'
            }
        ]
    },
    {
        id: 'ho-chi-minh-1975',
        title: 'Chiến dịch Hồ Chí Minh',
        period: '26-4 đến 30-4-1975',
        room: '“Kiến trúc sư” Thống nhất',
        overview: 'Chiến dịch cuối cùng giải phóng Sài Gòn - Gia Định, kết thúc chiến tranh, hoàn thành sự nghiệp giải phóng miền Nam, thống nhất đất nước.',
        historicalDetail: 'Năm cánh quân đồng loạt tiến vào trung tâm Sài Gòn, đánh chiếm các mục tiêu then chốt và buộc chính quyền Sài Gòn tuyên bố đầu hàng vô điều kiện trưa 30-4-1975. Đây là đỉnh cao của cuộc Tổng tiến công và nổi dậy mùa Xuân 1975.',
        leDuanRole: 'Trong vai trò người đứng đầu Ban Chấp hành Trung ương, Lê Duẩn cùng Bộ Chính trị và Quân ủy Trung ương tham gia quyết định chủ trương giải phóng Sài Gòn trước mùa mưa năm 1975, chớp thời cơ kết thúc chiến tranh.',
        keyVisuals: [
            'Bản đồ năm cánh quân tiến vào Sài Gòn và các mục tiêu chiến lược.',
            'Ảnh xe tăng tiến vào Dinh Độc Lập, quần chúng trên đường phố, điện mừng thống nhất.',
            'Sa bàn số hóa kết hợp timeline từ Tây Nguyên đến 30-4-1975.'
        ],
        videoPlan: [
            'Phim ngắn 2 phút dựng lại chiến dịch bằng bản đồ động, ảnh tư liệu, lời dẫn nhịp nhanh.',
            'Video màn hình rộng sử dụng nhạc nền trang trọng cho không gian kết thúc của bảo tàng.',
            'Clip tương tác “5 cánh quân” để người xem chạm vào từng hướng tiến công.'
        ],
        sourceLinks: [
            {
                label: 'QĐND: Chiến dịch Hồ Chí Minh lịch sử',
                href: 'https://www.qdnd.vn/50namgiaiphongmiennam/chien-dich-ho-chi-minh-lich-su-to-chuc-su-dung-luc-luong-rat-sang-tao-de-gianh-thang-loi-tron-ven-817547'
            }
        ]
    }
];
const productionPhases = [
    {
        id: 'inventory',
        title: 'Giai đoạn 1: Kiểm kê tư liệu',
        timeframe: '1-2 tuần',
        objective: 'Chuẩn hóa toàn bộ ảnh chân dung, ảnh tư liệu, tài liệu scan và video hiện có về Lê Duẩn.',
        deliverables: [
            'Folder nguồn gốc theo phòng trưng bày và theo niên đại.',
            'Bảng metadata gồm tên tư liệu, thời gian, bối cảnh, đơn vị phát hành, trạng thái bản quyền.',
            'Danh sách tài liệu cần số hóa lại ở độ phân giải cao.'
        ]
    },
    {
        id: 'script',
        title: 'Giai đoạn 2: Biên tập lịch sử',
        timeframe: '1 tuần',
        objective: 'Viết lại thuyết minh cho timeline, popup hiện vật, media wall và storyboard video.',
        deliverables: [
            'Bản thảo lời dẫn ngắn cho từng mốc lịch sử và từng chiến dịch.',
            'Bộ text 80-120 chữ cho card ảnh/video và 180-260 chữ cho popup chi tiết.',
            'Danh sách trích dẫn, nguồn kiểm chứng và thuật ngữ cần thống nhất.'
        ]
    },
    {
        id: 'visual',
        title: 'Giai đoạn 3: Dàn dựng hình ảnh',
        timeframe: '1-2 tuần',
        objective: 'Đưa ảnh thật, bản đồ, scan tài liệu và poster chiến dịch vào đúng vị trí trong site.',
        deliverables: [
            'Hero banner chân dung chính thức và gallery chân dung theo giai đoạn.',
            'Ảnh nền cho từng phòng, thumbnail cho timeline, popup và media.',
            'Bản đồ động hoặc ảnh ghép cho Đồng khởi, Mậu Thân 1968 và mùa Xuân 1975.'
        ]
    },
    {
        id: 'video',
        title: 'Giai đoạn 4: Kiosk video',
        timeframe: '1 tuần',
        objective: 'Tạo hệ thống clip ngắn, phim tài liệu nhúng và điểm phát video theo từng phòng.',
        deliverables: [
            'Clip mở đầu 30-45 giây về chân dung Lê Duẩn.',
            'Video 60-120 giây cho từng chiến dịch trọng điểm.',
            'Màn hình kết thúc với video di sản và giai đoạn sau thống nhất.'
        ]
    }
];
const editorialPrinciples = [
    'Ưu tiên nguồn chính thống: Bảo tàng Lịch sử Quốc gia, báo Nhân Dân, báo Quân đội nhân dân, VTV, VietnamPlus/VNews.',
    'Mỗi ảnh và video cần có mô tả bối cảnh, niên đại, nhân vật liên quan và tình trạng bản quyền rõ ràng.',
    'Nội dung chiến dịch phải tách bạch giữa dữ kiện lịch sử, diễn giải trưng bày và yếu tố minh họa đồ họa.',
    'Mọi popup 3D nên có tối thiểu một nguồn kiểm chứng đi kèm để tránh biến bảo tàng thành trang mô tả chung chung.'
];
const licensingChecklist = [
    'Xác nhận đơn vị sở hữu ảnh/video gốc và phạm vi được phép công bố trên web.',
    'Lưu bản scan chất lượng cao riêng với bản nén dùng trên website.',
    'Chuẩn hóa tên file, alt text và credit line theo cùng một quy tắc.',
    'Kiểm tra lại các trích dẫn lịch sử, ngày tháng chiến dịch và tên đơn vị trước khi xuất bản chính thức.'
];
}),
"[project]/src/components/shared/SectionHeading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SectionHeading({ eyebrow, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl space-y-3",
        children: [
            eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold uppercase tracking-[0.28em] text-museum.accent",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SectionHeading.tsx",
                lineNumber: 10,
                columnNumber: 18
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-semibold tracking-tight text-white md:text-4xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SectionHeading.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base leading-7 text-stone-300",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SectionHeading.tsx",
                lineNumber: 12,
                columnNumber: 22
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/SectionHeading.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shared/VerifiedBadge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerifiedBadge",
    ()=>VerifiedBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-rsc] (ecmascript) <export default as BadgeCheck>");
;
;
function VerifiedBadge({ label = 'Nguồn kiểm chứng' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/VerifiedBadge.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/VerifiedBadge.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/media/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contentPlan$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/contentPlan.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$VerifiedBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/VerifiedBadge.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function MediaPage() {
    const imageCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mediaAssets"].filter((asset)=>asset.category === 'image').length;
    const videoCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mediaAssets"].filter((asset)=>asset.category === 'video').length;
    const coreCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mediaAssets"].filter((asset)=>asset.priority === 'core').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                eyebrow: "Tư liệu",
                title: "Kho ảnh, video và storyboard cho các trận đánh lịch sử",
                description: "Trang này không còn chỉ là danh sách placeholder: mỗi bộ media đã có bối cảnh lịch sử, cách dùng trong site và nhóm chiến dịch tương ứng để bạn thay thẳng bằng ảnh/video thật."
            }, void 0, false, {
                fileName: "[project]/src/app/media/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-4 md:grid-cols-3",
                children: [
                    {
                        label: 'Bộ ảnh',
                        value: imageCount.toString().padStart(2, '0')
                    },
                    {
                        label: 'Module video',
                        value: videoCount.toString().padStart(2, '0')
                    },
                    {
                        label: 'Ưu tiên cốt lõi',
                        value: coreCount.toString().padStart(2, '0')
                    }
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[1.5rem] border border-white/10 bg-museum.card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs uppercase tracking-[0.24em] text-stone-400",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/media/page.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 text-3xl font-semibold text-white",
                                children: item.value
                            }, void 0, false, {
                                fileName: "[project]/src/app/media/page.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/src/app/media/page.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/media/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mediaAssets"].map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "overflow-hidden rounded-[1.7rem] border border-white/10 bg-museum.card shadow-museum",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: asset.thumbnail,
                                alt: asset.title,
                                width: 800,
                                height: 480,
                                className: "h-48 w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/media/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-300",
                                                        children: asset.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/media/page.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-museum.accent/20 bg-museum.accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-museum.accent",
                                                        children: asset.priority === 'core' ? 'cốt lõi' : 'bổ trợ'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/media/page.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            asset.verified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$VerifiedBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerifiedBadge"], {}, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 35
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-white",
                                        children: asset.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-museum.accent",
                                        children: asset.section
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-7 text-stone-300",
                                        children: asset.note
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-black/20 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                children: "Bối cảnh lịch sử"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-7 text-stone-300",
                                                children: asset.historicalContext
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-black/20 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                children: "Cách dùng trong site"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-7 text-stone-300",
                                                children: asset.usage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-stone-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                children: "Nguồn ưu tiên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            asset.source
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    asset.sourceLinks?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: asset.sourceLinks.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: source.href,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-200 transition hover:border-museum.accent/40 hover:text-white",
                                                children: source.label
                                            }, source.href, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/media/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, asset.id, true, {
                        fileName: "[project]/src/app/media/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/media/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        eyebrow: "Chiến dịch",
                        title: "Storyboard chi tiết cho các trận đánh và bước ngoặt lịch sử",
                        description: "Mỗi hồ sơ dưới đây ghép sẵn phần diễn giải lịch sử, vai trò của Lê Duẩn và checklist hình ảnh/video cần chuẩn bị để đẩy thẳng vào bảo tàng."
                    }, void 0, false, {
                        fileName: "[project]/src/app/media/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 space-y-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contentPlan$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["campaignPlans"].map((campaign)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-museum.accent/20 bg-museum.accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-museum.accent",
                                                children: campaign.period
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-300",
                                                children: campaign.room
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-4 text-2xl font-semibold text-white",
                                        children: campaign.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base leading-7 text-stone-300",
                                                        children: campaign.overview
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/media/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-black/20 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-2 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                                children: "Chi tiết lịch sử"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-7 text-stone-300",
                                                                children: campaign.historicalDetail
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/media/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-black/20 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-2 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                                children: "Vai trò trong tuyến kể chuyện về Lê Duẩn"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-7 text-stone-300",
                                                                children: campaign.leDuanRole
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/media/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 md:grid-cols-2 xl:grid-cols-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-black/20 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                                children: "Hình ảnh cần có"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-sm leading-7 text-stone-300",
                                                                children: campaign.keyVisuals.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            "• ",
                                                                            item
                                                                        ]
                                                                    }, item, true, {
                                                                        fileName: "[project]/src/app/media/page.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/media/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-black/20 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                                children: "Kế hoạch video"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-sm leading-7 text-stone-300",
                                                                children: campaign.videoPlan.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            "• ",
                                                                            item
                                                                        ]
                                                                    }, item, true, {
                                                                        fileName: "[project]/src/app/media/page.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/media/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/media/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-wrap gap-2",
                                        children: campaign.sourceLinks.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: source.href,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-200 transition hover:border-museum.accent/40 hover:text-white",
                                                children: source.label
                                            }, source.href, false, {
                                                fileName: "[project]/src/app/media/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/media/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, campaign.id, true, {
                                fileName: "[project]/src/app/media/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/media/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/media/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/media/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/media/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/media/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f6930af._.js.map