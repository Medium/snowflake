import * as d3 from 'd3'
import { Categories, Tracks, milestonesToPoints, pointsToLevels, trackDefinitions, maxPointsFromCategory, levelToTitles } from './definitions'

const getEnumLabels = e =>
  Object.keys(e)
    .filter(x => isNaN(parseInt(x[0])));

const getEnumIds = e =>
  getEnumLabels(e)
    .map(x => e[x]);

const numericSort = (a,b) => a-b;

export const trackIds = getEnumIds(Tracks);

export const categoryIds = getEnumIds(Categories);

export const emptyTracks = trackIds
  .reduce<Map<Tracks, number>>((x: Map<Tracks, number>, next) => {
    const nextTrack = next;
    x.set(nextTrack, 0);
    return x;
  }, new Map<Tracks, number>());

export const highestMilestone: number = Object.keys(milestonesToPoints)
  .map(x => parseInt(x))
  .filter(x => !(x === undefined))
  .sort(numericSort)
  .reverse()
  [0] || 0;

export const milestones = Array.from({length: highestMilestone+1},(v,k)=>k);

export const milestoneToPoints = (milestone: number): number => 
  Array.from(Object.entries(milestonesToPoints))
    .find(x => x[0] === milestone.toString())
    [1];

export const maxLevel = Object.keys(pointsToLevels)
  .map(x => parseInt(x))
  .filter(x => !(x === undefined))
  .sort(numericSort)
  .reverse()
  [0] || 0;

export const categoryPointsFromMilestoneMap = (milestoneMap: Map<Tracks, number>): Map<Categories, number> => {
  let pointsByCategory = new Map<Categories, number>();

  Array.from(milestoneMap.entries()).forEach(mapEntry => {
    const [trackId, milestone] = mapEntry;

    const trackDefinition = trackDefinitions.find(x => Tracks[x.track] == Tracks[trackId])
    if (!(trackDefinition === undefined)) {
      const categoryId = trackDefinition.category;
  
      const currentPoints = pointsByCategory.get(categoryId) || 0
      const newPoints = currentPoints + milestoneToPoints(milestone);
      const adjustedNewPoints = newPoints > maxPointsFromCategory ? maxPointsFromCategory : newPoints;

      pointsByCategory.set(categoryId, adjustedNewPoints)
    }
  });

  return pointsByCategory;
};
    
export const totalPointsFromMilestoneMap = (milestoneMap: Map<Tracks, number>): number =>
  Array.from(categoryPointsFromMilestoneMap(milestoneMap))
    .map(x => x[1])
    .reduce((sum, addend) => (sum + addend), 0);

export const levelFromMilestoneMap = (milestoneMap: Map<Tracks, number>): string => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);
  const levelPointRequirements = Object.keys(pointsToLevels)
    .map(x => parseInt(x))
    .sort(numericSort)
    .reverse();

  let result = '0';
  for (let requiredPoints of levelPointRequirements) {
    if (totalPoints >= requiredPoints) {
      result = pointsToLevels[requiredPoints.toString()];
      break;
    }
  }
  return result;
};

export const eligibleTitles = (milestoneMap: Map<Tracks, number>): string[] => {
  const level = levelFromMilestoneMap(milestoneMap);
  const baseLevel = level.indexOf(".") != -1
    ? parseInt(level.substring(0, level.indexOf(".")))
    : parseInt(level);
  const titleLevelRequirements = Object.keys(levelToTitles)
  .map(x => parseInt(x))
  .sort(numericSort)
  .reverse();

let result = [];
  for (let requiredLevel of titleLevelRequirements) {
    if (baseLevel >= requiredLevel) {
      result = levelToTitles[requiredLevel];
      break;
    }
  }
  return result;
};

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])
