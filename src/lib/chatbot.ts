import { getAboutPageCopy, getHomeCopy, getMuseumPageCopy, getTechnologyPageCopy } from '@/i18n/copy';
import type { Locale } from '@/i18n/config';
import { getCampaignPlans, getExhibits, getHomeStats, getMediaAssets, getTimelineEvents } from '@/i18n/data';
import { getRoutes, localizeHref, stripLocaleFromPath } from '@/i18n/routing';
import type { SourceLink } from '@/types';

type ChatbotLink = {
  label: string;
  href: string;
};

export type ChatbotReply = {
  answer: string;
  suggestions: string[];
  pages: ChatbotLink[];
  sources: ChatbotLink[];
};

export type ChatbotContextBundle = {
  fallbackReply: ChatbotReply;
  contextSummary: string;
};

type ChatDocument = {
  id: string;
  category: 'overview' | 'timeline' | 'exhibit' | 'media' | 'campaign' | 'assistant';
  title: string;
  summary: string;
  detail?: string;
  route: string;
  routeLabel: string;
  keywords: string[];
  sourceLinks: SourceLink[];
  priority: number;
};

type RankedDocument = ChatDocument & {
  score: number;
};

const responseCopy = {
  vi: {
    intro:
      'Tôi là trợ lý tham quan của Bảo tàng số Lê Duẩn. Bạn có thể hỏi về tiểu sử, các mốc lịch sử, hiện vật 3D, tư liệu ảnh/video hoặc cách khám phá từng mục trong website.',
    help:
      'Tôi có thể tóm tắt các mốc trong cuộc đời Lê Duẩn, giải thích vai trò ở từng giai đoạn lịch sử, gợi ý trang nên xem tiếp và đính kèm nguồn tham khảo khi dữ liệu hiện có hỗ trợ.',
    fallback:
      'Tôi chưa tìm được câu trả lời đủ sát trong dữ liệu hiện có của bảo tàng. Bạn thử hỏi rõ hơn về một mốc như 1907, 1956, 1960, 1968, 1975 hoặc hỏi về timeline, bảo tàng 3D, tư liệu, công nghệ.',
    sourceHint: 'Tôi đã đính kèm một số nguồn tham khảo ngay bên dưới.',
    relatedPrefix: 'Liên quan thêm:',
    pageFallback: ['/timeline', '/museum'],
    suggestions: [
      'Lê Duẩn sinh năm nào?',
      'Bảo tàng 3D có gì?',
      'Vai trò của Lê Duẩn năm 1975 là gì?'
    ],
    labels: {
      birth: 'Sinh năm nào',
      museum: 'Bảo tàng có gì',
      spring1975: 'Vai trò năm 1975',
      timeline: 'Xem timeline',
      exhibits: 'Có hiện vật nào nổi bật?',
      media: 'Có tư liệu nào nổi bật?',
      tet: 'Tết Mậu Thân 1968',
      sources: 'Nguồn tham khảo',
      guide: 'Bạn giúp được gì?'
    }
  },
  en: {
    intro:
      'I am the Le Duan Digital Museum guide. You can ask about biography, key historical milestones, 3D exhibits, archival media, or where to explore each section of the site.',
    help:
      'I can summarize Le Duan’s life and major milestones, explain his role in specific periods, point you to the most relevant pages, and attach source links when the museum data includes them.',
    fallback:
      'I could not find a close enough answer in the current museum data. Try a more specific question about 1907, 1956, 1960, 1968, 1975, or ask about the timeline, 3D museum, media archive, or technology page.',
    sourceHint: 'I attached a few supporting sources below.',
    relatedPrefix: 'Related context:',
    pageFallback: ['/timeline', '/museum'],
    suggestions: ['When was Le Duan born?', 'What is in the 3D museum?', 'What was his role in 1975?'],
    labels: {
      birth: 'Birth and homeland',
      museum: 'What is in the museum?',
      spring1975: 'Role in 1975',
      timeline: 'Open timeline',
      exhibits: 'Notable exhibits',
      media: 'Notable archive items',
      tet: 'Tet Offensive 1968',
      sources: 'Sources',
      guide: 'What can you help with?'
    }
  }
} as const;

const stopwords = new Set([
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'ban',
  'bao',
  'be',
  'by',
  'cho',
  'co',
  'cua',
  'duoc',
  'for',
  'from',
  'gi',
  'giu',
  'go',
  'have',
  'how',
  'in',
  'is',
  'la',
  'lam',
  'mot',
  'nam',
  'nao',
  'nay',
  'nhung',
  'noi',
  'o',
  'on',
  'or',
  'of',
  'the',
  'to',
  'toi',
  'trong',
  'tu',
  've',
  'voi',
  'what',
  'when',
  'where',
  'which',
  'who',
  'why'
]);

