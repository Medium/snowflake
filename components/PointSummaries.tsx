import { totalPointsFromMilestoneMap, maxLevel, levelFromMilestoneMap, pointsToNextLevelFromMilestoneMap } from '../types/calculations'
import { pointsToLevels, Tracks } from '../types/definitions'
import React from 'react'

type Props = {
  level: string,
  totalPoints: number,
  pointsToNextLevel: number | undefined,
  milestoneByTrack: Map<Tracks, number>
}

class PointSummaries extends React.Component<Props> {
  render() {
    const pointsToNextLevelValue = this.props.pointsToNextLevel === undefined ? 'N/A' : this.props.pointsToNextLevel;

    const blocks = [
      {
        label: 'Current level',
        value: this.props.level
      },
      {
        label: 'Total points',
        value: this.props.totalPoints
      },
      {
        label: 'Points to next level',
        value: pointsToNextLevelValue
      }
    ]

    return (
      <table>
        <style jsx>{`
          table {
            border-spacing: 3px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .point-summary-label {
            font-size: 12px;
            text-align: center;
            font-weight: normal;
            width: 120px;
          }
          .point-summary-value {
            width: 120px;
            background: #eee;
            font-size: 24px;
            font-weight: bold;
            line-height: 50px;
            border-radius: 2px;
            text-align: center;
          }
        `}</style>
        <tbody>
          <tr>
          {blocks.map(({label}, i) => (
            <th key={i} className="point-summary-label">
              {label}
            </th>
          ))}
          </tr>
          <tr>
          {blocks.map(({value}, i) => (
            <td key={i} className="point-summary-value">
              {value}
            </td>
          ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default PointSummaries
