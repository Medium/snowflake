// @flow

import * as d3 from 'd3'
import { pointsToLevels, categoryPointsFromMilestoneMap, categoryColorScale, categoryIds } from '../constants'
import React from 'react'
import type { MilestoneMap } from '../constants'

const margins = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 0
}
const height = 100
const width = 500

type Props = {
  milestoneByTrack: MilestoneMap,
}

class LevelThermometer extends React.Component<Props> {
  pointScale: any
  topAxisFn: any
  bottomAxisFn: any
  topAxis: *
  bottomAxis: *

  constructor(props: *) {
    super(props)

    this.pointScale = d3.scaleLinear()
      .domain([0, 135]) // TK magic number
      .rangeRound([0, width - margins.left - margins.right]);

    this.topAxisFn = d3.axisTop()
      .scale(this.pointScale)
      .tickValues(Object.keys(pointsToLevels))
      .tickFormat(points => pointsToLevels[points])

    this.bottomAxisFn = d3.axisBottom()
      .scale(this.pointScale)
      .tickValues(Object.keys(pointsToLevels))
  }

  componentDidMount() {
    d3.select(this.topAxis).call(this.topAxisFn)
      .selectAll('text')
      .style('text-anchor', 'start')
    d3.select(this.bottomAxis).call(this.bottomAxisFn)
      .selectAll('text')
      .style('text-anchor', 'start')
  }

  render() {
    let categoryPoints = categoryPointsFromMilestoneMap(this.props.milestoneByTrack)
    let cumulativePoints = 0
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 0;
          }
          svg {
            width: ${width}px;
            height: ${height}px;
          }
        `}</style>
        <svg>
          <g transform={`translate(${margins.left},${margins.top})`}>
            {categoryPoints.map((categoryPoint) => {
              const x = this.pointScale(cumulativePoints)
              const width = this.pointScale(cumulativePoints + categoryPoint.points) - x
              cumulativePoints += categoryPoint.points
              return <rect
                  key={categoryPoint.categoryId}
                  x={x}
                  y={0}
                  width={width}
                  height={height - margins.top - margins.bottom}
                  style={{fill: categoryColorScale(categoryPoint.categoryId)}}
                  rx={3}
                  ry={3}
                  />
            })}
            <g ref={ref => this.topAxis = ref} className="top-axis"
                transform={`translate(0, -4)`}/>
            <g ref={ref => this.bottomAxis = ref} className="bottom-axis"
                transform={`translate(0,${height - margins.top - margins.bottom + 3})`}/>
          </g>
        </svg>
      </figure>
    )
  }
}

export default LevelThermometer
