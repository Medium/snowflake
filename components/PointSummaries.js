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

    let currentLevel = parseInt(this.props.level)
    let currentTier =	Math.ceil(currentLevel / 3)
    let currentTotal = 0
    let currentPoints =	0
    let currentSkills	= 0
    let gradedLevel	= 1
    let gradedTier = 1
    let gradedTotal	= totalPoints
    let gradedPoints = executingPoints
    let gradedSkills = skillPoints
    let allowedLevel = 1
    let allowedTier = 1
    let allowedPointsLevel = 3
    let allowedSkillsLevel = 3
    let currentSkillTier = Math.ceil(allowedSkillsLevel / 3)
    let currentPointsTier = Math.ceil(allowedPointsLevel / 3)
    let nextLevel = 2
    let nextTier = 1
    let nextTotal =	10
    let nextPoints = 0
    let nextSkills = 0
    let improveTotal = 10
    let improvePoints = 0
    let improveSkills = 0
    let targetPoints = 0
    let targetSkills = 0
    let color = '#a7d1bc'

    // Set the graded level and tier.
    Object.entries(pointsToLevels).map((points) => {
      if (gradedTotal >= parseInt(points[0])) {
        gradedLevel = parseInt(points[1])
      }
      if (currentLevel >= parseInt(points[1])) {
        currentTotal = parseInt(points[0])
      }
    })
    gradedTier = Math.ceil(gradedLevel / 3)

    // Set the execution gate limit.
    Object.entries(executionGate).map((points, index) => {
      if (gradedPoints >= parseInt(points[0])) {
        allowedPointsLevel = parseInt(points[1]) + 2
      }
      if (currentLevel >= parseInt(points[1])) {
        currentPoints = parseInt(points[0])
      }
    })

    // Set the skills gate limit.
    Object.entries(skillsGate).map((points, index) => {
      if (gradedSkills >= parseInt(points[0])) {
        allowedSkillsLevel = parseInt(points[1]) + 2
      }
      if (currentLevel >= parseInt(points[1])) {
        currentSkills = parseInt(points[0])
      }
    })

    // Set the allowed level.
    allowedLevel = Math.min(gradedLevel, allowedPointsLevel, allowedSkillsLevel)
    allowedTier = Math.ceil(allowedLevel / 3)
    gradedLevel = allowedLevel
    gradedTier = allowedTier
    // Set current tiers
    currentPointsTier = Math.ceil(allowedPointsLevel / 3)
    currentSkillTier = Math.ceil(allowedSkillsLevel / 3)
    let nextPointsTier = currentPointsTier + 1
    let nextSkillTier = currentSkillTier + 1
    let targetPointsLevel = nextPointsTier * 3
    let targetSkillLevel = nextSkillTier * 3

    // Set the next level milestone.
    if (currentLevel > allowedLevel) {
      nextLevel = currentLevel
    }
    else if (allowedLevel > currentLevel) {
      nextLevel = allowedLevel
    }
    else {
      nextLevel = currentLevel + 1
    }
    nextTier = Math.ceil(nextLevel / 3)

    // Set the points needed.
    Object.entries(pointsToLevels).map((points) => {
      if (nextLevel >= parseInt(points[1])) {
        nextTotal = parseInt(points[0])
      }
    })
    Object.entries(executionGate).map((points) => {
      if (nextLevel >= parseInt(points[1])) {
        nextPoints = parseInt(points[0])
      }
      if (targetPointsLevel >= parseInt(points[1])) {
        targetPoints = parseInt(points[0])
      }
    })
    Object.entries(skillsGate).map((points) => {
      if (nextLevel >= parseInt(points[1])) {
        nextSkills = parseInt(points[0])
      }
      if (targetSkillLevel >= parseInt(points[1])) {
        targetSkills = parseInt(points[0])
      }
    })
    // Set the points for improvement.
    improveTotal = (nextTotal - gradedTotal > 0) ? nextTotal - gradedTotal : 0
    improvePoints = (nextPoints - gradedPoints > 0) ? nextPoints - gradedPoints : 0
    improveSkills = (nextSkills - gradedSkills > 0) ? nextSkills - gradedSkills : 0

    let gradedClass = "graded-equal"
    if (gradedLevel < currentLevel) {
      gradedClass = 'graded-low'
    }
    if (gradedLevel > currentLevel) {
      gradedClass = 'graded-high'
    }


    //['#9fc855', '#11a9a1', '#fb6500', '#a7d1bc']
    const blocks = [
      {
        label: 'Salary level',
        level: currentLevel,
        tier: currentTier,
        core: currentPoints + ' +',
        tscore: currentSkills + ' +',
        total: currentTotal + ' +',
      },
      {
        label: 'Graded Level',
        level: gradedLevel,
        tier: gradedTier,
        core: gradedPoints,
        tscore: gradedSkills,
        total: gradedTotal,
      },
      {
        label: 'To Next Level',
        level: nextLevel,
        tier: nextTier,
        core: improvePoints,
        tscore: improveSkills,
        total: improveTotal,
      },
      {
        label: 'Requirements',
        level: nextLevel,
        tier: nextTier,
        core: nextPoints + ' +',
        tscore: nextSkills + ' +',
        total: nextTotal + ' +',
      },
    ]
    // ['#9fc855', '#11a9a1', '#fb6500', '#a7d1bc']
    return (
      <div className="career-summary">
        <style jsx>{`
          .career-summary__header {
            display: flex;
          }
          .career-summary__header-block {
            margin: 1em 0;
          }
          .career-summary__key {
            margin-top: 2em;
            display: flex;
            flex-wrap: wrap;
          }
          .career-summary__key-heading {
            font-size: 12px;
            display: block;
            width: 100%;
            margin: 0 0 8px;
          }
          .key {
            padding: 5px 8px;
            margin-right: 10px;
            font-weight: bold;
          }
          .key__meta {
            font-weight: normal;
            font-size: 14px;
            font-style: italic;
            display: block;
          }
          .key--current {
            background-color: #7DA12F;
          }
          .key--graded {
            background-color: #5E7B21;
          }
          .key--core {
            background-color: #11a9a1;
          }
          .key--skills {
            background-color: #fb6500;
          }
          table {
            margin: 0;
            border-spacing: 0;
            text-align: center;
            width: 100%;
            border: 1px solid #4c5b67;
          }
          td {
            height: 30px;
          }
          
          td:nth-of-type(3n+1) {
            border-left: 3px solid #4c5b67;
          }
          
          # removed to allow tiers to be solid.
          #td:not(:nth-of-type(3n+1)) {
          #   border-left: 1px dotted #4c5b67;
          #}
          
          .level-label {
            width: 6.6666666%;
            background-color: transparent;
            border-right: 1px solid #4c5b67;
            border-bottom: 1px solid #4c5b67;
          }
          .tier-label {
            background-color: transparent;
            border-right: 1px solid #4c5b67;
            border-top: 1px solid #4c5b67;
          }
          .current-full {
            background-color: #7DA12F;
            border-left: 1px dotted #4c5b67;
          } 
          .current-empty {
            background-color: #7DA12F;
            opacity: 0.15;
            border-left: 1px dotted #4c5b67;
          }          
          .graded-full{
            background-color: #5E7B21;
            border-left: 1px dotted #4c5b67;
          } 
          .graded-empty{
            background-color: #5E7B21;
            opacity: 0.15;
            border-left: 1px dotted #4c5b67;
          } 
          .core-full{
            background-color: #11a9a1;
            border: 0;
          } 
          .core-empty{
            background-color: #11a9a1;
            opacity: 0.15;
            border: 0;
          } 
          .skills-full {
            background-color: #fb6500;
            border: 0;            
          } 
          .skills-empty {
            background-color: #fb6500;
            opacity: 0.15;
            border: 0;            
          }        
          .graded-high::after {
            font-size: 14px;
            content:'Your grade is higher than your level.';
            display: block;
            font-style: italic;
            font-weight: normal;
          }      
               
          .graded-low::after {
            font-size: 14px;
            content:'Your grade is lower than your level.';
            display: block;
            font-style: italic;
            font-weight: normal;
          }             
        `}</style>

        <header className="career-summary__header">
          <h2>Career Progression</h2>
        </header>

        <table><tbody>
          {/* Level numbers */}
          <tr>
            {Object.entries(pointsToLevels).map((points, level) =>
              <td className="level-label" key={level}>{level + 1}</td>
            )}
          </tr>
          {/* Current Level */}
          <tr>
            {Object.entries(pointsToLevels).map((points, level) => {
              var classname = (level < currentLevel) ? "current-full" : "current-empty"
              return (
                <td className={classname} key={level}> </td>
              )}
            )}
          </tr>
          {/* Graded Level */}
          <tr>
            {Object.entries(pointsToLevels).map((points, level) => {
              var classname = (level < gradedLevel) ? "graded-full" : "graded-empty"
              return (
                <td className={classname} key={level}> </td>
              )}
            )}
          </tr>
          {/* Core tier */}
          <tr>
            {Object.entries(pointsToLevels).map((points, level) => {
                var classname = (level < allowedPointsLevel) ? "core-full" : "core-empty"
                return (
                  <td className={classname} key={level}> </td>
                )}
            )}
          </tr>
          {/* T-skills tier */}
          <tr>
            {Object.entries(pointsToLevels).map((points, level) => {
              var classname = (level < allowedSkillsLevel) ? "skills-full" : "skills-empty"
              return (
                <td className={classname} key={level}> </td>
              )}
            )}
          </tr>
          {/* Tier numbers */}
          <tr>
            {[1,2,3,4,5].map((tier) =>
              <td className="tier-label" colSpan="3" key={tier}>{tier}</td>
            )}
          </tr>
        </tbody></table>

        <div className="career-summary__key">
          <h3 className="career-summary__key-heading">KEY</h3>
          <div className="key key--current">Current level: {currentLevel}</div>
          <div className="key key--graded"><span className={gradedClass}>Graded level: {gradedLevel}</span></div>

          <div className="key key--core">
            {targetPoints - gradedPoints} Core points required to next tier
            <span className="key__meta"> {gradedPoints} of {targetPoints} Core points</span>
          </div>
          <div className="key key--skills">
            {targetSkills - gradedSkills} T-skills points required to next tier
            <span className="key__meta"> {gradedSkills} of {targetSkills} T-skills points</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PointSummaries
