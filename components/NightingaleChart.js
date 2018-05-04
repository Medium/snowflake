// @flow

import { reduce } from 'lodash'
import React from 'react'
import * as d3 from 'd3'
import { milestones, categoryColorScale } from '../constants'
import type { Tracks } from '../constants'
import type { TrackId, Milestone, MilestoneMap } from '../constants'
import { gray2 } from '../palette'

const width = 400

type Props = {
  label: string,
  tracks: Tracks,
  milestoneByTrack: MilestoneMap,
  focusedTrackId?: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void,
  trackIds: Array<string>
}

let arcMilestones = [];
class NightingaleChart extends React.Component<Props> {
  colorScale: any
  radiusScale: any
  arcFn: any

  constructor(props: Props) {
    super(props)

    const maxNumMilestones = reduce(props.tracks, (max, category) => {
      return Math.max(max, category.milestones.length)
    }, 0)
    arcMilestones = [...new Array(maxNumMilestones)].map((_, i) => i)

    this.colorScale = d3.scaleSequential(d3.interpolateWarm)
      .domain([0, 5])

    this.radiusScale = d3.scaleBand()
      .domain(arcMilestones)
      .range([.15 * width, .45 * width])
      .paddingInner(0.1)

    this.arcFn = d3.arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth())
      .startAngle(- Math.PI / this.props.trackIds.length)
      .endAngle(Math.PI / this.props.trackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(.45 * width)
      .cornerRadius(2)
  }

  render() {
    const { label, trackIds, tracks } = this.props;
    const currentMilestoneId = this.props.focusedTrackId && this.props.milestoneByTrack[this.props.focusedTrackId]
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 0;
            padding: 7.5px;
          }
          svg {
            width: ${width}px;
            height: ${width}px;
          }
          .track-milestone {
            fill: #eee;
            cursor: pointer;
          }
          .track-milestone-disabled {
            fill: ${gray2};
          }
          .track-milestone-current, .track-milestone:hover {
            stroke: #000;
            stroke-width: 4px;
            stroke-linejoin: round;
          }
        `}</style>
        <h2>{label}</h2>
        <svg>
          <g transform={`translate(${width/2},${width/2}) rotate(-33.75)`}>
            {trackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId
              const numMilestones = tracks[trackId].milestones.length;

              return (
                <g key={trackId} transform={`rotate(${i * 360 / trackIds.length})`}>
                  {arcMilestones.map((milestone, i) => {
                    const outOfRange = i > numMilestones - 1;

                    const isCurrentMilestone = isCurrentTrack && milestone == currentMilestoneId
                    const isMet = this.props.milestoneByTrack[trackId] >= milestone + 1  //|| milestone == 0

                    return (
                      <path
                          key={milestone}
                          className={outOfRange ? 'track-milestone-disabled' : 'track-milestone ' + (isMet ? 'is-met ' : ' ')}
                          onClick={() => this.props.handleTrackMilestoneChangeFn(trackId, milestone)}
                          d={this.arcFn(milestone)}
                          style={{fill: isMet ? categoryColorScale(tracks[trackId].category) : undefined}} />
                    )
                  })}
                  <circle
                      r="8"
                      cx="0"
                      cy="-50"
                      style={{fill: categoryColorScale(tracks[trackId].category)}}
                      className={"track-milestone " + (isCurrentTrack ? "track-milestone-current" : "")}
                      onClick={() => this.props.handleTrackMilestoneChangeFn(trackId, 0)} />
                </g>
            )})}
          </g>
        </svg>
      </figure>
    )
  }
}

export default NightingaleChart
