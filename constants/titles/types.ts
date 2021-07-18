import { CategoryMap, MilestoneMap, SpecialtyMap } from "../tracks";

export enum JobFamily {
  "SWE" = "Software",
  "SME" = "Managing",
  "SPE" = "Product",
}

export interface Job {
  label: string;
  family: JobFamily;
  level: number;
  minPoints: number;
  maxPoints: number;
  minSpecialtyPoints?: Partial<SpecialtyMap>;
  minCategoryPoints?: Partial<CategoryMap>;
  trackMilestoneRecommendations?: Partial<MilestoneMap>;
}
