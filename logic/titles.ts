import { Job, jobs } from "../constants/titles";
import { MilestoneMap, SpecialtyId } from "../constants/tracks";
import { totalPointsFromMilestoneMap } from "./points";

export const eligibleTitles = (
  milestoneMap: MilestoneMap,
  specialties: SpecialtyId[] = []
): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap, specialties);

  return Object.values(jobs)
    .filter(
      (title) =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map((title) => title.label);
};

export const getTitleByLabel = (label: string): Job => {
  return jobs.find((title) => title.label === label);
};
