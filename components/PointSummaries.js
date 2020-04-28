// @flow

import { pointsToLevels, milestoneToPoints, trackIds, totalPointsFromMilestoneMap, executionGate, skillsGate, executingPointsFromMilestoneMap } from '../constants'
import type { MilestoneMap } from '../constants'
import React from 'react'

type Props = {
    milestoneByTrack: MilestoneMap,
    level: number
}

class PointSummaries extends React.Component<Props> {
  render() {
    const totalPoints = totalPointsFromMilestoneMap(this.props.milestoneByTrack)
    const executingPoints = executingPointsFromMilestoneMap(this.props.milestoneByTrack)
    const skillPoints = totalPoints - executingPoints

    let useNext, useNextLevel, currentLevel, color, requiredPoints, requiredSkills, requiredTotal, nextTotal, nextPoints, nextSkills, nextLevel, levelStatus, executingStatus, skillsStatus, skillsRemaining
    let nextExecutionMilestone, nextSkillsMilestone

    requiredPoints = 0
    requiredSkills = 0
    nextExecutionMilestone = 30
    nextSkillsMilestone = 10
    let executionMilestone = nextExecutionMilestone
    let skillsMilestone = nextSkillsMilestone

    useNext = false
    useNextLevel = false
    Object.entries(executionGate).map((points) => {
      if (this.props.level >= parseInt(points[1])) {
        requiredPoints = points[0]
        useNextLevel = true
      }
      else if (useNextLevel) {
        nextPoints = points[0]
        useNextLevel = false
      }

      if (executingPoints > points[0]) {
        executingStatus = points[1]
        let executionMilestone = points[0]
        useNext = true
      }
      else if (useNext) {
        nextExecutionMilestone = points[0] - executingPoints
        useNext = false
        }
      }
    )

    useNext = false
    useNextLevel = false
    Object.entries(skillsGate).map((points, index) => {
      if (this.props.level >= parseInt(points[1])) {
        requiredSkills = points[0]
        useNextLevel = true
      }
      else if (useNextLevel) {
        nextSkills = points[0]
        useNextLevel = false
      }
      if (skillPoints > points[0]) {
        skillsStatus = points[1]
        let skillsMilestone = points[0]
        useNext = true
      }
      else if (useNext) {
        nextSkillsMilestone = points[0] - skillPoints
        useNext = false
      }
    })

    useNext = false
    Object.entries(pointsToLevels).map((points) => {
      if (this.props.level >= parseInt(points[1])) {
        requiredTotal = points[0]
        useNext = true
      }
      else if (useNext) {
        nextTotal = points[0]
        useNext = false
      }
    })

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

    if (executingStatus < currentLevel) {
      currentLevel = executingStatus
      nextLevel = originalLevel
    }
    if (skillsStatus < currentLevel) {
      currentLevel = skillsStatus
      nextLevel = originalLevel;
    }


    color = '#a7d1bc'

    let nextRequiredPoints = requiredPoints
    let nextRequiredSkills = requiredSkills

    if (Math.ceil(nextLevel / 3) > Math.ceil(currentLevel / 3)) {
      nextRequiredPoints = nextExecutionMilestone
      nextRequiredSkills = nextSkillsMilestone
    }
    console.log(executionMilestone)
    console.log(skillsMilestone)

    // Next skill points
    if (executingPoints >= nextExecutionMilestone) {
      nextPoints = 0
    }
    else {
      nextPoints = nextRequiredPoints - executingPoints
    }
    // Next t-skills
    if (skillPoints >= nextSkillsMilestone) {
      nextSkills = 0
    }
    else {
      nextSkills = nextRequiredSkills - skillPoints
    }

    //['#9fc855', '#11a9a1', '#fb6500', '#a7d1bc']
    const blocks = [
      {
        label: 'Current level',
        level: this.props.level,
        tier: Math.ceil(this.props.level / 3),
        core: requiredPoints + ' +',
        tscore: requiredSkills + ' +',
        total: requiredTotal + ' +',
      },
      {
        label: 'Next Level',
        level: parseInt(nextLevel),
        tier: Math.ceil(nextLevel / 3),
        core: nextPoints,
        tscore: nextSkills,
        total: pointsToNextLevel
      },
      {
        label: 'Graded Level',
        level: currentLevel,
        tier: Math.ceil(currentLevel / 3),
        core: executingPoints,
        tscore: skillPoints,
        total: totalPoints
      },
    ]

    return (
      <table>
        <style jsx>{`
          table {
            border-spacing: 1px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .point-summary-label {
            font-size: 12px;
            text-align: center;
            font-weight: normal;
            width: 100px;
            height: 24px;
            font-weight: bold;
            background-color: #ccc;
          }
          .point-summary-status {
            font-size: 12px;
            text-align: center;
            font-weight: normal;
            width: 100px;
            height: 24px;
          }          
          .point-summary-value {
            width: 100px;
            background: #eee;
            font-size: 18px;
            font-weight: bold;
            line-height: 24px;
            border-radius: 2px;
            text-align: center;
          }
        `}</style>
        <tbody>
          <tr>
              <th></th>
          {blocks.map(({label}, i) => (
            <th key={i} className="point-summary-label">
              {label}
            </th>
          ))}
          </tr>
          <tr>
              <td className="point-summary-label">Level</td>
            {blocks.map(({level}, i) => (
                <td key={i} className="point-summary-value">
                  {level}
                </td>
            ))}
          </tr>
          <tr>
              <td className="point-summary-label">Tier</td>
              {blocks.map(({tier}, i) => (
                  <td key={i} className="point-summary-value">
                      {tier}
                  </td>
              ))}
          </tr>
          <tr>
              <td className="point-summary-label">Core Skills</td>
              {blocks.map(({core}, i) => (
                  <td key={i} className="point-summary-value">
                      {core}
                  </td>
              ))}
          </tr>
          <tr>
              <td className="point-summary-label">T-Skills</td>
              {blocks.map(({tscore}, i) => (
                  <td key={i} className="point-summary-value">
                      {tscore}
                  </td>
              ))}
          </tr>
          <tr>
              <td className="point-summary-label">Total</td>
              {blocks.map(({total}, i) => (
                  <td key={i} className="point-summary-value" style={{"backgroundColor": color}}>
                      {total}
                  </td>
              ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default PointSummaries
