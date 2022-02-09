import { JobFamily } from "../titles";

export enum TrackId {
  "MOBILE" = "MOBILE",
  "WEB_CLIENT" = "WEB_CLIENT",
  "DEV_OPS" = "DEV_OPS",
  "SERVERS" = "SERVERS",
  "SOFTWARE_ENGINEERING" = "SOFTWARE_ENGINEERING",
  "PROJECT_MANAGEMENT" = "PROJECT_MANAGEMENT",
  "CRAFT" = "CRAFT",
  "COMMUNICATION" = "COMMUNICATION",
  "LEADERSHIP_INITIATIVE" = "LEADERSHIP_INITIATIVE",
  "BUSINESS_ACUMEN" = "BUSINESS_ACUMEN",
  "RECRUITMENT_EVANGELISM" = "RECRUITMENT_EVANGELISM",
  "PROBLEM_SOLVING" = "PROBLEM_SOLVING",
  "OPERATIONAL_EXPERIENCE" = "OPERATIONAL_EXPERIENCE",
}
export enum CategoryId {
  "STR" = "STR",
  "DEX" = "DEX",
  "CHA" = "CHA",
  "WIS" = "WIS",
}
export enum SpecialtyId {
  "RN" = "React Native",
  "Android" = "Android",
  "IOS" = "IOS",
  "MOBILE" = "Mobile",
  "WEB" = "Web",
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
  [TrackId.PROBLEM_SOLVING]: Milestone;
  [TrackId.BUSINESS_ACUMEN]: Milestone;
};

export type Quest = {
  content: string;
  created_at: string;
  updated_at: string;
  author_name: string;
  completed_date: Date | null;
  targeting_tracks: TrackId[];
};

export type Note = {
  content: string;
  created_at: string;
  updated_at: string;
  author_name: string;
  acknowledged_by: string[];
  at_milestone: Milestone;
};

export type MilestoneState = {
  milestone: Milestone;
  milestone_notes: Note[];
};

export type MilestoneStates = {
  [TrackId.MOBILE]: MilestoneState;
  [TrackId.WEB_CLIENT]: MilestoneState;
  [TrackId.DEV_OPS]: MilestoneState;
  [TrackId.SOFTWARE_ENGINEERING]: MilestoneState;
  [TrackId.SERVERS]: MilestoneState;
  [TrackId.PROJECT_MANAGEMENT]: MilestoneState;
  [TrackId.COMMUNICATION]: MilestoneState;
  [TrackId.CRAFT]: MilestoneState;
  [TrackId.LEADERSHIP_INITIATIVE]: MilestoneState;
  [TrackId.PROBLEM_SOLVING]: MilestoneState;
  [TrackId.BUSINESS_ACUMEN]: MilestoneState;
};

export type CategoryMap = Record<CategoryId, number>;
export type SpecialtyMap = Record<SpecialtyId, number>;

export type Track = {
  displayName: string;
  category: CategoryId;
  specialty?: SpecialtyId[];
  description: string;
};

export type Category = {
  displayName: string;
  description: string;
  jobDescriptions?: Partial<Record<JobFamily, string>>;
};
