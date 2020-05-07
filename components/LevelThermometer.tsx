import * as d3 from 'd3'
import React from 'react'
import { pointsToLevels, Tracks } from '../types/definitions'
import { categoryPointsFromMilestoneMap, maxLevel, categoryColorScale } from '../types/calculations'

const margins = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 10
}
const height = 150
const width = 550

type Props = {
  milestoneByTrack: Map<Tracks, number>,
}

class LevelThermometer extends React.Component<Props> {
  pointScale: any
  topAxisFn: any
  bottomAxisFn: any
  topAxis: any
  bottomAxis: any

  constructor(props: Props) {
    super(props)

    this.pointScale = d3.scaleLinear()
      .domain([0, maxLevel])
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
      .attr("y", 0)
      .attr("x", -25)
      .attr("transform", "rotate(90)")
      .attr("dy", ".35em")
      .style('font-size', '12px')
      .style('text-anchor', 'start')
    d3.select(this.bottomAxis).call(this.bottomAxisFn)
      .selectAll('text')
      .attr("y", 0)
      .attr("x", 10)
      .attr("transform", "rotate(90)")
      .attr("dy", ".35em")
      .style('font-size', '12px')
      .style('text-anchor', 'start')
  }

  rightRoundedRect(x: any, y: any, width: any, height: any, radius: any) {
    return "M" + x + "," + y
         + "h" + (width - radius)
         + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
         + "v" + (height - 2 * radius)
         + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
         + "h" + (radius - width)
         + "z";
  }
  render() {
    const categoryPoints = Array.from(categoryPointsFromMilestoneMap(this.props.milestoneByTrack))
      .map(x => {
        return { categoryId: x[0], points: x[1] };
      });
    const lastCategoryIndex = categoryPoints.length - 1;
    let cumulativePoints = 0;
    return ( lastCategoryIndex > -1 &&
      <figure>
        <style jsx>{`
          figure {
            margin: 0 0 0 -10px;
          }
          svg {
            width: ${width}px;
            height: ${height + 10}px;
          }
        `}</style>
        <svg>
          <g transform={`translate(${margins.left},${margins.top})`}>
            {categoryPoints.map((categoryPoint, i) => {
              const x = this.pointScale(cumulativePoints)
              const width = this.pointScale(cumulativePoints + categoryPoint.points) - x
              cumulativePoints += categoryPoint.points
              return (i != lastCategoryIndex ?
                <rect
                    key={categoryPoint.categoryId}
                    x={x}
                    y={0}
                    width={width}
                    height={height - margins.top - margins.bottom}
                    style={{fill: categoryColorScale(categoryPoint.categoryId), borderRight: "1px solid #000"}}
                    /> :
                <path
                    key={categoryPoint.categoryId}
                    d={this.rightRoundedRect(x, 0, width, height - margins.top - margins.bottom, 3)}
                    style={{fill: categoryColorScale(categoryPoint.categoryId)}}
                    />
              )
            })}
            <g ref={ref => this.topAxis = ref} className="top-axis"
                transform={`translate(0, -2)`}
                />
            <g ref={ref => this.bottomAxis = ref} className="bottom-axis"
                transform={`translate(0,${height - margins.top - margins.bottom + 1})`}
                />
          </g>
        </svg>
      </figure>
    );
  }
}

export default LevelThermometer