const knowledgeCache = new Map<Locale, ChatDocument[]>();

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(value: string) {
  return normalizeText(value)
    .split(' ')
    .filter((token) => token.length > 1 && !stopwords.has(token));
}

function dedupeLinks(items: ChatbotLink[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.href)) {
      return false;
    }

    seen.add(item.href);
    return true;
  });
}

function getInitialSuggestions(locale: Locale) {
  return [...responseCopy[locale].suggestions];
}

function getRouteLabel(locale: Locale, path: string) {
  return getRoutes(locale).find((route) => stripLocaleFromPath(route.href) === path)?.label ?? path;
}

function getOverviewDocuments(locale: Locale): ChatDocument[] {
  const aboutCopy = getAboutPageCopy(locale);
  const homeCopy = getHomeCopy(locale);
  const museumCopy = getMuseumPageCopy(locale);
  const technologyCopy = getTechnologyPageCopy(locale);
  const [galleryCount, exhibitCount, mediaCount] = getHomeStats(locale);

  return [
    {
      id: 'assistant-guide',
      category: 'assistant',
      title: locale === 'vi' ? 'Trợ lý tham quan bảo tàng' : 'Museum guide assistant',
      summary: responseCopy[locale].intro,
      detail: responseCopy[locale].help,
      route: '/',
      routeLabel: getRouteLabel(locale, '/'),
      keywords:
        locale === 'vi'
          ? ['chatbot', 'tro ly', 'huong dan', 'ban giup duoc gi', 'giup', 'hoi dap']
          : ['chatbot', 'assistant', 'guide', 'help', 'what can you do', 'support'],
      sourceLinks: [],
      priority: 8
    },
    {
      id: 'overview-project',
      category: 'overview',
      title: locale === 'vi' ? 'Giới thiệu Bảo tàng số Lê Duẩn' : 'Le Duan Digital Museum overview',
      summary: homeCopy.hero.description,
      detail: aboutCopy.project.paragraphs.join(' '),
      route: '/about',
      routeLabel: getRouteLabel(locale, '/about'),
      keywords:
        locale === 'vi'
          ? ['gioi thieu', 'du an', 'website', 'bao tang so', 'tham quan', 'co gi', 'tong quan']
          : ['overview', 'project', 'website', 'digital museum', 'what is this site', 'about'],
      sourceLinks: [],
      priority: 7
    },
    {
      id: 'overview-biography',
      category: 'overview',
      title: locale === 'vi' ? 'Lê Duẩn là ai?' : 'Who was Le Duan?',
      summary: aboutCopy.hero.paragraphs.join(' '),
      detail:
        locale === 'vi'
          ? 'Ông sinh ngày 7/4/1907 tại Quảng Trị, tên khai sinh là Lê Văn Nhuận, hoạt động cách mạng gần 60 năm và giữ cương vị lãnh đạo cao nhất của Đảng trong 26 năm.'
          : 'He was born on April 7, 1907 in Quang Tri, was born Le Van Nhuan, spent nearly sixty years in revolutionary activity, and held the Party top leadership positions for twenty-six years.',
      route: '/about',
      routeLabel: getRouteLabel(locale, '/about'),
      keywords:
        locale === 'vi'
          ? ['le duan la ai', 'tieu su', 'ten khai sinh', 'que o dau', 'sinh nam nao', 'quang tri']
          : ['who was le duan', 'biography', 'birth', 'birthplace', 'full name', 'quang tri'],
      sourceLinks: [],
      priority: 8
    },
    {
      id: 'overview-museum',
      category: 'overview',
      title: locale === 'vi' ? 'Bảo tàng 3D có gì?' : 'What is in the 3D museum?',
      summary: museumCopy.paragraphs.join(' '),
      detail:
        locale === 'vi'
          ? `Hiện giao diện đang tổ chức ${galleryCount} không gian chính, ${exhibitCount} hiện vật và ${mediaCount} cụm media để người xem khám phá tiếp qua timeline, bảo tàng 3D và kho tư liệu.`
          : `The current interface organizes ${galleryCount} main galleries, ${exhibitCount} exhibits, and ${mediaCount} media clusters that connect across the timeline, 3D museum, and archive.`,
      route: '/museum',
      routeLabel: getRouteLabel(locale, '/museum'),
      keywords:
        locale === 'vi'
          ? ['bao tang 3d', 'co gi', 'trung bay', 'hien vat', 'tham quan', 'museum']
          : ['3d museum', 'what is in the museum', 'galleries', 'exhibits', 'visit', 'museum'],
      sourceLinks: [],
      priority: 7
    },
    {
      id: 'overview-technology',
      category: 'assistant',
      title: locale === 'vi' ? 'Trang công nghệ của dự án' : 'Technology page overview',
      summary: technologyCopy.hero.description,
      detail: technologyCopy.ai.description,
      route: '/technology',
      routeLabel: getRouteLabel(locale, '/technology'),
      keywords:
        locale === 'vi'
          ? ['cong nghe', 'stack', 'nextjs', 'react', 'ai', 'codex']
          : ['technology', 'stack', 'nextjs', 'react', 'ai', 'codex'],
      sourceLinks: [],
      priority: 4
    }
  ];
}

