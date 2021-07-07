import {
  categoryIds,
  MilestoneMap,
  trackIds,
  tracks,
} from "../constants/tracks";
import { milestoneToPoints } from "./points";

export function categoryPointsFromMilestoneMap(milestoneMap: MilestoneMap) {
  let pointsByCategory = new Map();
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    let currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone, trackId)
    );
  });
  return Array.from(categoryIds.values()).map((categoryId) => {
    const points = pointsByCategory.get(categoryId) || 0;
    return { categoryId, points };
  });
}
