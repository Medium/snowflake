import {
  Milestone,
  MilestoneMap,
  milestones,
  TrackId,
  trackIds,
} from "../constants/tracks";

import {
  DEFAULT_MILESTONE_POINT_MAP,
  TRACK_WEIGHT_MAP,
} from "../constants/points/configure";

export function totalPointsFromMilestoneMap(
  milestoneMap: MilestoneMap
): number {
  return trackIds
    .map((trackId) => milestoneToPoints(milestoneMap[trackId], trackId))
    .reduce((sum, addend) => sum + addend, 0);
}

export const trackMilestonePoints = Object.fromEntries(
  trackIds.map((id) => [id, trackToMilestoneArray(id)])
);
export function trackToMilestoneArray(trackId: TrackId) {
  const trackWeight = TRACK_WEIGHT_MAP?.[trackId] ?? 1;
  if (typeof trackWeight === "number") {
    return DEFAULT_MILESTONE_POINT_MAP.map(
      (milestone) => milestone * trackWeight
    );
  } else {
    return trackWeight;
  }
}

export function milestoneToPoints(
  milestone: Milestone,
  trackId: TrackId
): number {
  return trackMilestonePoints?.[trackId]?.[milestone] ?? 0;
}

/**
 *
 * @param tracksAtMilestones an array of number representing the number of tracks at milestone skipping milestone 0
 *
 * eg: someone with  craft at 1 and communication at 1, leadership at 1 and web at 2 would call
 * estimateMinPoints(3, 1)
 *
 * @returns
 */
export function estimateMinPoints(...tracksAtMilestones: number[]) {
  return Math.floor(
    tracksAtMilestones.reduce(
      (acc, count, milestone) =>
        acc +
        (count % trackIds.length) *
          (averageTrackMilestonePoints[milestone] || 0),
      0
    )
  );
}

export const averageTrackMilestonePoints = averageTrackPoints();

export function averageTrackPoints() {
  return milestones
    .map((m) => {
      return avg(trackIds.map((tid) => trackMilestonePoints?.[tid]?.[m] ?? 0));
    })
    .slice(1);
}

function avg(array) {
  return (
    array.reduce((acc, value) => acc + value, 0) / array.filter(Boolean).length
  );
}
