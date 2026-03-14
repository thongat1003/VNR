import { campaignPlans as baseCampaignPlans } from '@/data/contentPlan';
import { exhibits as baseExhibits } from '@/data/exhibits';
import { mediaAssets as baseMediaAssets } from '@/data/media';
import { timelineEvents as baseTimelineEvents } from '@/data/timeline';
import type { CampaignPlan, Exhibit, MediaAsset, TimelineEvent } from '@/types';
import type { Locale } from '@/i18n/config';

type OverlayMap<T extends { id: string }> = Record<string, Partial<Omit<T, 'id'>>>;

function applyOverlay<T extends { id: string }>(items: T[], overlay: OverlayMap<T>) {
  return items.map((item) => ({
    ...item,
    ...(overlay[item.id] ?? {})
  }));
}

const roomLabels = {
  homeland: 'Homeland & Youth',
  revolutionary: 'Revolutionary Activity (1930-1945)',
  antiFrench: 'Anti-French Resistance (1945-1954)',
  architect: '“Architect of Reunification”',
  legacy: 'Legacy & Renewal',
  campaigns: 'Campaigns & Historical Turning Points',
  reunification: 'National Reunification'
} as const;

const timelineEn: OverlayMap<TimelineEvent> = {
  'birth-1907': {
    title: 'Born in Quang Tri',
    summary:
      'Le Duan was born on April 7, 1907 in Trieu Thanh commune, Trieu Phong district, Quang Tri province. This opening milestone introduces the cultural roots, family background, and patriotic environment that shaped his early years.',
    room: roomLabels.homeland
  },
  'join-1928': {
    title: 'Entering the revolutionary path',
    summary:
      'By the late 1920s he had joined patriotic and revolutionary activity, beginning a long political journey tied first to central Vietnam and later to the national revolutionary movement.',
    room: roomLabels.homeland
  },
  'prison-1931': {
    title: 'Arrest and imprisonment',
    summary:
      'In 1931 he was arrested by the French colonial authorities and held in prisons such as Hoa Lo, Son La, and Con Dao. The period highlighted the will and political resolve of a revolutionary fighter.',
    room: roomLabels.revolutionary
  },
  'south-1946': {
    title: 'Attached to the southern battlefield',
    summary:
      'During the anti-French resistance, Le Duan took on major responsibilities in the South and remained closely connected to practical leadership on the southern front.',
    room: roomLabels.antiFrench
  },
  'south-thesis-1956': {
    title: 'Outline of the Southern Revolution',
    summary:
      'This is one of the key ideological milestones of the museum, tied to the formation of the revolutionary line for southern Vietnam after the 1954 Geneva Accords.',
    room: roomLabels.architect
  },
  'first-secretary-1960': {
    title: 'Elected First Secretary',
    summary:
      'At the 3rd National Congress of the Vietnam Workers’ Party, held in Hanoi from September 5 to 10, 1960, Le Duan was elected First Secretary of the Party Central Committee.',
    room: roomLabels.architect
  },
  'tet-1968': {
    title: 'The 1968 Tet Offensive and uprising',
    summary:
      'Spring 1968 marked a major turning point in strategic, political, and diplomatic terms. The museum can treat it as a dedicated cluster centered on urban operations and long-term historical impact.',
    room: roomLabels.architect
  },
  'spring-1975': {
    title: 'The Great Spring Victory of 1975',
    summary:
      'From the Central Highlands to Hue, Da Nang, and the Ho Chi Minh Campaign, the Spring of 1975 formed the emotional and historical climax of the museum’s full narrative line.',
    room: roomLabels.architect
  },
  'reunification-1976': {
    title: 'A reunified country enters a new phase',
    summary:
      'After the 1975 victory, Vietnam moved into the era of reunification, reconstruction, and post-war recovery. This stage links military victory to political, economic, and social leadership in peacetime.',
    room: roomLabels.legacy
  },
  'legacy-1986': {
    title: 'Closing a historical chapter',
    summary:
      'The year 1986 marked the end of Le Duan’s revolutionary life. The final gallery presents him in the broader frame of political legacy, historical role, and public memory.',
    room: roomLabels.legacy
  }
};

