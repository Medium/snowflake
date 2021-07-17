import { estimateMinPoints } from "../../logic/points";
import { levelsToPoints } from "../points";
import { CategoryId, TrackId } from "../tracks";
import { JobFamily, Job } from "./types";

export const jobs: Job[] = [
  {
    label: "Engineer I",
    level: 1,
    family: JobFamily.SE,
    minPoints: 0,
    maxPoints: levelsToPoints["2.2"],
    trackMilestoneRecommendations: {
      [TrackId.SOFTWARE_ENGINEERING]: 1,
      [TrackId.BUSINESS_ACUMEN]: 1,
      [TrackId.PROJECT_MANAGEMENT]: 1,
      [TrackId.CRAFT]: 1,
    },
  },
  {
    label: "Engineer II",
    level: 2,
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.1"],
    maxPoints: levelsToPoints["3.2"],
    trackMilestoneRecommendations: {
      [TrackId.SOFTWARE_ENGINEERING]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
      [TrackId.CRAFT]: 2,
      [TrackId.BUSINESS_ACUMEN]: 2,
    },
  },
  {
    label: "Senior Engineer",
    level: 3,
    family: JobFamily.SE,
    minPoints: levelsToPoints["3.1"],
    maxPoints: levelsToPoints["4.2"],
    trackMilestoneRecommendations: {
      [TrackId.SOFTWARE_ENGINEERING]: 3,
      [TrackId.PROJECT_MANAGEMENT]: 3,
      [TrackId.CRAFT]: 3,
      [TrackId.COMMUNICATION]: 2,
      [TrackId.BUSINESS_ACUMEN]: 2,
    },
  },
  {
    label: "Engineer Lead",
    level: 3,
    family: JobFamily.SE,
    minPoints: levelsToPoints["3.1"],
    maxPoints: levelsToPoints["4.2"],
    minCategoryPoints: {
      [CategoryId.STR]: estimateMinPoints(0, 0, 2),
      [CategoryId.DEX]: estimateMinPoints(0, 0, 2),
    },
  },
  {
    label: "Staff Engineer",
    level: 4,
    family: JobFamily.SE,
    minPoints: levelsToPoints["4.1"],
    maxPoints: levelsToPoints["5.1"],
  },
  {
    label: "Engineer Manager",
    level: 4,
    family: JobFamily.ME,
    minPoints: levelsToPoints["4.1"],
    maxPoints: levelsToPoints["5.1"],
  },
  {
    label: "Senior Staff Engineer",
    level: 5,
    family: JobFamily.SE,
    minPoints: levelsToPoints["5.1"],
    maxPoints: levelsToPoints["6.1"],
  },
  {
    label: "Senior Engineer Manager",
    level: 5,
    family: JobFamily.SE,
    minPoints: levelsToPoints["5.1"],
    maxPoints: levelsToPoints["6.1"],
  },
  {
    label: "Principle Engineer",
    level: 6,
    family: JobFamily.SE,
    minPoints: levelsToPoints["6.1"],
    maxPoints: levelsToPoints["7.1"],
  },
  {
    label: "Engineer Director",
    level: 6,
    family: JobFamily.ME,
    minPoints: levelsToPoints["6.1"],
    maxPoints: levelsToPoints["7.1"],
  },
  {
    label: "Distinguished Engineer",
    level: 7,
    family: JobFamily.SE,
    minPoints: levelsToPoints["7.1"],
    maxPoints: levelsToPoints["8.1"],
  },
  {
    label: "VP of Engineering",
    level: 7,
    family: JobFamily.ME,
    minPoints: levelsToPoints["7.1"],
    maxPoints: levelsToPoints["8.1"],
  },
];
