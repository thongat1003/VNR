import type { Locale } from '@/i18n/config';

export function getHomeCopy(locale: Locale) {
  if (locale === 'en') {
    return {
      hero: {
        wordBadge: 'Sourced from the Word archive',
        eyebrow: 'Virtual Exhibition / Digital Museum',
        title: 'A 3D historical museum on the life and legacy of General Secretary Le Duan',
        description:
          'The Le Duan Digital Museum brings together history and technology in one immersive web experience. The project digitizes archival documents, photographs, and artifacts about his life, leadership, and long historical legacy. Visitors can move through a detailed timeline, examine artifacts, open archival popups, and explore five thematic galleries from his homeland and youth to his post-war legacy.',
        primaryCta: 'Enter the 3D museum',
        secondaryCta: 'View historical photos and video',
        imageAlt: 'Introductory poster of General Secretary Le Duan on the homepage',
        stats: [
          { label: 'main exhibition galleries' },
          { label: 'exhibits currently staged in the interface' },
          { label: 'active media clusters in the archive' }
        ]
      },
      timelinePreview: {
        eyebrow: 'Timeline',
        title: 'Suggested milestones to expand into a richer visual chronology',
        description:
          'Each milestone can connect back to 3D artifacts, photos, videos, excerpts, and contextual maps.',
        roomLabel: 'Gallery',
        viewAllLabel: 'View the full timeline →'
      }
    };
  }

  return {
    hero: {
      wordBadge: 'Đã ghép tư liệu từ file Word',
      eyebrow: 'Triển lãm ảo / Digital Museum',
      title: 'Bảo tàng lịch sử 3D về cuộc đời và sự nghiệp của Tổng Bí thư Lê Duẩn',
      description:
        'Bảo tàng số Lê Duẩn là nơi lịch sử và công nghệ hội tụ. Dự án số hóa toàn diện nhiều tài liệu, hình ảnh và hiện vật gốc về cuộc đời, tư duy lãnh đạo và dấu ấn lịch sử của ông. Người xem có thể khám phá dòng thời gian chi tiết, tương tác với hiện vật, mở các lớp tư liệu và đi qua năm phòng trưng bày chuyên đề từ Quê hương & Tuổi trẻ đến Di sản & Đổi mới.',
      primaryCta: 'Vào không gian 3D',
      secondaryCta: 'Xem ảnh và video tư liệu',
      imageAlt: 'Poster Tổng Bí thư Lê Duẩn ở phần mở đầu trang chủ',
      stats: [
        { label: 'phòng trưng bày chính' },
        { label: 'hiện vật đang ghép vào giao diện' },
        { label: 'cụm media đang hoạt động' }
      ]
    },
    timelinePreview: {
      eyebrow: 'Timeline',
      title: 'Các mốc gợi ý để mở rộng thành dòng thời gian trực quan',
      description:
        'Mỗi mốc có thể liên kết ngược lại hiện vật 3D, ảnh, video, trích đoạn và bản đồ tương ứng.',
      roomLabel: 'Không gian',
      viewAllLabel: 'Xem toàn bộ timeline →'
    }
  };
}

export function getTimelinePageCopy(locale: Locale) {
  if (locale === 'en') {
    return {
      eyebrow: 'Timeline',
      title: 'A fuller chronology of life, strategy, and decisive historical turning points',
      description:
        'Each milestone is connected to deeper interpretation, archival imagery, and verified references that can feed directly into the 3D museum and media archive.',
      roomLabel: 'Linked gallery'
    };
  }

  return {
    eyebrow: 'Timeline',
    title: 'Dòng thời gian đầy đủ hơn về cuộc đời, chiến lược và các bước ngoặt lịch sử',
    description:
      'Mỗi mốc đều có lớp diễn giải sâu hơn, ảnh tư liệu và nguồn kiểm chứng để nối trực tiếp với bảo tàng 3D và kho tư liệu.',
    roomLabel: 'Không gian liên kết'
  };
}

export function getMuseumPageCopy(locale: Locale) {
  if (locale === 'en') {
    return {
      eyebrow: '3D Museum',
      title: 'An interactive virtual gallery ready to explore',
      postcardCta: 'Open the MP4 postcard',
      quote:
        '"His clarity of judgement stood out most clearly at historical turning points and in moments of complex challenge."',
      quoteCredit: 'Excerpt from Truong Chinh’s memorial tribute',
      paragraphs: [
        'Across 79 years of life, nearly 60 years of uninterrupted revolutionary activity, and 26 years in the Party’s highest leadership positions, Le Duan embodied the revolutionary intellect and historical-cultural values of modern Vietnam.',
        'This 3D museum is a digital memorial project designed to preserve the image of a steadfast communist, an outstanding leader, and a historical legacy for future generations.'
      ]
    };
  }

  return {
    eyebrow: 'Bảo tàng 3D',
    title: 'Không gian trưng bày ảo có thể tương tác ngay',
    postcardCta: 'Mở postcard MP4',
    quote:
      '"Sự sáng suốt của đồng chí thể hiện nổi bật trước bước ngoặt của lịch sử và những tình huống phức tạp."',
    quoteCredit: 'Trích Điếu văn của Tổng Bí thư Trường Chinh',
    paragraphs: [
      'Với 79 tuổi đời, gần 60 năm hoạt động cách mạng liên tục và 26 năm đảm nhận cương vị Bí thư Thứ nhất, Tổng Bí thư, đồng chí Lê Duẩn thực sự là kết tinh của trí tuệ cách mạng và giá trị lịch sử - văn hóa Việt Nam.',
      'Dự án Bảo tàng 3D này là một nỗ lực số hóa nhằm tri ân và lưu giữ mãi mãi hình ảnh một người cộng sản kiên trung, một nhà lãnh đạo kiệt xuất cho muôn đời sau.'
    ]
  };
}

