import * as d3 from "d3";
import { CategoryId } from "./types";

export const categoryIds = Object.values(CategoryId);

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#00abc2", "#428af6", "#e1439f", "#e54552"]);
