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

    let currentLevel = this.props.level
    let currentTier =	Math.ceil(parseInt(currentLevel) / 3) + 1
    let currentMinimum = 0
    let currentPoints =	0
    let currentSkills	= 0
    let gradedLevel	= 1
    let gradedTier = 1
    let gradedTotal	= 0
    let gradedPoints = 0
    let gradedSkills = 0
    let allowedLevel = 1
    let allowedTier = 1
    let allowedPointsLevel = 3
    let allowedSkillsLevel = 3
    let nextLevel = 2
    let nextTier = 1
    let nextMinimum =	10
    let nextPoints = 0
    let nextSkills = 0
    let improveTotal = 10
    let improvePoints = 0
    let improveSkills = 0
    let color = '#a7d1bc'

    //['#9fc855', '#11a9a1', '#fb6500', '#a7d1bc']
    const blocks = [
      {
        label: 'Current level',
        level: currentLevel,
        tier: currentTier,
        core: currentPoints + ' +',
        tscore: currentSkills + ' +',
        total: currentMinimum + ' +',
      },
      {
        label: 'Next Level',
        level: nextLevel,
        tier: nextTier,
        core: nextPoints,
        tscore: nextSkills,
        total: nextMinimum,
      },
      {
        label: 'Graded Level',
        level: gradedLevel,
        tier: gradedTier,
        core: gradedPoints,
        tscore: gradedPoints,
        total: gradedTotal,
      },
    ]

    return (
      <table>
        <style jsx>{`
          table {
            border-spacing: 1px;
            margin-bottom: 20px;
            margin-left: -3px;
            margin-top: 20px;
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
