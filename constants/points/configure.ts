import { TrackId } from "../tracks/types";

export const DEFAULT_MILESTONE_POINT_MAP = [0, 10, 30, 60, 100, 150];

export const TRACK_WEIGHT_MAP: Record<TrackId, number | number[]> = {
  [TrackId.MOBILE]: 0.8,
  [TrackId.WEB_CLIENT]: 1,
  [TrackId.SOFTWARE_ENGINEERING]: 1,
  [TrackId.DEV_OPS]: 1,
  [TrackId.SERVERS]: 1.1,
  [TrackId.PROJECT_MANAGEMENT]: 1,
  [TrackId.CRAFT]: 1,
  [TrackId.COMMUNICATION]: 1,
  [TrackId.LEADERSHIP_INITIATIVE]: 1,
  [TrackId.RECRUITMENT_EVANGELISM]: 1,
  [TrackId.BUSINESS_ACUMEN]: 1,
  [TrackId.PROBLEM_SOLVING]: 1,
  [TrackId.OPERATIONAL_EXPERIENCE]: 1,
};
