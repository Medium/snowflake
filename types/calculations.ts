import * as d3 from 'd3'
import { Categories, Tracks, titles, milestonesToPoints, pointsToLevels, trackDefinitions } from './definitions'

const getEnumLabels = e =>
  Object.keys(e)
    .filter(x => isNaN(parseInt(x[0])));

const getEnumIds = e =>
  getEnumLabels(e)
    .map(x => e[x]);

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
  .sort()
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
  .sort()
  .reverse()
  [0] || 0;

export const categoryPointsFromMilestoneMap = (milestoneMap: Map<Tracks, number>): Map<Categories, number> => {
  let pointsByCategory = new Map<Categories, number>();
  Array.from(milestoneMap.entries()).forEach(mapEntry => {
    const [trackId, milestone] = mapEntry;
    const trackDefinition = trackDefinitions.find(x => x.track == trackId)
    if (!(trackDefinition === undefined)) {
      const category = trackDefinition.category;
      const currentPoints = pointsByCategory.get(category) || 0
      pointsByCategory.set(category, currentPoints + milestoneToPoints(milestone))
    }
  });
  return pointsByCategory;
};
    
export const totalPointsFromMilestoneMap = (milestoneMap: Map<Tracks, number>): number =>
  Array.from(milestoneMap.values())
    .map(x => milestoneToPoints(x))
    .reduce((sum, addend) => (sum + addend), 0);

export const eligibleTitles = (milestoneMap: Map<Tracks, number>): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)
  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
};

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])
