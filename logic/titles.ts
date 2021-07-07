import { JobTitle, titles } from "../constants/titles";
import { MilestoneMap } from "../constants/tracks";
import { totalPointsFromMilestoneMap } from "./points";

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return Object.values(titles)
    .filter(
      (title) =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map((title) => title.label);
};

export const getTitleByLabel = (label: string): JobTitle => {
  return titles.find((title) => title.label === label);
};
