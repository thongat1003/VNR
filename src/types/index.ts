export type RouteItem = {
  label: string;
  href: string;
  description?: string;
};

export type SourceLink = {
  label: string;
  href: string;
};

export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  summary: string;
  detail?: string;
  room: string;
  image: string;
  imagePosition?: string;
  verified?: boolean;
  sourceLinks?: SourceLink[];
};

export type Exhibit = {
  id: string;
  name: string;
  room: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
  type: 'book' | 'document' | 'map' | 'radio' | 'medal' | 'desk';
  verified?: boolean;
  sourceLinks?: SourceLink[];
};

export type MediaAsset = {
  id: string;
  title: string;
  category: 'image' | 'video';
  priority: 'core' | 'support';
  section: string;
  source: string;
  note: string;
  usage: string;
  historicalContext: string;
  thumbnail: string;
  verified?: boolean;
  sourceLinks?: SourceLink[];
};

export type DocumentArchiveItem = {
  id: string;
  period: string;
  room: string;
  title: string;
  summary: string;
  caption: string;
  image: string;
  imagePosition?: string;
};

export type CampaignPlan = {
  id: string;
  title: string;
  period: string;
  room: string;
  overview: string;
  historicalDetail: string;
  leDuanRole: string;
  keyVisuals: string[];
  videoPlan: string[];
  sourceLinks: SourceLink[];
};

export type ProductionPhase = {
  id: string;
  title: string;
  timeframe: string;
  objective: string;
  deliverables: string[];
};