export function getMediaPageCopy(locale: Locale) {
  if (locale === 'en') {
    return {
      archiveHeading: {
        eyebrow: 'Archive',
        title: 'Image sets and storyboards for decisive historical campaigns'
      },
      statLabels: {
        images: 'Image sets',
        videos: 'Video modules',
        core: 'Core assets'
      },
      priority: {
        core: 'core',
        support: 'support'
      },
      category: {
        image: 'image',
        video: 'video'
      },
      historicalContextLabel: 'Historical context',
      campaignHeading: {
        eyebrow: 'Campaigns',
        title: 'Detailed storyboards for campaigns and turning points'
      },
      historicalDetailLabel: 'Historical detail',
      leDuanRoleLabel: 'Le Duan’s role in the narrative'
    };
  }

  return {
    archiveHeading: {
      eyebrow: 'Tư liệu',
      title: 'Kho ảnh và storyboard cho các trận đánh, bước ngoặt lịch sử'
    },
    statLabels: {
      images: 'Bộ ảnh',
      videos: 'Module video',
      core: 'Ưu tiên cốt lõi'
    },
    priority: {
      core: 'cốt lõi',
      support: 'bổ trợ'
    },
    category: {
      image: 'ảnh',
      video: 'video'
    },
    historicalContextLabel: 'Bối cảnh lịch sử',
    campaignHeading: {
      eyebrow: 'Chiến dịch',
      title: 'Storyboard chi tiết cho các trận đánh và bước ngoặt lịch sử'
    },
    historicalDetailLabel: 'Chi tiết lịch sử',
    leDuanRoleLabel: 'Vai trò trong tuyến kể chuyện về Lê Duẩn'
  };
}

export function getPostcardPageCopy(locale: Locale) {
  if (locale === 'en') {
    return {
      title: 'Postcard Video',
      description: 'MP4 postcard playback page for the Le Duan Digital Museum project.',
      eyebrow: 'Postcard',
      backLabel: 'Back to the museum',
      downloadLabel: 'Download MP4',
      unsupportedMessage: 'Your browser does not support the video tag.'
    };
  }

  return {
    title: 'Video Postcard',
    description: 'Trang phát MP4 postcard cho dự án Bảo tàng số Lê Duẩn.',
    eyebrow: 'Postcard',
    backLabel: 'Về bảo tàng',
    downloadLabel: 'Tải MP4',
    unsupportedMessage: 'Trình duyệt của bạn không hỗ trợ thẻ video.'
  };
}

