// @flow

import * as d3 from 'd3';
import React from 'react';
import {
  pointsToLevels, categoryPointsFromMilestoneMap, categoryColorScale,
} from '../data/constants';
import type { MilestoneMap } from '../data/constants';

const margins = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 10,
};
const height = 150;
const width = 550;

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
    super(props);

    this.pointScale = d3.scaleLinear()
      .domain([0, 135])
      .rangeRound([0, width - margins.left - margins.right]);

    this.topAxisFn = d3.axisTop()
      .scale(this.pointScale)
      .tickValues(Object.keys(pointsToLevels))
      .tickFormat((points) => pointsToLevels[points]);

    this.bottomAxisFn = d3.axisBottom()
      .scale(this.pointScale)
      .tickValues(Object.keys(pointsToLevels));
  }

  componentDidMount() {
    d3.select(this.topAxis).call(this.topAxisFn)
      .selectAll('text')
      .attr('y', 0)
      .attr('x', -25)
      .attr('transform', 'rotate(90)')
      .attr('dy', '.35em')
      .style('font-size', '12px')
      .style('text-anchor', 'start');
    d3.select(this.bottomAxis).call(this.bottomAxisFn)
      .selectAll('text')
      .attr('y', 0)
      .attr('x', 10)
      .attr('transform', 'rotate(90)')
      .attr('dy', '.35em')
      .style('font-size', '12px')
      .style('text-anchor', 'start');
  }

  render() {
    const { milestoneByTrack } = this.props;

    const rightRoundedRect = (x, y, w, h, radius) => (
      `M${x},${y
      }h${w - radius
      }a${radius},${radius} 0 0 1 ${radius},${radius
      }v${h - 2 * radius
      }a${radius},${radius} 0 0 1 ${-radius},${radius
      }h${radius - w
      }z`
    );
    const categoryPoints = categoryPointsFromMilestoneMap(milestoneByTrack);
    let lastCategoryIndex = 0;
    categoryPoints.forEach((categoryPoint, i) => {
      if (categoryPoint.points) lastCategoryIndex = i;
    });
    let cumulativePoints = 0;

    return (
      <figure>
        <style jsx>
          {`
          figure {
            margin: 0 0 0 -10px;
          }
          svg {
            width: ${width}px;
            height: ${height + 10}px;
          }
        `}
        </style>
        <svg>
          <g transform={`translate(${margins.left},${margins.top})`}>
            {categoryPoints.map((categoryPoint, i) => {
              const x = this.pointScale(cumulativePoints);
              const w = this.pointScale(cumulativePoints + categoryPoint.points) - x;
              cumulativePoints += categoryPoint.points;
              return (i !== lastCategoryIndex
                ? (
                  <rect
                    key={categoryPoint.categoryId}
                    x={x}
                    y={0}
                    width={w}
                    height={height - margins.top - margins.bottom}
                    style={{ fill: categoryColorScale(categoryPoint.categoryId), borderRight: '1px solid #000' }}
                  />
                ) : (
                  <path
                    key={categoryPoint.categoryId}
                    d={rightRoundedRect(x, 0, w, height - margins.top - margins.bottom, 3)}
                    style={{ fill: categoryColorScale(categoryPoint.categoryId) }}
                  />
                ));
            })}
            <g
              ref={(ref) => { this.topAxis = ref; }}
              className="top-axis"
              transform="translate(0, -2)"
            />
            <g
              ref={(ref) => { this.bottomAxis = ref; }}
              className="bottom-axis"
              transform={`translate(0,${height - margins.top - margins.bottom + 1})`}
            />
          </g>
        </svg>
      </figure>
    );
  }
}

export default LevelThermometer;
