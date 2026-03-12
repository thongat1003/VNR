module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/app/about/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$VerifiedBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/VerifiedBadge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contentPlan$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/contentPlan.ts [app-rsc] (ecmascript)");
;
;
;
;
function AboutPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                eyebrow: "Giới thiệu",
                title: "Kế hoạch biên tập và triển khai toàn bộ ảnh, video, chiến dịch lịch sử",
                description: "Trang này tổng hợp nguyên tắc biên tập, checklist bản quyền và lộ trình sản xuất để bạn có thể đưa bộ ảnh/video thật về Lê Duẩn vào site theo từng giai đoạn rõ ràng."
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[2rem] border border-white/10 bg-museum.card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold text-white",
                                        children: "Nguyên tắc biên tập"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$VerifiedBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerifiedBadge"], {}, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-3 text-stone-300",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contentPlan$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["editorialPrinciples"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[2rem] border border-white/10 bg-museum.card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold text-white",
                                children: "Checklist bản quyền & xuất bản"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-3 text-stone-300",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contentPlan$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["licensingChecklist"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        eyebrow: "Lộ trình",
                        title: "4 giai đoạn để lên full nội dung ảnh và video",
                        description: "Nếu bạn đã có đầy đủ hình ảnh về Lê Duẩn, đây là trình tự nên làm để đưa toàn bộ lên site mà không bị rối phần dữ liệu, bản quyền và kể chuyện lịch sử."
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-6 xl:grid-cols-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contentPlan$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productionPhases"].map((phase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-[2rem] border border-white/10 bg-museum.card p-6 shadow-museum",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-museum.accent/20 bg-museum.accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-museum.accent",
                                            children: phase.timeframe
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-4 text-2xl font-semibold text-white",
                                        children: phase.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-7 text-stone-300",
                                        children: phase.objective
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 rounded-2xl border border-white/10 bg-black/20 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3 text-xs uppercase tracking-[0.22em] text-stone-400",
                                                children: "Deliverables"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-sm leading-7 text-stone-300",
                                                children: phase.deliverables.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "• ",
                                                            item
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/about/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8cad670c._.js.map