function getTimelineKeywords(locale: Locale, id: string) {
  const keywords: Record<string, string[]> = {
    'birth-1907':
      locale === 'vi'
        ? ['1907', 'sinh', 'ngay sinh', 'que huong', 'que o dau', 'quang tri', 'trieu phong', 'trieu thanh']
        : ['1907', 'born', 'birth date', 'birthplace', 'homeland', 'quang tri', 'trieu phong', 'trieu thanh'],
    'join-1928':
      locale === 'vi'
        ? ['1928', 'tham gia cach mang', 'tuoi tre', 'buoc vao con duong cach mang']
        : ['1928', 'entered revolutionary path', 'youth', 'early revolutionary activity'],
    'prison-1931':
      locale === 'vi'
        ? ['1931', 'bi bat', 'giam cam', 'hoa lo', 'son la', 'con dao', 'tu day']
        : ['1931', 'arrest', 'imprisonment', 'hoa lo', 'son la', 'con dao', 'prison'],
    'south-1946':
      locale === 'vi'
        ? ['1946', '1954', 'nam bo', 'mien nam', 'khang chien chong phap']
        : ['1946', '1954', 'south', 'southern battlefield', 'anti-french resistance'],
    'south-thesis-1956':
      locale === 'vi'
        ? ['1956', 'de cuong cach mang mien nam', 'mien nam', 'nghi quyet 15']
        : ['1956', 'southern revolution', 'outline of the southern revolution', 'resolution 15'],
    'first-secretary-1960':
      locale === 'vi'
        ? ['1960', 'bi thu thu nhat', 'dai hoi iii', 'lanh dao cao nhat']
        : ['1960', 'first secretary', '3rd congress', 'party leadership'],
    'tet-1968':
      locale === 'vi'
        ? ['1968', 'tet mau than', 'tong tien cong', 'noi day']
        : ['1968', 'tet offensive', 'uprising', 'tet mau than'],
    'spring-1975':
      locale === 'vi'
        ? ['1975', 'mua xuan 1975', 'ho chi minh', 'tong tien cong', 'giai phong mien nam']
        : ['1975', 'spring 1975', 'ho chi minh campaign', 'liberation of the south'],
    'reunification-1976':
      locale === 'vi'
        ? ['1976', 'thong nhat', 'xay dung dat nuoc', 'tai thiet']
        : ['1976', 'reunification', 'reconstruction', 'post-war recovery'],
    'legacy-1986':
      locale === 'vi'
        ? ['1986', 'qua doi', 'di san', 'tong ket cuoc doi']
        : ['1986', 'passing away', 'legacy', 'historical chapter']
  };

  return keywords[id] ?? [];
}

function getKnowledgeBase(locale: Locale) {
  const cached = knowledgeCache.get(locale);

  if (cached) {
    return cached;
  }

  const knowledge: ChatDocument[] = [
    ...getOverviewDocuments(locale),
    ...getTimelineEvents(locale).map((event) => ({
      id: event.id,
      category: 'timeline' as const,
      title: `${event.year} - ${event.title}`,
      summary: event.summary,
      detail: event.detail,
      route: '/timeline',
      routeLabel: getRouteLabel(locale, '/timeline'),
      keywords: [event.year, event.room, ...getTimelineKeywords(locale, event.id)],
      sourceLinks: event.sourceLinks ?? [],
      priority: 6
    })),
    ...getExhibits(locale).map((exhibit) => ({
      id: exhibit.id,
      category: 'exhibit' as const,
      title: exhibit.title,
      summary: exhibit.summary,
      detail: exhibit.detail,
      route: '/museum',
      routeLabel: getRouteLabel(locale, '/museum'),
      keywords: [exhibit.name, exhibit.room, exhibit.type],
      sourceLinks: exhibit.sourceLinks ?? [],
      priority: 4
    })),
    ...getMediaAssets(locale).map((asset) => ({
      id: asset.id,
      category: 'media' as const,
      title: asset.title,
      summary: asset.note,
      detail: asset.historicalContext,
      route: '/media',
      routeLabel: getRouteLabel(locale, '/media'),
      keywords: [asset.section, asset.category, asset.priority, asset.usage],
      sourceLinks: asset.sourceLinks ?? [],
      priority: 4
    })),
    ...getCampaignPlans(locale).map((plan) => ({
      id: plan.id,
      category: 'campaign' as const,
      title: plan.title,
      summary: plan.overview,
      detail: `${plan.historicalDetail} ${plan.leDuanRole}`,
      route: '/media',
      routeLabel: getRouteLabel(locale, '/media'),
      keywords: [plan.period, plan.room, ...plan.keyVisuals, ...plan.videoPlan],
      sourceLinks: plan.sourceLinks,
      priority: 5
    }))
  ];

  knowledgeCache.set(locale, knowledge);
  return knowledge;
}

