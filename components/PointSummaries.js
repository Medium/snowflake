import { pointsToLevels, milestoneToPoints, trackIds, totalPointsFromMilestoneMap } from '../constants'
//import type { MilestoneMap } from '../constants'
import React from 'react'


class PointSummaries extends React.Component {
  render() {
    const totalPoints = totalPointsFromMilestoneMap(this.props.milestoneByTrack)

    let currentLevel, nextLevel

    let pointsForCurrentLevel = totalPoints
    while (!(currentLevel = pointsToLevels[pointsForCurrentLevel])) {
      pointsForCurrentLevel--
    }

    let pointsToNextLevel = 1
    while (!(nextLevel = pointsToLevels[totalPoints + pointsToNextLevel])) {
      pointsToNextLevel++
      if (pointsToNextLevel > 135) {
        pointsToNextLevel = 'N/A'
        break
      }
    }

    const blocks = [
      {
        label: 'Current level',
        value: currentLevel
      },
      {
        label: 'Total points',
        value: totalPoints
      },
      {
        label: 'Points to next level',
        value: pointsToNextLevel
      }
    ]

    return (
      <table>
        <style jsx>{`
          table {
            border-spacing: 3px;
            margin-bottom: 20px;
            margin-left: -3px;
            color: #FFFFFF;
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