const exhibitsEn: OverlayMap<Exhibit> = {
  'homeland-map': {
    name: 'Map of Quang Tri',
    room: roomLabels.homeland,
    title: 'The homeland of Quang Tri',
    summary: 'A starting exhibit that locates Le Duan within the land, culture, and social setting of Quang Tri at the beginning of the twentieth century.',
    detail: 'The opening room uses this map to introduce place, family roots, and regional tradition before moving into the political narrative of his life.'
  },
  'youth-doc': {
    name: 'Revolutionary youth documents',
    room: roomLabels.homeland,
    title: 'The beginning of a revolutionary path',
    summary: 'Early documents and portraits mark the transition from a patriotic young man to a committed revolutionary cadre.',
    detail: 'This exhibit should be read as a bridge between personal biography and the early organizational environment in which Le Duan entered political struggle.'
  },
  'prison-files': {
    name: 'Prison records',
    room: roomLabels.revolutionary,
    title: 'Years of imprisonment',
    summary: 'French colonial imprisonment became a decisive period of political testing, endurance, and revolutionary education.',
    detail: 'The prison file cluster helps the museum show both repression and resilience, grounding the later leadership story in years of sacrifice and discipline.'
  },
  'resistance-radio': {
    name: 'Regional resistance conference',
    room: roomLabels.antiFrench,
    title: 'Leading the southern resistance',
    summary: 'This exhibit represents Le Duan’s close involvement with practical resistance leadership in Nam Bo during the anti-French war.',
    detail: 'It emphasizes his wartime experience in the South, where field conditions and organizational work shaped the strategic thinking visible in later decades.'
  },
  'southern-thesis': {
    name: 'Outline of the Southern Revolution',
    room: roomLabels.architect,
    title: 'Outline of the Southern Revolution',
    summary: 'One of the museum’s key political documents, tied to the formation of a strategic line for southern Vietnam after 1954.',
    detail: 'The facsimile reveals Le Duan not only as an organizer but also as a strategic thinker whose analysis influenced the path of southern revolution.'
  },
  'first-secretary-hall': {
    name: '3rd National Congress',
    room: roomLabels.architect,
    title: 'Le Duan elected First Secretary',
    summary: 'At the 3rd National Congress in 1960, Le Duan assumed the Party’s top leadership role in a period of escalating war and strategic decision-making.',
    detail: 'This exhibit marks the point where personal political biography fully merges with the national history of wartime leadership.'
  },
  'congress-session-1960': {
    name: '3rd Congress, 1960',
    room: roomLabels.architect,
    title: 'President Ho Chi Minh speaking at the 3rd Congress',
    summary: 'The congress setting places Le Duan within the collective leadership of the Party at a decisive historical juncture.',
    detail: 'Used together with neighboring exhibits, this image broadens the narrative from one individual to the wider political leadership structure of the period.'
  },
  'northern-leadership-1966': {
    name: 'Northern leadership, 1966',
    room: roomLabels.architect,
    title: 'Le Duan with leaders in the North',
    summary: 'The photograph reflects wartime leadership at the highest level as the North sustained the struggle and coordinated strategy for the South.',
    detail: 'It is useful for showing both strategic leadership and the collective decision-making environment behind major campaigns.'
  },
  'memorial-1969': {
    name: 'Le Duan at Ho Chi Minh’s memorial',
    room: roomLabels.architect,
    title: 'Reading the memorial tribute',
    summary: 'The 1969 memorial moment links personal responsibility, succession, and the continuity of revolutionary leadership after President Ho Chi Minh’s passing.',
    detail: 'This exhibit conveys the emotional and political weight of leadership at a moment of profound national transition.'
  },
  'southern-heroes-1972': {
    name: 'Southern heroes, 1972',
    room: roomLabels.architect,
    title: 'Le Duan with southern fighters',
    summary: 'The image highlights the bond between top leadership and frontline forces during an intense phase of the anti-American war.',
    detail: 'It works as a people-centered counterpoint to strategic documents and conference photographs elsewhere in the museum.'
  },
  'fidel-castro-1973': {
    name: 'Fidel Castro in Vietnam',
    room: roomLabels.architect,
    title: 'Welcoming the Cuban delegation',
    summary: 'This exhibit underscores international solidarity and the diplomatic dimension of wartime leadership.',
    detail: 'It helps the museum position the Vietnamese struggle within a broader network of socialist and anti-imperialist international support.'
  },
  'politburo-meeting-1975': {
    name: 'Expanded Politburo meeting, 1975',
    room: roomLabels.architect,
    title: 'Le Duan chairs a key strategic meeting',
    summary: 'The meeting symbolizes the decisive political leadership behind the 1975 general offensive and uprising.',
    detail: 'It is central to explaining how battlefield success and high-level political judgment converged in the final push toward reunification.'
  },
  'east-germany-1975': {
    name: 'Visit to East Germany, 1975',
    room: roomLabels.architect,
    title: 'Le Duan in the German Democratic Republic',
    summary: 'The image reflects foreign relations in the context of victory, reconstruction, and post-war diplomacy.',
    detail: 'It expands the museum story from wartime strategy to the international work of a reunified country.'
  },
  'poland-1975': {
    name: 'Visit to Poland, 1975',
    room: roomLabels.architect,
    title: 'Le Duan visits Poland',
    summary: 'This exhibit continues the narrative of diplomatic outreach and state leadership in the immediate aftermath of victory.',
    detail: 'It shows how post-war leadership involved not only military triumph but also international engagement and reconstruction partnerships.'
  },
  'congress-iv-1976': {
    name: '4th National Congress, 1976',
    room: roomLabels.legacy,
    title: 'Political report at the 4th Congress',
    summary: 'After reunification, Le Duan’s leadership shifted toward reconstruction, national integration, and socialist development.',
    detail: 'The 1976 congress is a key transition point from wartime command to post-war state-building.'
  },
  'youth-army-1980': {
    name: 'Military youth delegates, 1980',
    room: roomLabels.legacy,
    title: 'Le Duan with military youth delegates',
    summary: 'The image reflects the educational and generational dimension of leadership in the post-war years.',
    detail: 'It helps frame legacy not only as doctrine and policy but also as transmission to younger generations.'
  },
  'soviet-visit-1980': {
    name: 'Visit to the Soviet Union, 1980',
    room: roomLabels.legacy,
    title: 'Leading a delegation to the Soviet Union',
    summary: 'The visit represents post-war diplomacy and the broader international positioning of Vietnam in the socialist world.',
    detail: 'Placed in the legacy room, it supports the story of reconstruction, alliance-building, and external relations after reunification.'
  },
  'congress-v-1982': {
    name: '5th National Congress, 1982',
    room: roomLabels.legacy,
    title: 'Le Duan with delegates at the 5th Congress',
    summary: 'The 1982 congress setting reflects continuity in leadership and the effort to guide the country through a difficult period of consolidation.',
    detail: 'This exhibit belongs to the longer arc of political legacy rather than the wartime chronology alone.'
  },
  'working-desk': {
    name: '3rd National Congress, 1960',
    room: roomLabels.architect,
    title: 'Le Duan delivering the political report',
    summary: 'A representative exhibit of leadership work, where strategic assessment and political line were presented before the Party.',
    detail: 'It can be staged as a working node between personal leadership, formal congress process, and the later campaign narrative.'
  },
  'victory-map': {
    name: 'Early-1975 Politburo meeting',
    room: roomLabels.architect,
    title: 'Decision for the Spring 1975 General Offensive',
    summary: 'The map exhibit condenses the logic of the final offensive and the strategic momentum that led to victory.',
    detail: 'It should function as a narrative synthesis point, connecting campaigns, command decisions, and the collapse of the opposing defense system.'
  },
  'medal-legacy': {
    name: 'Vietnam-Soviet treaty, 1978',
    room: roomLabels.legacy,
    title: 'Post-war legacy and foreign relations',
    summary: 'The exhibit opens the post-war chapter through foreign policy, reconstruction, and the durable political legacy of leadership.',
    detail: 'It marks the shift from military victory to questions of statecraft, external relations, and long-term historical assessment.'
  },
  'passaway-1986': {
    name: 'State funeral of General Secretary Le Duan',
    room: roomLabels.legacy,
    title: 'Passing away and the legacy left behind',
    summary: 'On July 10, 1986, Le Duan passed away in Hanoi after nearly sixty years of revolutionary activity. A solemn state funeral was held.',
    detail: 'The closing exhibit places his life within the larger story of the Vietnamese revolution, national wars of resistance, and post-war reconstruction.'
  }
};

