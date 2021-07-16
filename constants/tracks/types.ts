export enum TrackId {
  "MOBILE" = "MOBILE",
  "WEB_CLIENT" = "WEB_CLIENT",
  "DEV_OPS" = "DEV_OPS",
  "SERVERS" = "SERVERS",
  "SOFTWARE_ENGINEERING" = "SOFTWARE_ENGINEERING",
  "PROJECT_MANAGEMENT" = "PROJECT_MANAGEMENT",
  "CRAFT" = "CRAFT",
  "INTELLIGENCE_WISDOM" = "INTELLIGENCE_WISDOM",
  "COMMUNICATION" = "COMMUNICATION",
  "LEADERSHIP_INITIATIVE" = "LEADERSHIP_INITIATIVE",
  "BUSINESS_ACUMEN" = "BUSINESS_ACUMEN",
}
export enum CategoryId {
  "BUILD" = "BUILD",
  "EXECUTE" = "EXECUTE",
  "LEAD" = "LEAD",
}
export enum SpecialtyId {
  "RN" = "React Native",
  "Android" = "Android",
  "IOS" = "IOS",
  "FLutter" = "Flutter",
  "MOBILE" = "Mobile",
  "WEB" = "Web",
  "FE" = "Frontend",
  "GO" = "Go",
  "Python" = "Python",
  "BE" = "Backend",
  "SRE" = "Dev Ops",
}

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5;

export type MilestoneMap = {
  [TrackId.MOBILE]: Milestone;
  [TrackId.WEB_CLIENT]: Milestone;
  [TrackId.DEV_OPS]: Milestone;
  [TrackId.SOFTWARE_ENGINEERING]: Milestone;
  [TrackId.SERVERS]: Milestone;
  [TrackId.PROJECT_MANAGEMENT]: Milestone;
  [TrackId.COMMUNICATION]: Milestone;
  [TrackId.CRAFT]: Milestone;
  [TrackId.LEADERSHIP_INITIATIVE]: Milestone;
  [TrackId.INTELLIGENCE_WISDOM]: Milestone;
  [TrackId.BUSINESS_ACUMEN]: Milestone;
};

export type CategoryMap = Record<CategoryId, number>;
export type SpecialtyMap = Record<SpecialtyId, number>;

export type Track = {
  displayName: string;
  category: CategoryId;
  specialty?: SpecialtyId[];
  description: string;
};
