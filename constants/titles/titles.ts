import { estimateMinPoints } from "../../logic/points";
import { levelsToPoints } from "../points/points";
import { CategoryId, TrackId } from "../tracks";
import { JobFamily, JobTitle } from "./types";

export const titles: JobTitle[] = [
  {
    label: "Engineer I",
    family: JobFamily.SE,
    minPoints: 0,
    maxPoints: levelsToPoints["2.1"],
    trackMilestoneRecommendations: {
      [TrackId.BUSINESS_ACUMEN]: 1,
      [TrackId.PROJECT_MANAGEMENT]: 1,
      [TrackId.CRAFT]: 1,
    },
  },
  {
    label: "Engineer I - Mobile",
    family: JobFamily.SE,
    minPoints: levelsToPoints["1.1"],
    maxPoints: levelsToPoints["2.1"],
    trackMilestoneRecommendations: {
      [TrackId.MOBILE]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
      [TrackId.CRAFT]: 1,
    },
  },
  {
    label: "Engineer I - Web",
    family: JobFamily.SE,
    minPoints: levelsToPoints["1.1"],
    maxPoints: levelsToPoints["2.1"],
    trackMilestoneRecommendations: {
      [TrackId.WEB_CLIENT]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
      [TrackId.CRAFT]: 1,
    },
  },
  {
    label: "Engineer I - Frontend",
    family: JobFamily.SE,
    minPoints: levelsToPoints["1.1"],
    maxPoints: levelsToPoints["2.1"],
    trackMilestoneRecommendations: {
      [TrackId.MOBILE]: 2,
      [TrackId.WEB_CLIENT]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
      [TrackId.CRAFT]: 1,
    },
  },
  {
    label: "Engineer I - Backend",
    family: JobFamily.SE,
    minPoints: levelsToPoints["1.1"],
    maxPoints: levelsToPoints["2.1"],
    trackMilestoneRecommendations: {
      [TrackId.FOUNDATIONS]: 2,
      [TrackId.SERVERS]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
      [TrackId.CRAFT]: 1,
    },
  },
  {
    label: "Engineer I - FullStack",
    family: JobFamily.SE,
    minPoints: levelsToPoints["1.1"],
    maxPoints: levelsToPoints["2.1"],
    trackMilestoneRecommendations: {
      [TrackId.MOBILE]: 2,
      [TrackId.WEB_CLIENT]: 2,
      [TrackId.FOUNDATIONS]: 2,
      [TrackId.SERVERS]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
      [TrackId.CRAFT]: 1,
    },
  },
  {
    label: "Engineer II",
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.1"],
    maxPoints: levelsToPoints["3.1"],
    trackMilestoneRecommendations: {
      [TrackId.PROJECT_MANAGEMENT]: 3,
      [TrackId.CRAFT]: 2,
      [TrackId.BUSINESS_ACUMEN]: 2,
    },
  },
  {
    label: "Engineer II - Mobile",
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.1"],
    maxPoints: levelsToPoints["3.1"],
    trackMilestoneRecommendations: {
      [TrackId.MOBILE]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
    },
  },
  {
    label: "Engineer II - Web",
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.1"],
    maxPoints: levelsToPoints["3.1"],

    trackMilestoneRecommendations: {
      [TrackId.WEB_CLIENT]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
    },
  },
  {
    label: "Engineer II - Frontend",
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.2"],
    maxPoints: levelsToPoints["3.1"],
    trackMilestoneRecommendations: {
      [TrackId.MOBILE]: 2,
      [TrackId.WEB_CLIENT]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
    },
  },
  {
    label: "Engineer II - Backend",
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.1"],
    maxPoints: levelsToPoints["3.1"],
    trackMilestoneRecommendations: {
      [TrackId.FOUNDATIONS]: 2,
      [TrackId.SERVERS]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
    },
  },
  {
    label: "Engineer II - DevOps",
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.1"],
    maxPoints: levelsToPoints["3.1"],
    trackMilestoneRecommendations: {
      [TrackId.FOUNDATIONS]: 3,
      [TrackId.SERVERS]: 1,
      [TrackId.PROJECT_MANAGEMENT]: 2,
    },
  },
  {
    label: "Engineer II - FullStack",
    family: JobFamily.SE,
    minPoints: levelsToPoints["2.1"],
    maxPoints: levelsToPoints["3.1"],
    trackMilestoneRecommendations: {
      [TrackId.MOBILE]: 2,
      [TrackId.WEB_CLIENT]: 2,
      [TrackId.FOUNDATIONS]: 2,
      [TrackId.SERVERS]: 2,
      [TrackId.PROJECT_MANAGEMENT]: 2,
    },
  },
  {
    label: "Senior Engineer",
    family: JobFamily.SE,
    minPoints: levelsToPoints["3.1"],
    maxPoints: levelsToPoints["4.1"],
    minCategoryPoints: {
      [CategoryId.BUILD]: estimateMinPoints(0, 0, 2),
      [CategoryId.EXECUTE]: estimateMinPoints(0, 0, 2),
    },
  },
  {
    label: "Staff Engineer",
    family: JobFamily.SE,
    minPoints: levelsToPoints["4.1"],
    maxPoints: levelsToPoints["5.1"],
  },
  {
    label: "Engineer Lead",
    family: JobFamily.ME,
    minPoints: levelsToPoints["4.1"],
    maxPoints: levelsToPoints["5.1"],
  },
  {
    label: "Senior Staff Engineer",
    family: JobFamily.SE,
    minPoints: levelsToPoints["5.1"],
    maxPoints: levelsToPoints["6.1"],
  },
  {
    label: "Engineer Manager",
    family: JobFamily.ME,
    minPoints: levelsToPoints["5.1"],
    maxPoints: levelsToPoints["6.1"],
  },
  {
    label: "Principle Engineer",
    family: JobFamily.SE,
    minPoints: levelsToPoints["6.1"],
    maxPoints: levelsToPoints["7.1"],
  },
  {
    label: "Engineer Director",
    family: JobFamily.ME,
    minPoints: levelsToPoints["6.1"],
    maxPoints: levelsToPoints["7.1"],
  },
  {
    label: "Distinguished Engineer",
    family: JobFamily.SE,
    minPoints: levelsToPoints["7.1"],
    maxPoints: levelsToPoints["8.1"],
  },
  {
    label: "VP of Engineering",
    family: JobFamily.ME,
    minPoints: levelsToPoints["7.1"],
    maxPoints: levelsToPoints["8.1"],
  },
];
