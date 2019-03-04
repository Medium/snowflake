// @flow
import * as d3 from 'd3'

import FULLSTACK_TRACKS from './track-definitions/fullstack';
import OPS_TRACKS from './track-definitions/ops';

export const milestones = [0, 1, 2, 3, 4, 5]

export const domains = [
  'FULLSTACK',
  'OPS'
];

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