const mediaAssetsEn: OverlayMap<MediaAsset> = {
  'quang-tri-memorial': {
    title: 'Homeland views and the memorial site in Quang Tri',
    section: roomLabels.homeland,
    note: 'Used for the opening gallery, homeland mapping, biographical panels, and the social setting that shaped Le Duan’s character.',
    historicalContext:
      'This image cluster places Le Duan within a concrete social and cultural landscape instead of opening the museum with isolated portraits alone.'
  },
  'prison-archive': {
    title: 'Archival material from Hoa Lo, Son La, and Con Dao prisons',
    section: roomLabels.revolutionary,
    note: 'Supports the imprisonment gallery with records, prison cells, political prisoner artifacts, and memoir excerpts.',
    historicalContext:
      'The set shows the political endurance of an earlier revolutionary generation while adding emotional depth to the museum journey.'
  },
  'south-thesis-facsimile': {
    title: 'Facsimile of the Outline of the Southern Revolution',
    section: roomLabels.architect,
    note: 'A core document cluster for the 1954-1960 room, useful for document panels, mind maps, and contextual labels.',
    historicalContext:
      'This material helps the museum move from biography into political line, clarifying why Le Duan is so strongly associated with strategic thought on the South.'
  },
  'dong-khoi-photo-roll': {
    title: 'Image set on the Dong Khoi movement',
    section: roomLabels.campaigns,
    note: 'Supports the shift in southern revolutionary strategy from the late 1950s into the opening of the 1960s.',
    historicalContext:
      'Dong Khoi should be told not as an isolated event but as a turning point that opens the road toward Tet 1968 and the Spring of 1975.'
  },
  'tet-mau-than-mapset': {
    title: 'Tet 1968 photographs and campaign maps',
    section: roomLabels.campaigns,
    note: 'Used for the high point of the anti-American war, centered on cities, political impact, and strategic turning point.',
    historicalContext:
      'The image set helps viewers understand Tet 1968 within the larger war narrative and within the strategic line directed by the Party leadership.'
  },
  'spring-1975-gallery': {
    title: 'Campaign maps and imagery from Spring 1975',
    section: roomLabels.reunification,
    note: 'This should be the strongest image cluster after the central portrait, because it forms the emotional climax of the whole museum.',
    historicalContext:
      'The sequence makes it possible to build a continuous narrative from the Central Highlands to April 30, 1975, producing a clear visual and historical climax.'
  }
};

