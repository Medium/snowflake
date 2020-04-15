// @flow

import { pointsToLevels, milestoneToPoints, trackIds, totalPointsFromMilestoneMap, executionGate, skillsGate, executingPointsFromMilestoneMap } from '../constants'
import type { MilestoneMap } from '../constants'
import React from 'react'

type Props = {
  milestoneByTrack: MilestoneMap
}

class PointSummaries extends React.Component<Props> {
  render() {
    const totalPoints = totalPointsFromMilestoneMap(this.props.milestoneByTrack)
    const executingPoints = executingPointsFromMilestoneMap(this.props.milestoneByTrack)
    const skillPoints = totalPoints - executingPoints

    let useNext, currentLevel, color, nextLevel, levelStatus, executingStatus, skillsStatus, skillsRemaining
    let nextExecutionMilestone, nextSkillsMilestone

    useNext = false
    Object.entries(executionGate).map((points) => {
          if (executingPoints > points[0]) {
            executingStatus = points[1]
            useNext = true
          }
          else if (useNext) {
            nextExecutionMilestone = points[0]
            useNext = false
          }
        }
    )

    useNext = false
    Object.entries(skillsGate).map((points, index) => {
        if (skillPoints > points[0]) {
            skillsStatus = points[1]
            useNext = true
        }
        else if (useNext) {
            nextSkillsMilestone = points[0]
            useNext = false
        }
      }
    )

    let pointsForCurrentLevel = totalPoints

    while (!(currentLevel = pointsToLevels[pointsForCurrentLevel])) {
      pointsForCurrentLevel--
    }
    let pointsToNextLevel = 1
    while (!(nextLevel = pointsToLevels[totalPoints + pointsToNextLevel])) {
        pointsToNextLevel++
        if (pointsToNextLevel > 30) {
            pointsToNextLevel = 'N/A'
            break
        }
    }

    let originalLevel = currentLevel

    color = '#a7d1bc'

    if (parseInt(originalLevel) > parseInt(executingStatus)) {
      currentLevel = executingStatus
      levelStatus = 'Execution training'
      color = '#9fc855'
    }
    if (parseInt(originalLevel) > parseInt(skillsStatus)) {
      currentLevel = skillsStatus
      levelStatus += ' Skills training'
      color = '#11a9a1'
      if (parseInt(originalLevel) > parseInt(executingStatus)) {
        color = '#fb9900'
      }
    }
    //['#9fc855', '#11a9a1', '#fb6500', '#a7d1bc']
    const blocks = [
      {
        label: 'Current level',
        value: currentLevel,
        status: levelStatus,
      },
      {
        label: 'Total points',
        value: totalPoints,
        status: 'Next level: ' + pointsToNextLevel
      },
      {
        label: 'Execution',
        value: executingPoints,
        status: 'Next milestone: ' + nextExecutionMilestone
      },
      {
        label: 'Skills',
        value: skillPoints,
        status: 'Next milestone: ' + nextSkillsMilestone
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
            height: 24px;
            font-weight: bold;
            background-color: #ccc;
          }
          .point-summary-status {
            font-size: 12px;
            text-align: center;
            font-weight: normal;
            width: 120px;
            height: 32px;
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
                <th key={i} className="point-summary-value">
                  {value}
                </th>
            ))}
          </tr>
          <tr>
              {blocks.map(({status}, i) => (
                  <td key={i} className="point-summary-status" style={{"backgroundColor": color}}>
                      {status}
                  </td>
              ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default PointSummaries
