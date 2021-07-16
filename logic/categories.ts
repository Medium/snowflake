import {
  categoryTrackIds,
  MilestoneMap,
  specialties,
  SpecialtyId,
} from "../constants/tracks";
import { milestoneToPoints, totalPointsFromMilestoneMap } from "./points";

export function categoryPointsFromMilestoneMap(
  milestoneMap: MilestoneMap,
  specialties: SpecialtyId[] = []
) {
  return categoryTrackIds.map(({ categoryId, trackIds }) => {
    const points = totalPointsFromMilestoneMap(
      milestoneMap,
      specialties,
      trackIds
    );
    return { categoryId, points };
  });
}