function isGreeting(query: string) {
  const normalized = normalizeText(query);
  return /^(hi|hello|hey|xin chao|chao|alo)\b/.test(normalized);
}

function isHelpIntent(query: string) {
  const normalized = normalizeText(query);
  return (
    normalized.includes('ban giup duoc gi') ||
    normalized.includes('ban lam duoc gi') ||
    normalized.includes('huong dan') ||
    normalized.includes('help') ||
    normalized.includes('what can you do') ||
    normalized.includes('how can you help')
  );
}

function rankDocuments(locale: Locale, query: string, currentPath?: string) {
  const queryTokens = tokenize(query);
  const normalizedQuery = normalizeText(query);
  const activePath = currentPath ? stripLocaleFromPath(currentPath) : undefined;

  return getKnowledgeBase(locale)
    .map((document): RankedDocument => {
      const titleTokens = tokenize(document.title);
      const summaryTokens = tokenize(document.summary);
      const detailTokens = tokenize(document.detail ?? '');
      const keywordTokens = document.keywords.flatMap((keyword) => tokenize(keyword));
      const allText = normalizeText([document.title, document.summary, document.detail, ...document.keywords].join(' '));
      let score = document.priority;

      for (const token of queryTokens) {
        if (titleTokens.includes(token)) {
          score += 8;
        }
        if (keywordTokens.includes(token)) {
          score += 7;
        }
        if (summaryTokens.includes(token)) {
          score += 4;
        }
        if (detailTokens.includes(token)) {
          score += 2;
        }
      }

      for (const keyword of document.keywords) {
        const normalizedKeyword = normalizeText(keyword);

        if (normalizedKeyword.length > 2 && normalizedQuery.includes(normalizedKeyword)) {
          score += 9;
        }
      }

      if (normalizedQuery.length > 6 && allText.includes(normalizedQuery)) {
        score += 10;
      }

      const yearMatches = normalizedQuery.match(/\b(19|20)\d{2}\b/g) ?? [];
      for (const year of yearMatches) {
        if (allText.includes(year)) {
          score += 6;
        }
      }

      if (activePath && activePath === document.route) {
        score += 2;
      }

      return {
        ...document,
        score
      };
    })
    .sort((left, right) => right.score - left.score);
}

function buildAnswer(locale: Locale, ranked: RankedDocument[]) {
  const ui = responseCopy[locale];
  const [first, second] = ranked;

  if (!first || first.score < 10) {
    return ui.fallback;
  }

  const parts = [`${first.title}: ${first.summary}`];

  if (first.detail && first.score >= 16) {
    parts.push(first.detail);
  }

  if (second && second.id !== first.id && second.score >= Math.max(12, first.score - 4)) {
    parts.push(`${ui.relatedPrefix} ${second.title}. ${second.summary}`);
  }

  if (first.sourceLinks.length > 0) {
    parts.push(ui.sourceHint);
  }

  return parts.join('\n\n');
}

function getSuggestionsForDocument(locale: Locale, document?: ChatDocument) {
  const labels = responseCopy[locale].labels;

  if (!document) {
    return getInitialSuggestions(locale);
  }

  switch (document.category) {
    case 'timeline':
      return [labels.spring1975, labels.tet, labels.timeline];
    case 'exhibit':
      return [labels.exhibits, labels.museum, labels.media];
    case 'media':
    case 'campaign':
      return [labels.tet, labels.spring1975, labels.sources];
    case 'assistant':
      return [labels.guide, labels.museum, labels.timeline];
    default:
      return [labels.birth, labels.museum, labels.spring1975];
  }
}

