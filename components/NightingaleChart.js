import React from 'react'
import * as d3 from 'd3'
import { trackIds, milestones, tracks, categoryColorScale } from '../constants'

const width = 400
const arcMilestones = milestones.slice(1) // we'll draw the '0' milestone with a circle, not an arc.

class NightingaleChart extends React.Component {
  colorScale
  radiusScale
  arcFn

  constructor(props) {
    super(props)

    this.colorScale = d3.scaleSequential(d3.interpolateWarm)
      .domain([0, 5])

    this.radiusScale = d3.scaleBand()
      .domain(arcMilestones)
      .range([.15 * width, .45 * width])
      .paddingInner(0.1)

    this.arcFn = d3.arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth())
      .startAngle(- Math.PI / trackIds.length)
      .endAngle(Math.PI / trackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(.45 * width)
      .cornerRadius(2)
  }

  render() {
    const currentMilestoneId = this.props.milestoneByTrack[this.props.focusedTrackId]
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 0;
          }
          svg {
            width: ${width}px;
            height: ${width}px;
          }
          .track-milestone {
            fill: #eee;
            cursor: pointer;
          }
          .track-milestone-current, .track-milestone:hover {
            stroke: #000;
            stroke-width: 3px;
            stroke-linejoin: round;
          }
        `}</style>
        <svg>
          <g transform={`translate(${width/2},${width/2}) rotate(-33.75)`}>
            {trackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId
              return (
                <g key={trackId} transform={`rotate(${i * 360 / trackIds.length})`}>
                  {arcMilestones.map((milestone) => {
                    const isCurrentMilestone = isCurrentTrack && milestone == currentMilestoneId
                    const isMet = this.props.milestoneByTrack[trackId] >= milestone || milestone == 0
                    return (
                      <path
                          key={milestone}
                          className={'track-milestone ' + (isMet ? 'is-met ' : ' ') + (isCurrentMilestone ? 'track-milestone-current' : '')}
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
                      className={"track-milestone " + (isCurrentTrack && !currentMilestoneId ? "track-milestone-current" : "")}
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