export function getAboutPageCopy(locale: Locale) {
  if (locale === 'en') {
    return {
      hero: {
        eyebrow: 'Project overview',
        badge: 'Museum without walls',
        title: 'The 3D digital museum of General Secretary Le Duan',
        subtitle: '"A strategic architect of the Vietnamese revolution - a life devoted to national liberation"',
        paragraphs: [
          'General Secretary Le Duan (1907 - 1986), born Le Van Nhuan, came from Trieu Phong district in Quang Tri province, a homeland rich in patriotic tradition. He became one of the most influential leaders in modern Vietnamese history.',
          'As one of the earliest Party members and an outstanding disciple of President Ho Chi Minh, he devoted nearly 60 years to uninterrupted revolutionary activity and 26 years to the Party’s top leadership. His life was dedicated to national independence, reunification, and the well-being of the people.'
        ],
        ctas: {
          museum: 'Start the 3D museum tour',
          timeline: 'View the full timeline',
          media: 'Explore the image and video archive'
        },
        keyFigures: [
          { label: 'Birth - death', value: '1907 - 1986' },
          { label: 'Revolutionary activity', value: 'Nearly 60 years' },
          { label: 'Top leadership', value: '26 years' }
        ],
        portraitAlt: 'Portrait of General Secretary Le Duan',
        portraitTag: 'Central figure',
        portraitName: 'General Secretary Le Duan',
        sideCardEyebrow: 'Featured archive',
        sideCardTitle: 'Photograph beside President Ho Chi Minh at the 3rd National Party Congress in 1960'
      },
      leadership: {
        quote:
          '"His lucidity stood out most sharply at moments of historical transition and under highly complex circumstances."',
        credit: 'Excerpt from Truong Chinh’s memorial tribute',
        eyebrow: '1. The stature of an exceptional leader',
        title: 'A major historical figure with a strategic vision running through modern Vietnamese history',
        description:
          'Le Duan’s life and political career were inseparable from the most decisive phases of the Vietnamese revolution, from national liberation to reconstruction after peace.',
        paragraphs: [
          'From the patriotic land of Trieu Phong, Le Duan entered revolutionary life with the conviction of a steadfast communist. He later became one of the leaders with the deepest influence on Vietnam’s twentieth-century development.',
          'His name is linked to strong political resolve, strategic thinking, and the ability to make decisions at historical turning points. That is also why this digital museum has been conceived as a space of remembrance, study, and inspiration.'
        ]
      },
      marks: {
        eyebrow: '2. Major historical milestones',
        title: 'Four defining marks that shaped the stature of Le Duan',
        description:
          'His revolutionary journey crossed the most difficult and heroic chapters of Vietnamese history, from colonial prisons to national reunification and a lasting intellectual legacy.',
        items: [
          {
            id: 'prison',
            title: 'Steel resolve in prison',
            summary:
              'Arrested and imprisoned many times by the French colonial regime, he endured nearly fifteen years in prisons such as Hoa Lo, Son La, and Con Dao while turning prison into a school of revolutionary will and theory.'
          },
          {
            id: 'south',
            title: 'A beacon for the southern revolution',
            summary:
              'After the 1954 Geneva Accords, he remained deeply connected with the South. The 1956 Outline of the Southern Revolution opened an inevitable path of struggle that laid the groundwork for the Dong Khoi movement and the liberation war.'
          },
          {
            id: 'spring',
            title: 'The "architect" of the 1975 Spring Victory',
            summary:
              'As First Secretary, he and the Politburo built the northern rear base while shaping the strategy for liberation in the South, culminating in the historic order for a rapid, bold offensive and the complete victory of April 30, 1975.'
          },
          {
            id: 'legacy',
            title: 'A lasting intellectual legacy',
            summary:
              'Beyond military and political strategy, Le Duan left an important body of thought on collective mastery, on the relationship between the Party, the State, and the people, and on questions that remained relevant in later renewal.'
          }
        ]
      },
      project: {
        eyebrow: '3. About the 3D Digital Museum',
        title: 'History and technology converge inside a museum without walls',
        description:
          'The Le Duan Digital Museum is conceived as an effort to honor and preserve his legacy online, where visitors can move beyond the limits of time and space.',
        tag: 'A red address in digital space',
        paragraphs: [
          'Built on an interactive 3D web platform with React Three Fiber and Next.js, the project digitizes archival artifacts, photographs, videos, and key historical texts into one accessible commemorative environment.',
          'The museum is not only a place to revisit a major leader but also an educational space that inspires patriotism, resilience, and strategic thinking for younger generations.'
        ],
        features: [
          {
            id: 'spaces',
            title: 'Five thematic galleries',
            detail:
              'Homeland & Youth, Revolutionary Activity, Anti-French Resistance, the "Architect of Reunification", and Legacy & Renewal.'
          },
          {
            id: 'timeline',
            title: 'A detailed 1907 - 1986 timeline',
            detail:
              'Follow the major milestones, political responsibilities, and turning points in Le Duan’s life through a visual chronology.'
          },
          {
            id: 'artifacts',
            title: '3D artifacts and digitized sources',
            detail:
              'From maps of Quang Tri and prison records to radios of the resistance years and facsimiles of the Outline of the Southern Revolution.'
          }
        ],
        cards: {
          museumEyebrow: 'Call to action',
          museumTitle: 'Start the 3D museum tour',
          museumAction: 'Open the museum',
          timelineEyebrow: 'Navigation',
          timelineTitle: 'View the full timeline',
          timelineAction: 'Open the timeline',
          mediaEyebrow: 'Archive',
          mediaTitle: 'Explore the image and video archive',
          mediaAction: 'Open the archive'
        }
      }
    };
  }

  return {
    hero: {
      eyebrow: 'Giới thiệu dự án',
      badge: 'Lớp học không tường',
      title: 'Bảo tàng số 3D Tổng Bí thư Lê Duẩn',
      subtitle: '“Kiến trúc sư chiến lược của cách mạng Việt Nam - Trọn đời vì sự nghiệp giải phóng dân tộc”',
      paragraphs: [
        'Tổng Bí thư Lê Duẩn (1907 - 1986), tên khai sinh là Lê Văn Nhuận, sinh ra tại huyện Triệu Phong, tỉnh Quảng Trị - miền quê giàu truyền thống yêu nước. Ông là một trong những nhà lãnh đạo có tầm vóc và ảnh hưởng sâu sắc nhất trong lịch sử Việt Nam hiện đại.',
        'Thuộc lớp đảng viên đầu tiên của Đảng và là người học trò xuất sắc của Chủ tịch Hồ Chí Minh, cuộc đời ông là một bản anh hùng ca lớn. Với gần 60 năm hoạt động cách mạng liên tục và 26 năm giữ cương vị Bí thư Thứ nhất, Tổng Bí thư, ông đã cống hiến trọn đời cho độc lập dân tộc, thống nhất Tổ quốc và hạnh phúc của nhân dân.'
      ],
      ctas: {
        museum: 'Bắt đầu tham quan Không gian 3D',
        timeline: 'Xem toàn bộ Timeline',
        media: 'Khám phá Kho Ảnh & Video'
      },
      keyFigures: [
        { label: 'Năm sinh - mất', value: '1907 - 1986' },
        { label: 'Hoạt động cách mạng', value: 'Gần 60 năm' },
        { label: 'Giữ cương vị lãnh đạo', value: '26 năm' }
      ],
      portraitAlt: 'Tổng Bí thư Lê Duẩn',
      portraitTag: 'Nhân vật trung tâm',
      portraitName: 'Tổng Bí thư Lê Duẩn',
      sideCardEyebrow: 'Tư liệu tiêu biểu',
      sideCardTitle: 'Hình ảnh bên Chủ tịch Hồ Chí Minh tại Đại hội III năm 1960'
    },
    leadership: {
      quote:
        '"Sự sáng suốt của đồng chí thể hiện nổi bật trước bước ngoặt của lịch sử và những tình huống phức tạp."',
      credit: 'Trích Điếu văn của Tổng Bí thư Trường Chinh',
      eyebrow: '1. Tầm vóc một nhà lãnh đạo kiệt xuất',
      title: 'Một nhân cách lớn, một tầm nhìn chiến lược xuyên suốt lịch sử hiện đại Việt Nam',
      description:
        'Cuộc đời và sự nghiệp của đồng chí Lê Duẩn gắn liền với những chặng đường trọng yếu nhất của cách mạng Việt Nam, từ đấu tranh giải phóng dân tộc đến xây dựng đất nước sau hòa bình.',
      paragraphs: [
        'Từ miền quê Triệu Phong giàu truyền thống yêu nước, đồng chí Lê Duẩn bước vào con đường cách mạng với khí chất của một người cộng sản kiên trung. Ông trở thành một trong những nhà lãnh đạo có ảnh hưởng sâu rộng nhất đến tiến trình phát triển của đất nước trong thế kỷ XX.',
        'Trong lịch sử Việt Nam hiện đại, tên tuổi Lê Duẩn gắn với bản lĩnh chính trị vững vàng, tư duy chiến lược sắc bén và khả năng đưa ra quyết sách ở những thời điểm bước ngoặt. Đó cũng là lý do bảo tàng số này được xây dựng như một không gian tri ân, học tập và truyền cảm hứng.'
      ]
    },
    marks: {
      eyebrow: '2. Những dấu ấn lịch sử vĩ đại',
      title: 'Bốn dấu ấn cốt lõi làm nên tầm vóc của Tổng Bí thư Lê Duẩn',
      description:
        'Hành trình cách mạng của ông gắn liền với những giai đoạn cam go và hào hùng nhất của dân tộc, từ lao tù thực dân đến đại thắng thống nhất đất nước và di sản tư tưởng để lại cho hôm nay.',
      items: [
        {
          id: 'prison',
          title: 'Ý chí gang thép trong chốn lao tù',
          summary:
            'Bị thực dân Pháp bắt giam nhiều lần và đày qua Hỏa Lò, Sơn La, Côn Đảo với tổng thời gian gần 15 năm, đồng chí Lê Duẩn không hề khuất phục mà cùng đồng chí biến nhà tù thành trường học cách mạng để rèn ý chí và lý luận.'
        },
        {
          id: 'south',
          title: 'Ngọn hải đăng của Cách mạng miền Nam',
          summary:
            'Sau Hiệp định Genève 1954, ông bám trụ lại miền Nam trong lòng nhân dân. Bản Đề cương cách mạng miền Nam năm 1956 đã mở ra con đường đấu tranh tất yếu, đặt nền cho phong trào Đồng khởi và cuộc kháng chiến giải phóng.'
        },
        {
          id: 'spring',
          title: '“Kiến trúc sư” của Đại thắng mùa Xuân 1975',
          summary:
            'Trên cương vị Bí thư Thứ nhất, ông cùng Bộ Chính trị vừa xây dựng hậu phương miền Bắc vừa hoạch định chiến lược giải phóng miền Nam, đi tới mệnh lệnh lịch sử “Thần tốc, táo bạo” và thắng lợi trọn vẹn ngày 30/4/1975.'
        },
        {
          id: 'legacy',
          title: 'Di sản tư tưởng lớn',
          summary:
            'Không chỉ là nhà chiến lược quân sự, chính trị, Lê Duẩn còn để lại hệ thống tư tưởng quan trọng về quyền làm chủ tập thể, về mối quan hệ giữa Đảng, Nhà nước và nhân dân, vẫn còn giá trị trong công cuộc đổi mới.'
        }
      ]
    },
    project: {
      eyebrow: '3. Về dự án Bảo tàng số 3D Lê Duẩn',
      title: 'Lịch sử và công nghệ hội tụ trong một lớp học không tường',
      description:
        'Bảo tàng số Lê Duẩn ra đời như một nỗ lực tri ân và gìn giữ di sản của Tổng Bí thư Lê Duẩn trên không gian mạng, nơi người xem có thể vượt qua giới hạn không gian và thời gian để tự do khám phá.',
      tag: 'Địa chỉ đỏ trên không gian số',
      paragraphs: [
        'Sử dụng nền tảng web tương tác 3D với React Three Fiber và Next.js, dự án số hóa toàn diện kho hiện vật, ảnh tư liệu, video và bút tích lịch sử, tạo thành một không gian tưởng niệm sống động và dễ tiếp cận.',
        'Bảo tàng số không chỉ là nơi nhìn lại một nhân cách lớn, mà còn là không gian giáo dục truyền cảm hứng về lòng yêu nước, ý chí tự lực tự cường và tư duy sáng tạo cho các thế hệ Việt Nam hôm nay và mai sau.'
      ],
      features: [
        {
          id: 'spaces',
          title: '5 không gian trưng bày chuyên đề',
          detail:
            'Quê hương & Tuổi trẻ, Hoạt động Cách mạng, Kháng chiến chống Pháp, “Kiến trúc sư” Thống nhất và Di sản & Đổi mới.'
        },
        {
          id: 'timeline',
          title: 'Timeline chi tiết 1907 - 1986',
          detail:
            'Theo dõi trọn vẹn cuộc đời, sự nghiệp và các bước ngoặt lớn của Tổng Bí thư Lê Duẩn theo dòng thời gian trực quan.'
        },
        {
          id: 'artifacts',
          title: 'Hiện vật 3D và tư liệu số hóa',
          detail:
            'Từ bản đồ quê hương Quảng Trị, hồ sơ nhà tù, đài radio kháng chiến đến bản phục chế Đề cương Cách mạng miền Nam.'
        }
      ],
      cards: {
        museumEyebrow: 'Call to action',
        museumTitle: 'Bắt đầu tham quan Không gian 3D',
        museumAction: 'Mở bảo tàng',
        timelineEyebrow: 'Điều hướng',
        timelineTitle: 'Xem toàn bộ Dòng thời gian',
        timelineAction: 'Mở timeline',
        mediaEyebrow: 'Tư liệu',
        mediaTitle: 'Khám phá Kho Ảnh & Video Tư liệu',
        mediaAction: 'Mở kho tư liệu'
      }
    }
  };
}

