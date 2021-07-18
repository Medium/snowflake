import * as d3 from "d3";
import { JobFamily } from "../titles/types";
import { Category, CategoryId } from "./types";

export const categories: Record<CategoryId, Category> = {
  [CategoryId.STR]: {
    displayName: "Strength",
    description: `The tracks that mark your technical proficiency in your job.`,
    jobDescriptions: {
      [JobFamily.SWE]: `As a software engineer it marks what you can build, techniques, and specialties your have mastered.`,
    },
  },
  [CategoryId.DEX]: {
    displayName: "Dexterity",
    description: `The tracks that mark your ability to execute your technical proficiency.`,
  },
  [CategoryId.CHA]: {
    displayName: "Charisma",
    description: `The tracks that marks your alignment with the company's employee values and your contribution to its culture and community.`,
  },
  [CategoryId.WIS]: {
    displayName: "Wisdom",
    description: `The tracks that mark your experience, learning, problem solving, and decision making. This is the foundation that affect your problem solving capacity.`,
  },
};

export const categoryIds = Object.values(CategoryId);

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  // .range(["#00abc2", "#428af6", "#e1439f", "#a44dff"]);
  .range(["#58a5f5", "#7a7be0", "#e1439f", "#51d790", "#f84b30"]);
