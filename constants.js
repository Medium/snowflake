// @flow
import * as d3 from 'd3'
import trackData from './data.json'
export type TrackId = 'MEDIAWIKI' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MEDIAWIKI': Milestone,
  'WEB_CLIENT': Milestone,
  'SERVERS': Milestone,
  'FOUNDATIONS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 9
    case 5: return 12
    default: return 0
  }
}
export const titles = [
  {label: 'Junior Software Engineer', minPoints: 0, maxPoints: 24},
  {label: 'Software Engineer', minPoints: 25, maxPoints: 53},
  {label: 'Senior Software Engineer', minPoints: 54, maxPoints: 87},
  {label: 'Tech Leader', minPoints: 88, maxPoints: 115},
  {label: 'Engineering Manager', minPoints: 88, maxPoints: 115},
  {label: 'Software Architect', minPoints: 116},
  {label: 'Head of Engineering', minPoints: 116}
]

export const pointsToLevels = {
  '0': '1.1',
  '9': '1.2',
  '18': '1.3',
  '25': '2.1',
  '38': '2.2',
  '51': '2.3',
  '64': '3.1',
  '72': '3.2',
  '80': '3.3',
  '98': '4.1',
  '110': '4.2',
  '130': '5.1',
  '160': '5.2'
}

export const maxLevel = 192

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MEDIAWIKI': Track,
  'WEB_CLIENT': Track,
  'SERVERS': Track,
  'FOUNDATIONS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

console.log(trackData)
export const tracks: Tracks = trackData;

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#007DA4', '#C4D600', '#FB8B24', '#D90368'])


export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