export function getTechnologyPageCopy(locale: Locale) {
  if (locale === 'en') {
    return {
      hero: {
        eyebrow: 'Technology',
        title: 'Technologies used in this website',
        description:
          'This page summarizes the real stack used to build the Le Duan digital museum, along with a short AI appendix drawn from the working chat with Codex.',
        sectionLinks: {
          stack: 'View the stack',
          ai: 'Open the AI appendix'
        },
        highlights: [
          { label: 'Framework', value: 'Next.js 16 / React 19' },
          { label: '3D web', value: 'Three.js / React Three Fiber' },
          { label: 'AI support', value: 'Codex' }
        ]
      },
      stack: {
        eyebrow: 'Stack',
        title: 'Core technologies used to build the project',
        description: 'These are the main tools directly reflected in the current package and codebase.',
        items: [
          {
            id: 'app',
            title: 'Next.js 16 + React 19',
            detail: 'Used for the App Router structure, localized routes, server and client rendering, and production builds.'
          },
          {
            id: 'three',
            title: 'Three.js + React Three Fiber + Drei',
            detail: 'Powers the 3D museum scene, exhibit presentation, and spatial interaction inside the virtual gallery.'
          },
          {
            id: 'style',
            title: 'TypeScript 5 + Tailwind CSS 4',
            detail: 'Keeps the code typed and maintainable while making interface work faster and more consistent.'
          },
          {
            id: 'tooling',
            title: 'Lucide React + clsx',
            detail: 'Supports iconography and flexible UI state styling across shared components and feature pages.'
          }
        ]
      },
      ai: {
        eyebrow: 'AI Appendix',
        title: 'AI used during the web build process',
        description: 'A short summary based on the current working chat with Codex in this repository.',
        assistants: [
          {
            id: 'codex',
            title: 'Codex',
            summary: 'Used to build and adjust the website directly in the codebase.',
            notes: [
              'Implemented UI and content updates requested during the working session.',
              'Adjusted the footer content and refined the timeline image viewer behavior.',
              'Added the new Technology page and integrated it into the navigation.'
            ]
          },
          {
            id: 'other',
            title: 'Other AI tools',
            summary: 'No other AI tool has been explicitly confirmed in the current chat.',
            notes: ['This section can be extended later if the project uses more AI tools for content, design, or research.']
          }
        ],
        promptsTitle: 'Primary build prompt',
        prompts: [
          `Prompt: Xây dựng Bảo tàng 3D Kỹ thuật số - Chuyên đề: Lê Duẩn - Nhà lãnh đạo kiệt xuất
1. Mục tiêu và Phong cách:
Tạo một không gian bảo tàng 3D tương tác, hiện đại nhưng trang nghiêm, tái hiện cuộc đời và sự nghiệp của Tổng Bí thư Lê Duẩn trong bối cảnh lịch sử Việt Nam thế kỷ 20.

Phong cách kiến trúc: Kết hợp giữa kiến trúc bảo tàng truyền thống Việt Nam (mái ngói, cột gỗ - cách tân) và công nghệ trình chiếu kỹ thuật số hiện đại.

Ánh sáng: Ấm áp, tập trung vào các hiện vật và khu vực trưng bày, tạo cảm giác thiêng liêng và hoài niệm.

Âm thanh: Nhạc nền nhẹ nhàng, không lời (ví dụ: giai điệu các bài hát cách mạng được hòa tấu), kết hợp với âm thanh tái hiện (tiếng pháo, tiếng máy bay b52 - ở âm lượng thấp, trong các khu vực cụ thể).

2. Cấu trúc các Không gian Trưng bày:

Sảnh chính (Entrance Hall):

Tâm điểm: Một bức tượng bán thân Lê Duẩn bằng đồng lớn, trang nghiêm.

Vách tường chính: Dòng chữ lớn "LÊ DUẨN - NHÀ LÃNH ĐẠO KIỆT XUẤT CỦA CÁCH MẠNG VIỆT NAM".

Giới thiệu: Một bảng giới thiệu tóm tắt bằng văn bản và một video ngắn (giả lập) giới thiệu tổng quan về bảo tàng.

Khu vực 1: Tiểu sử và Tuổi trẻ (Biography & Youth):

Nội dung: Thời niên thiếu tại Quảng Trị, quá trình giác ngộ cách mạng, hoạt động trong các tổ chức cộng sản ban đầu.

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Tái hiện ngôi nhà quê hương của Lê Duẩn ở Quảng Trị.

Hình ảnh mô phỏng Lê Duẩn thời trẻ đang đọc sách hoặc hoạt động bí mật.

Đạo cụ: Sách, tài liệu mật, bút mực, bản đồ hành chính thời Pháp thuộc.

Khu vực 2: Kháng chiến chống Pháp và Vai trò ở Miền Nam (Resistance against French & Southern Leader):

Nội dung: Hoạt động tại Xứ ủy Nam Bộ, lãnh đạo cuộc kháng chiến ở Miền Nam, bản "Đề cương cách mạng miền Nam".

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Cảnh Lê Duẩn họp với các đồng chí trong rừng đước Nam Bộ.

Hình ảnh mô phỏng ông đang viết bản "Đề cương cách mạng miền Nam" dưới ánh đèn dầu.

Trận chiến: Trưng bày thông tin và hình ảnh (giả lập) về một số trận đánh tiêu biểu ở Nam Bộ giai đoạn này.

Đạo cụ: Đèn dầu, sổ tay, bản đồ quân sự, radio cũ.

Khu vực 3: Lãnh đạo Đất nước trong Kháng chiến chống Mỹ (Leadership during the Anti-American War):

Nội dung: Giai đoạn làm Tổng Bí thư, chiến lược "Hai ngọn cờ", đường lối kháng chiến chống Mỹ, cứu nước.

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Chân dung Lê Duẩn trang nghiêm trong trang phục áo đại tướng hoặc áo sơ mi trắng, đang phát biểu tại hội nghị.

Cảnh ông đang thảo luận với các vị lãnh đạo khác như Hồ Chí Minh, Võ Nguyên Giáp.

Trận chiến (Khu vực chuyên biệt):

Mô phỏng 3D: Một sa bàn 3D tương tác mô phỏng Chiến dịch Đường 9 - Nam Lào hoặc Chiến dịch Điện Biên Phủ trên không.

Hình ảnh: Ảnh chụp tái hiện sự khốc liệt của chiến tranh, sự kiên cường của quân và dân ta.

Đạo cụ:

Chiến tranh: Nón cối, quân phục, súng AK-47, bản đồ quân sự chi tiết, mô hình xe tăng, máy bay.

Lê Duẩn: Bút ký, kính mắt, đồng hồ đeo tay.

Khu vực 4: Giải phóng Miền Nam và Thống nhất Đất nước (Liberation of the South & Reunification):

Nội dung: Cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975, vai trò lãnh đạo trong chiến dịch Hồ Chí Minh, khoảnh khắc thống nhất.

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Xe tăng húc đổ cổng Dinh Độc Lập (tái hiện).

Lê Duẩn phát biểu tại mít tinh mừng chiến thắng.

Đạo cụ: Lá cờ Mặt trận Dân tộc Giải phóng Miền Nam Việt Nam, Huân chương, các kỷ vật chiến tranh.

Khu vực 5: Những Đạo cụ Chiến tranh & Hiện vật Liên quan (War Artifacts & Related Objects):

Nội dung: Một gian phòng lớn trưng bày các loại vũ khí, trang thiết bị quân sự đã được sử dụng trong cả hai cuộc kháng chiến.

Hiện vật: Súng cá nhân, lựu đạn, mô hình pháo, mô hình máy bay (như MiG-21), trang phục của quân nhân, trang bị thông tin.

Lưu ý: Cần có mô tả chi tiết cho từng loại hiện vật.

3. Tương tác và Công nghệ:

Dẫn tour tự động: Có một hướng dẫn viên ảo (avatar) dẫn người xem đi qua các khu vực.

Tương tác 3D: Người xem có thể xoay, phóng to các đạo cụ để xem chi tiết.

Bảng thông tin: Khi di chuột vào một hiện vật hoặc hình ảnh, một bảng thông tin chi tiết sẽ hiện ra.

Gobot 4.6.1 Integration (Khu vực Trải nghiệm Công nghệ):

Mô tả: Một góc nhỏ trong bảo tàng (ví dụ: trong Khu vực 5 hoặc một phòng riêng) giới thiệu về ứng dụng công nghệ trong bảo tàng.

Nội dung: Trưng bày một mô hình 3D của Gobot 4.6.1.

Tương tác: Cho phép người dùng tương tác đơn giản với Gobot 4.6.1 (ví dụ: điều khiển nó di chuyển ngắn, hiển thị một số thông tin kỹ thuật của bot).

Văn bản: Bảng thông tin giải thích vai trò của Gobot 4.6.1 trong việc thu thập dữ liệu, tạo mô hình 3D cho bảo tàng, hoặc thậm chí là làm hướng dẫn viên ảo.`
        ]
      }
    };
  }

  return {
    hero: {
      eyebrow: 'Công nghệ',
      title: 'Công nghệ được sử dụng',
      description:
        'Trang này tổng hợp stack thực tế đang dùng để dựng website Bảo tàng số Lê Duẩn, đồng thời thêm một phụ lục AI tóm tắt ngắn từ chính đoạn chat làm việc với Codex.',
      sectionLinks: {
        stack: 'Xem stack công nghệ',
        ai: 'Mở Phụ lục AI'
      },
      highlights: [
        { label: 'Framework', value: 'Next.js 16 / React 19' },
        { label: '3D web', value: 'Three.js / React Three Fiber' },
        { label: 'AI hỗ trợ', value: 'Codex' }
      ]
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Các công nghệ chính dùng để dựng dự án',
      description: 'Đây là các công nghệ xuất hiện trực tiếp trong package và codebase hiện tại.',
      items: [
        {
          id: 'app',
          title: 'Next.js 16 + React 19',
          detail: 'Dùng để tổ chức App Router, route đa ngôn ngữ, render server và client, đồng thời build toàn bộ website.'
        },
        {
          id: 'three',
          title: 'Three.js + React Three Fiber + Drei',
          detail: 'Phục vụ không gian bảo tàng 3D, vật thể trưng bày và các tương tác trong trải nghiệm tham quan ảo.'
        },
        {
          id: 'style',
          title: 'TypeScript 5 + Tailwind CSS 4',
          detail: 'Giữ code có kiểu dữ liệu rõ ràng và giúp triển khai giao diện nhanh, thống nhất với design system của dự án.'
        },
        {
          id: 'tooling',
          title: 'Lucide React + clsx',
          detail: 'Hỗ trợ icon và cách ghép class linh hoạt cho các trạng thái giao diện ở nhiều component dùng chung.'
        }
      ]
    },
    ai: {
      eyebrow: 'Phụ lục AI',
      title: 'AI được dùng trong quá trình dựng web',
      description: 'Phần này tóm tắt ngắn gọn từ chính đoạn chat làm việc với Codex trong repository hiện tại.',
      assistants: [
        {
          id: 'codex',
          title: 'Codex',
          summary: 'Được dùng để dựng web và chỉnh sửa trực tiếp trong codebase theo yêu cầu.',
          notes: [
            'Triển khai các thay đổi giao diện và nội dung ngay trên project.',
            'Sửa footer, bổ sung khả năng xem ảnh ở Timeline và tinh gọn chế độ chỉ xem ảnh.',
            'Thêm trang Công nghệ và đưa route mới vào thanh điều hướng.'
          ]
        },
        {
          id: 'other',
          title: 'AI khác',
          summary: 'Hiện chưa có công cụ AI nào khác được xác nhận trực tiếp trong đoạn chat này.',
          notes: ['Nếu dự án dùng thêm AI khác sau này thì có thể bổ sung tiếp vào mục này.']
        }
      ],
      promptsTitle: 'Prompt gốc dùng để dựng web',
      prompts: [
        `Prompt: Xây dựng Bảo tàng 3D Kỹ thuật số - Chuyên đề: Lê Duẩn - Nhà lãnh đạo kiệt xuất
1. Mục tiêu và Phong cách:
Tạo một không gian bảo tàng 3D tương tác, hiện đại nhưng trang nghiêm, tái hiện cuộc đời và sự nghiệp của Tổng Bí thư Lê Duẩn trong bối cảnh lịch sử Việt Nam thế kỷ 20.

Phong cách kiến trúc: Kết hợp giữa kiến trúc bảo tàng truyền thống Việt Nam (mái ngói, cột gỗ - cách tân) và công nghệ trình chiếu kỹ thuật số hiện đại.

Ánh sáng: Ấm áp, tập trung vào các hiện vật và khu vực trưng bày, tạo cảm giác thiêng liêng và hoài niệm.

Âm thanh: Nhạc nền nhẹ nhàng, không lời (ví dụ: giai điệu các bài hát cách mạng được hòa tấu), kết hợp với âm thanh tái hiện (tiếng pháo, tiếng máy bay b52 - ở âm lượng thấp, trong các khu vực cụ thể).

2. Cấu trúc các Không gian Trưng bày:

Sảnh chính (Entrance Hall):

Tâm điểm: Một bức tượng bán thân Lê Duẩn bằng đồng lớn, trang nghiêm.

Vách tường chính: Dòng chữ lớn "LÊ DUẨN - NHÀ LÃNH ĐẠO KIỆT XUẤT CỦA CÁCH MẠNG VIỆT NAM".

Giới thiệu: Một bảng giới thiệu tóm tắt bằng văn bản và một video ngắn (giả lập) giới thiệu tổng quan về bảo tàng.

Khu vực 1: Tiểu sử và Tuổi trẻ (Biography & Youth):

Nội dung: Thời niên thiếu tại Quảng Trị, quá trình giác ngộ cách mạng, hoạt động trong các tổ chức cộng sản ban đầu.

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Tái hiện ngôi nhà quê hương của Lê Duẩn ở Quảng Trị.

Hình ảnh mô phỏng Lê Duẩn thời trẻ đang đọc sách hoặc hoạt động bí mật.

Đạo cụ: Sách, tài liệu mật, bút mực, bản đồ hành chính thời Pháp thuộc.

Khu vực 2: Kháng chiến chống Pháp và Vai trò ở Miền Nam (Resistance against French & Southern Leader):

Nội dung: Hoạt động tại Xứ ủy Nam Bộ, lãnh đạo cuộc kháng chiến ở Miền Nam, bản "Đề cương cách mạng miền Nam".

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Cảnh Lê Duẩn họp với các đồng chí trong rừng đước Nam Bộ.

Hình ảnh mô phỏng ông đang viết bản "Đề cương cách mạng miền Nam" dưới ánh đèn dầu.

Trận chiến: Trưng bày thông tin và hình ảnh (giả lập) về một số trận đánh tiêu biểu ở Nam Bộ giai đoạn này.

Đạo cụ: Đèn dầu, sổ tay, bản đồ quân sự, radio cũ.

Khu vực 3: Lãnh đạo Đất nước trong Kháng chiến chống Mỹ (Leadership during the Anti-American War):

Nội dung: Giai đoạn làm Tổng Bí thư, chiến lược "Hai ngọn cờ", đường lối kháng chiến chống Mỹ, cứu nước.

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Chân dung Lê Duẩn trang nghiêm trong trang phục áo đại tướng hoặc áo sơ mi trắng, đang phát biểu tại hội nghị.

Cảnh ông đang thảo luận với các vị lãnh đạo khác như Hồ Chí Minh, Võ Nguyên Giáp.

Trận chiến (Khu vực chuyên biệt):

Mô phỏng 3D: Một sa bàn 3D tương tác mô phỏng Chiến dịch Đường 9 - Nam Lào hoặc Chiến dịch Điện Biên Phủ trên không.

Hình ảnh: Ảnh chụp tái hiện sự khốc liệt của chiến tranh, sự kiên cường của quân và dân ta.

Đạo cụ:

Chiến tranh: Nón cối, quân phục, súng AK-47, bản đồ quân sự chi tiết, mô hình xe tăng, máy bay.

Lê Duẩn: Bút ký, kính mắt, đồng hồ đeo tay.

Khu vực 4: Giải phóng Miền Nam và Thống nhất Đất nước (Liberation of the South & Reunification):

Nội dung: Cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975, vai trò lãnh đạo trong chiến dịch Hồ Chí Minh, khoảnh khắc thống nhất.

Hình ảnh (Tạo prompt cho AI tạo ảnh):

Xe tăng húc đổ cổng Dinh Độc Lập (tái hiện).

Lê Duẩn phát biểu tại mít tinh mừng chiến thắng.

Đạo cụ: Lá cờ Mặt trận Dân tộc Giải phóng Miền Nam Việt Nam, Huân chương, các kỷ vật chiến tranh.

Khu vực 5: Những Đạo cụ Chiến tranh & Hiện vật Liên quan (War Artifacts & Related Objects):

Nội dung: Một gian phòng lớn trưng bày các loại vũ khí, trang thiết bị quân sự đã được sử dụng trong cả hai cuộc kháng chiến.

Hiện vật: Súng cá nhân, lựu đạn, mô hình pháo, mô hình máy bay (như MiG-21), trang phục của quân nhân, trang bị thông tin.

Lưu ý: Cần có mô tả chi tiết cho từng loại hiện vật.

3. Tương tác và Công nghệ:

Dẫn tour tự động: Có một hướng dẫn viên ảo (avatar) dẫn người xem đi qua các khu vực.

Tương tác 3D: Người xem có thể xoay, phóng to các đạo cụ để xem chi tiết.

Bảng thông tin: Khi di chuột vào một hiện vật hoặc hình ảnh, một bảng thông tin chi tiết sẽ hiện ra.

Gobot 4.6.1 Integration (Khu vực Trải nghiệm Công nghệ):

Mô tả: Một góc nhỏ trong bảo tàng (ví dụ: trong Khu vực 5 hoặc một phòng riêng) giới thiệu về ứng dụng công nghệ trong bảo tàng.

Nội dung: Trưng bày một mô hình 3D của Gobot 4.6.1.

Tương tác: Cho phép người dùng tương tác đơn giản với Gobot 4.6.1 (ví dụ: điều khiển nó di chuyển ngắn, hiển thị một số thông tin kỹ thuật của bot).

Văn bản: Bảng thông tin giải thích vai trò của Gobot 4.6.1 trong việc thu thập dữ liệu, tạo mô hình 3D cho bảo tàng, hoặc thậm chí là làm hướng dẫn viên ảo.`
      ]
    }
  };
}
