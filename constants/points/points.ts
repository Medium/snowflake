import {
  estimateMinPoints,
  totalPointsFromMilestoneMap,
} from "../../logic/points";
import { TrackId } from "../tracks/types";

export const MAX_TRACK_TARGET = 7;

export const levelPointCap = estimateMinPoints(0, 0, MAX_TRACK_TARGET);
export const maxPoints = totalPointsFromMilestoneMap({
  [TrackId.MOBILE]: 5,
  [TrackId.WEB_CLIENT]: 5,
  [TrackId.FOUNDATIONS]: 5,
  [TrackId.SERVERS]: 5,
  [TrackId.PROJECT_MANAGEMENT]: 5,
  [TrackId.COMMUNICATION]: 5,
  [TrackId.CRAFT]: 5,
  [TrackId.LEADERSHIP_INITIATIVE]: 5,
  [TrackId.ANALYTICAL_THINKING]: 5,
  [TrackId.BUSINESS_ACUMEN]: 5,
});

export const levelsToPoints = {
  "0.0": estimateMinPoints(0),
  "1.1": estimateMinPoints(MAX_TRACK_TARGET * 0.5),
  "1.2": estimateMinPoints(MAX_TRACK_TARGET * 0.9, MAX_TRACK_TARGET * 0.1),
  "1.3": estimateMinPoints(MAX_TRACK_TARGET * 0.6, MAX_TRACK_TARGET * 0.4),
  "2.1": estimateMinPoints(MAX_TRACK_TARGET * 0.3, MAX_TRACK_TARGET * 0.7),
  "2.2": estimateMinPoints(
    MAX_TRACK_TARGET * 0.1,
    MAX_TRACK_TARGET * 0.8,
    MAX_TRACK_TARGET * 0.1
  ),
  "2.3": estimateMinPoints(
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0.6,
    MAX_TRACK_TARGET * 0.4
  ),
  "3.1": estimateMinPoints(
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0.4,
    MAX_TRACK_TARGET * 0.6
  ),
  "3.2": estimateMinPoints(
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0.1,
    MAX_TRACK_TARGET * 0.9
  ),
  "3.3": estimateMinPoints(
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0.1,
    MAX_TRACK_TARGET * 0.8,
    MAX_TRACK_TARGET * 0.1
  ),
  "4.1": estimateMinPoints(
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0.1,
    MAX_TRACK_TARGET * 0.7,
    MAX_TRACK_TARGET * 0.2
  ),
  "4.2": estimateMinPoints(
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0.1,
    MAX_TRACK_TARGET * 0.5,
    MAX_TRACK_TARGET * 0.4
  ),
  "4.3": estimateMinPoints(
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0,
    MAX_TRACK_TARGET * 0.5,
    MAX_TRACK_TARGET * 0.4,
    MAX_TRACK_TARGET * 0.1
  ),
  "5.1": estimateMinPoints(
    0,
    0,
    MAX_TRACK_TARGET * 0.3,
    MAX_TRACK_TARGET * 0.6,
    MAX_TRACK_TARGET * 0.1
  ),
  "5.2": estimateMinPoints(
    0,
    0,
    MAX_TRACK_TARGET * 0.1,
    MAX_TRACK_TARGET * 0.7,
    MAX_TRACK_TARGET * 0.2
  ),
  "5.3": estimateMinPoints(
    0,
    0,
    MAX_TRACK_TARGET * 0.1,
    MAX_TRACK_TARGET * 0.6,
    MAX_TRACK_TARGET * 0.3
  ),
  "6.1": estimateMinPoints(
    0,
    0,
    0,
    MAX_TRACK_TARGET * 0.7,
    MAX_TRACK_TARGET * 0.3
  ),
  "6.3": estimateMinPoints(
    0,
    0,
    0,
    MAX_TRACK_TARGET * 0.6,
    MAX_TRACK_TARGET * 0.4
  ),
  "7.1": estimateMinPoints(
    0,
    0,
    0,
    MAX_TRACK_TARGET * 0.5,
    MAX_TRACK_TARGET * 0.5
  ),
  "7.2": estimateMinPoints(
    0,
    0,
    0,
    MAX_TRACK_TARGET * 0.4,
    MAX_TRACK_TARGET * 0.6
  ),
  "7.3": estimateMinPoints(
    0,
    0,
    0,
    MAX_TRACK_TARGET * 0.3,
    MAX_TRACK_TARGET * 0.7
  ),
  "8.1": estimateMinPoints(
    0,
    0,
    0,
    MAX_TRACK_TARGET * 0.2,
    MAX_TRACK_TARGET * 0.8
  ),
};

export const pointsToLevels = Object.fromEntries(
  Object.entries(levelsToPoints).map(([a, b]) => [b, a])
);
