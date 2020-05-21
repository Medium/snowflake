// @flow

import { pointsToLevels, milestoneToPoints, trackIds, totalPointsFromMilestoneMap, executionGate, skillsGate, executingPointsFromMilestoneMap } from '../constants'
import type { MilestoneMap } from '../constants'
import React from 'react'

type Props = {
  milestoneByTrack: MilestoneMap,
  level: number
}

class CurrentLevel extends React.Component<Props> {
  render() {
    const totalPoints = totalPointsFromMilestoneMap(this.props.milestoneByTrack)
    const executingPoints = executingPointsFromMilestoneMap(this.props.milestoneByTrack)
    const skillPoints = totalPoints - executingPoints

    let currentLevel = parseInt(this.props.level)
    let currentTotal = 0
    let gradedLevel	= 1
    let nextLevel = gradedLevel + 1
    let gradedTotal	= totalPoints
    let nextTotal =	10
    let totalCols = 10;

    // Set the graded level.
    Object.entries(pointsToLevels).map((points) => {
      if (gradedTotal >= parseInt(points[0])) {
        gradedLevel = parseInt(points[1])
        nextLevel = gradedLevel + 1
      }
      if (currentLevel >= parseInt(points[1])) {
        currentTotal = parseInt(points[0])
      }
      if (nextLevel >= parseInt(points[1])) {
        nextTotal = parseInt(points[0])
      }
    })

    let gradedClass = "graded-equal"
    if (gradedLevel < currentLevel) {
      gradedClass = 'graded-low'
    }
    if (gradedLevel > currentLevel) {
      gradedClass = 'graded-high'
    }
    let roughCols = Math.ceil((nextTotal - gradedTotal) / 10)

    // ['#9fc855', '#11a9a1', '#fb6500', '#a7d1bc']
    return (
      <div className="chart">
        <style jsx>{`
          .chart {
            margin-top: 0px;
          }
          .summary {
            display: block;
            text-align: center;
            font-weight: bold;
          }
          .summary__meta {
            display: block;
            text-align: center;
          }     
          table {
            margin: 8px 0 0;
            border-spacing: 0;
            width: 100%;
          }
          tr:first-child td {
            height: 0;
          }
          td {
            height: 20px;
          }
          .current-level {
            font-size: 12px;
            text-align: left;
            padding-left: 8px;
            border-left: 1px solid #ccc;
          }
          .next-level {
            font-size: 12px;
            text-align: right;
            padding-right: 8px;
            border-right: 1px solid #ccc;
          }          
          .total-full{
            background-color: #4c5b67;
            border-left: 1px solid #ccc;
          } 
          .total-empty{
            background-color: #E1E9EF;
            border-right: 1px solid #ccc;
          }   
          .levels {
            width: 10%;
          }                  
        `}</style>
        <span className="summary">Graded level: {gradedLevel}</span>
        <span className="summary__meta">{nextTotal - gradedTotal} overall points to next level</span>
        <table>
          <tbody>
          <tr>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
            <td className="levels"> </td>
          </tr>
          <tr>
            <td className="total-full" colSpan={totalCols - roughCols}> </td>
            <td className="total-empty" colSpan={roughCols}> </td>
          </tr>
          <tr>
            <td className="current-level">{gradedLevel}</td>
            <td className="levels" colSpan={totalCols - 2}> </td>
            <td className="next-level">{nextLevel}</td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}

export default CurrentLevel
