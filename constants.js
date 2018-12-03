// @flow
import * as d3 from 'd3'
import  WEB_CLIENT from './trackData/frontend.json'
import SERVERS from './trackData/backend.json'
import FOUNDATIONS from './trackData/foundations.json'
import PROJECT_MANAGEMENT from './trackData/projectManagement.json'
import COMMUNICATION from './trackData/communication.json'
import CRAFT from './trackData/craft.json'
import INITIATIVE from './trackData/initiative.json'
import CAREER_DEVELOPMENT from './trackData/careerDevelopment.json'
import ORG_DESIGN from './trackData/orgDesign.json'
import WELLBEING from './trackData/wellbeing.json'
import ACCOMPLISHMENT from './trackData/accomplishment.json'
import MENTORSHIP from './trackData/mentorship.json'
import EVANGELISM from './trackData/evangelism.json'
import RECRUITING from './trackData/recruiting.json'
import COMMUNITY from './trackData/community.json'

export type TrackId = 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
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

export const tracks: Tracks = {
                                WEB_CLIENT, SERVERS, FOUNDATIONS, 
                                PROJECT_MANAGEMENT, COMMUNICATION, CRAFT, INITIATIVE, 
                                CAREER_DEVELOPMENT, ORG_DESIGN, WELLBEING, ACCOMPLISHMENT,
                                MENTORSHIP, EVANGELISM, RECRUITING, COMMUNITY
                              };

 
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
    if (milestone === 0){
      pointsByCategory.set(categoryId, currentPoints + 0)
    }
    else {
      pointsByCategory.set(categoryId, currentPoints + tracks[trackId].milestones[milestone - 1].points)
    }
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number => {
  var sum = 0;
  trackIds.map(trackId => {
    const milestone = milestoneMap[trackId]
    if (milestone > 0) {
      sum = sum + tracks[trackId].milestones[milestone-1].points
    }
  })
  return sum;
}


export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#007DA4', '#C4D600', '#FB8B24', '#D90368'])


export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)
  var test = titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)

    let categoryPoints = categoryPointsFromMilestoneMap(milestoneMap)

    if (categoryPoints[0].points <= 23)
    {
      test = test.filter(e => e !== "Tech Leader");
      test = test.filter(e => e !== "Software Architect");
    }

    console.log(test)

    return test;
}
