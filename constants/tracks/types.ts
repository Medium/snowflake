export enum TrackId {
  "MOBILE" = "MOBILE",
  "WEB_CLIENT" = "WEB_CLIENT",
  "DEV_OPS" = "DEV_OPS",
  "SOFTWARE_ENGINEERING" = "SOFTWARE_ENGINEERING",
  "SERVERS" = "SERVERS",
  "PROJECT_MANAGEMENT" = "PROJECT_MANAGEMENT",
  "CRAFT" = "CRAFT",
  "ANALYTICAL_THINKING" = "ANALYTICAL_THINKING",
  "LEADERSHIP_INITIATIVE" = "LEADERSHIP_INITIATIVE",
  "COMMUNICATION" = "COMMUNICATION",
  "BUSINESS_ACUMEN" = "BUSINESS_ACUMEN",
}
export enum CategoryId {
  "BUILD" = "BUILD",
  "EXECUTE" = "EXECUTE",
  "LEAD" = "LEAD",
}
export enum SpecialtyId {
  "FE" = "FRONT_END",
  "BE" = "FRONT_END",
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
  [TrackId.ANALYTICAL_THINKING]: Milestone;
  [TrackId.BUSINESS_ACUMEN]: Milestone;
};

export type CategoryMap = Record<CategoryId, number>;
export type SpecialtyMap = Record<SpecialtyId, number>;

export type Track = {
  displayName: string;
  category: CategoryId;
  specialty?: SpecialtyId;
  description: string;
};