const campaignPlansEn: OverlayMap<CampaignPlan> = {
  'dong-khoi-1960': {
    title: 'The Dong Khoi movement',
    room: roomLabels.architect,
    overview:
      'Beginning in Ben Tre and spreading across Nam Bo and the Central Highlands, Dong Khoi broke the enemy’s grip in many rural areas and marked a strategic shift from preserving forces to offensive action.',
    historicalDetail:
      'A key marker is January 17, 1960 in the communes of Dinh Thuy, Binh Khanh, and Phuoc Hiep in Mo Cay district. From there, political and armed forces grew quickly on the spot and opened a new phase for the southern revolution.',
    leDuanRole:
      'Le Duan helped lay the strategic groundwork through the Outline of the Southern Revolution and later directives, creating the political basis for Dong Khoi and for Resolution 15.'
  },
  'tet-mau-than-1968': {
    title: 'The Tet Offensive and uprising of 1968',
    room: roomLabels.architect,
    overview:
      'The offensive unfolded across southern Vietnam during Tet 1968, creating a major strategic shock and forcing the United States to reconsider its war approach while opening a new diplomatic turning point.',
    historicalDetail:
      'The historical significance of Tet 1968 lies not only in immediate military results but also in its political, diplomatic, and psychological impact on the wider war.',
    leDuanRole:
      'As one of the Party’s principal leaders, Le Duan and the Politburo linked military goals with political and diplomatic effects in the planning and direction of the offensive.'
  },
  'tay-nguyen-1975': {
    title: 'The Central Highlands campaign',
    room: roomLabels.architect,
    overview:
      'The Central Highlands campaign opened the Spring 1975 general offensive. The strike at Buon Ma Thuot shattered a vital strategic link and triggered a wider collapse in the opposing defense system.',
    historicalDetail:
      'The fall of Buon Ma Thuot on March 10, 1975 quickly became the decisive breakthrough, after which the Politburo judged that the strategic opportunity had fully ripened for a broad southern offensive.',
    leDuanRole:
      'Le Duan and the top leadership followed the campaign closely, emphasizing the need to seize the moment and turn campaign victory into a strategic transformation across the South.'
  },
  'hue-da-nang-1975': {
    title: 'The Hue - Da Nang campaign',
    room: roomLabels.architect,
    overview:
      'Following the Central Highlands breakthrough, the Hue - Da Nang campaign advanced at great speed, liberating the former imperial capital and Da Nang while rapidly changing the balance of forces before the final push on Saigon.',
    historicalDetail:
      'Successive victories in Tri Thien, Hue, and Da Nang dismantled major enemy forces in central Vietnam and accelerated the war toward its final phase with extraordinary speed.',
    leDuanRole:
      'Le Duan is remembered as one of the leaders who pressed for strategic decisiveness, turning regional victory into a plan for the liberation of the entire South in the shortest possible time.'
  },
  'ho-chi-minh-1975': {
    title: 'The Ho Chi Minh Campaign',
    room: roomLabels.architect,
    overview:
      'The final campaign liberated Saigon - Gia Dinh, ended the war, and completed the cause of national reunification.',
    historicalDetail:
      'Five major military directions moved into central Saigon, seized key targets, and compelled the Saigon government to announce unconditional surrender at noon on April 30, 1975.',
    leDuanRole:
      'As head of the Party Central Committee, Le Duan and the top leadership helped decide on the strategy to liberate Saigon before the rainy season of 1975 and seize the historic opportunity to end the war.'
  }
};

export function getTimelineEvents(locale: Locale) {
  if (locale === 'en') {
    return applyOverlay(baseTimelineEvents, timelineEn);
  }

  return baseTimelineEvents;
}

export function getExhibits(locale: Locale): Exhibit[] {
  if (locale === 'en') {
    return applyOverlay(baseExhibits, exhibitsEn);
  }

  return baseExhibits;
}

export function getMediaAssets(locale: Locale): MediaAsset[] {
  if (locale === 'en') {
    return applyOverlay(baseMediaAssets, mediaAssetsEn);
  }

  return baseMediaAssets;
}

export function getCampaignPlans(locale: Locale): CampaignPlan[] {
  if (locale === 'en') {
    return applyOverlay(baseCampaignPlans, campaignPlansEn);
  }

  return baseCampaignPlans;
}

export function getHomeStats(locale: Locale) {
  const galleryCount = new Set(baseTimelineEvents.map((event) => event.room)).size;
  const exhibitCount = getExhibits(locale).length;
  const mediaCount = getMediaAssets(locale).length;

  return [galleryCount, exhibitCount, mediaCount].map((value) => value.toString());
}
