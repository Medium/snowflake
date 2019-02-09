// @flow
import * as d3 from 'd3'

import FULLSTACK_TRACKS from './track-definitions/fullstack';
import OPS_TRACKS from './track-definitions/ops';

export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
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

export const domains = [
  'FULLSTACK',
  'OPS'
];

export type DomainId = 'FULLSTACK' | 'OPS'

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

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
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
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

const allTracks = {
  FULLSTACK: FULLSTACK_TRACKS,
  OPS: OPS_TRACKS
}

export const getTracksForDomain = (domainId: DomainId) => allTracks[domainId] || FULLSTACK_TRACKS;

export const getCategoryIdsFromTracks = tracks => {
  const trackIds = Object.keys(tracks);

  return trackIds.reduce((set, trackId) => {
    set.add(tracks[trackId].category)
    return set
  }, new Set())
}

export const getCategoryColorScaleFromTracks = tracks => {
  const categoryIds = getCategoryIdsFromTracks(tracks);

  return d3.scaleOrdinal()
    .domain(categoryIds)
    .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])
}