function getPageLinks(locale: Locale, ranked: RankedDocument[], currentPath?: string) {
  const current = currentPath ? stripLocaleFromPath(currentPath) : undefined;
  const topRoutes = dedupeLinks(
    ranked
      .slice(0, 3)
      .map((document) => ({
        label: document.routeLabel,
        href: localizeHref(locale, document.route)
      }))
      .filter((link) => stripLocaleFromPath(link.href) !== current)
  );

  if (topRoutes.length > 0) {
    return topRoutes.slice(0, 2);
  }

  return responseCopy[locale].pageFallback.map((path) => ({
    label: getRouteLabel(locale, path),
    href: localizeHref(locale, path)
  }));
}

function getSourceLinks(ranked: RankedDocument[]) {
  return dedupeLinks(
    ranked
      .slice(0, 2)
      .flatMap((document) => document.sourceLinks)
      .map((source) => ({
        label: source.label,
        href: source.href
      }))
  ).slice(0, 3);
}

function shortenText(value: string | undefined, maxLength: number) {
  if (!value) {
    return '';
  }

  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

function buildContextSummary(locale: Locale, ranked: RankedDocument[], currentPath?: string) {
  const currentPage = currentPath ? stripLocaleFromPath(currentPath) : '/';
  const documents = ranked.filter((document) => document.score >= 8).slice(0, 5);

  if (documents.length === 0) {
    return locale === 'vi'
      ? 'Du lieu truy xuat hien tai qua it. Neu khong chac chan, hay noi rang bao tang chua co du lieu xac thuc cho cau hoi nay.'
      : 'The current retrieval context is thin. If you are unsure, say that the museum does not yet have verified data for that question.';
  }

  return [
    locale === 'vi'
      ? `Trang hien tai: ${currentPage}`
      : `Current page: ${currentPage}`,
    ...documents.map((document, index) => {
      const sourceText =
        document.sourceLinks.length > 0
          ? document.sourceLinks.map((source) => `${source.label}: ${source.href}`).join(' | ')
          : locale === 'vi'
            ? 'Khong co lien ket nguon truc tiep trong bo du lieu.'
            : 'No direct source links in the current dataset.';

      return [
        `[${index + 1}] ${document.title}`,
        `${locale === 'vi' ? 'Muc' : 'Section'}: ${document.routeLabel}`,
        `${locale === 'vi' ? 'Tom tat' : 'Summary'}: ${shortenText(document.summary, 420)}`,
        document.detail ? `${locale === 'vi' ? 'Chi tiet' : 'Detail'}: ${shortenText(document.detail, 420)}` : null,
        `${locale === 'vi' ? 'Nguon' : 'Sources'}: ${sourceText}`
      ]
        .filter(Boolean)
        .join('\n');
    })
  ].join('\n\n');
}

export function getChatbotWelcome(locale: Locale): ChatbotReply {
  return {
    answer: responseCopy[locale].intro,
    suggestions: getInitialSuggestions(locale),
    pages: responseCopy[locale].pageFallback.map((path) => ({
      label: getRouteLabel(locale, path),
      href: localizeHref(locale, path)
    })),
    sources: []
  };
}

export function generateChatbotReply(options: { locale: Locale; message: string; currentPath?: string }): ChatbotReply {
  const { locale, message, currentPath } = options;
  const trimmedMessage = message.trim();

  if (!trimmedMessage) {
    return getChatbotWelcome(locale);
  }

  if (isGreeting(trimmedMessage) || isHelpIntent(trimmedMessage)) {
    return {
      ...getChatbotWelcome(locale),
      answer: `${responseCopy[locale].intro}\n\n${responseCopy[locale].help}`
    };
  }

  const ranked = rankDocuments(locale, trimmedMessage, currentPath);
  const answer = buildAnswer(locale, ranked);
  const bestDocument = ranked[0]?.score >= 10 ? ranked[0] : undefined;

  return {
    answer,
    suggestions: getSuggestionsForDocument(locale, bestDocument),
    pages: getPageLinks(locale, ranked, currentPath),
    sources: bestDocument ? getSourceLinks(ranked) : []
  };
}

export function getChatbotContextBundle(options: {
  locale: Locale;
  message: string;
  currentPath?: string;
}): ChatbotContextBundle {
  const { locale, message, currentPath } = options;
  const fallbackReply = generateChatbotReply({ locale, message, currentPath });
  const ranked = rankDocuments(locale, message, currentPath);

  return {
    fallbackReply,
    contextSummary: buildContextSummary(locale, ranked, currentPath)
  };
}
