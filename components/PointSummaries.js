// @flow

import { pointsToLevels, milestoneToPoints, trackIds, totalPointsFromMilestoneMap } from '../constants'
import { Div } from 'glamorous'
import FunButton from '../glamorous/FunButton'
import type { MilestoneMap, RoleToLevel } from '../constants'
import type { User } from '../models/User'
import React from 'react'
import _ from 'lodash'

type Props = {
  milestoneByTrack: MilestoneMap,
  user?: string,
  saveUser: (withPromotion: boolean) => void,
  nextRoleToLevel: {
    [category: string]: number
  },
  openPromotionModal: () => void
}


class PointSummaries extends React.Component<Props> {
  render() {
    const { milestoneByTrack, nextRoleToLevel, user } = this.props;
    const totalPoints = _.reduce(milestoneByTrack, (memo, track) => memo + track, 0)

    const minCumScore = nextRoleToLevel["Min Cumulative Scores"];

    const blocks = [
      {
        label: 'Total points',
        value: totalPoints
      },
      {
        label: 'Points needed for next level',
        value: minCumScore
      }
    ]

    const meetsMinReqForAllFields = _.every(milestoneByTrack, (score, categoryName) => {
      return score >= nextRoleToLevel[categoryName];
    })

    const deservesPromotion = meetsMinReqForAllFields && totalPoints >= minCumScore;

    const promoteUser = () => {
      this.props.saveUser(true)
      this.props.openPromotionModal()
    }

    if (!user) return null;

    return (
      <Div display="flex" flexDirection="column">
        <h2>
          {user}
        </h2>
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
        <FunButton width="150px" onClick={() => {deservesPromotion ? promoteUser() : this.props.saveUser(false)}}>
          {deservesPromotion ? 'Promote Employee' : 'Save Information' } 
          </FunButton>
      </Div>
    )
  }
}

export default PointSummaries
