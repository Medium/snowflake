import { TrackId } from "../tracks/types";

export const DEFAULT_MILESTONE_POINT_MAP = [0, 10, 30, 60, 120, 200];
export const SPECIALTY_POINT_MAP = [
  DEFAULT_MILESTONE_POINT_MAP,
  DEFAULT_MILESTONE_POINT_MAP.map((n) => n * 0.8),
  DEFAULT_MILESTONE_POINT_MAP.map((n) => n * 0.6),
  DEFAULT_MILESTONE_POINT_MAP.map((n) => n * 0.4),
  DEFAULT_MILESTONE_POINT_MAP.map((n) => n * 0.2),
  DEFAULT_MILESTONE_POINT_MAP.map((n) => n * 0),
];

export const TRACK_WEIGHT_MAP: Record<TrackId, number | number[]> = {
  [TrackId.MOBILE]: 1,
  [TrackId.WEB_CLIENT]: 1,
  [TrackId.SOFTWARE_ENGINEERING]: 1,
  [TrackId.DEV_OPS]: 1,
  [TrackId.SERVERS]: 1,
  [TrackId.PROJECT_MANAGEMENT]: 1,
  [TrackId.COMMUNICATION]: 1,
  [TrackId.CRAFT]: 1,
  [TrackId.LEADERSHIP_INITIATIVE]: 1,
  [TrackId.INTELLIGENCE_WISDOM]: 1,
  [TrackId.BUSINESS_ACUMEN]: [0, 10, 20, 30, 40, 50],
};
