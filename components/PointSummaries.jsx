// @flow

import React from 'react';
import {
  pointsToLevels, totalPointsFromMilestoneMap,
} from '../data/constants';
import type { MilestoneMap } from '../data/constants';

type Props = {
  milestoneByTrack: MilestoneMap
}

const PointSummaries = ({ milestoneByTrack } : Props) => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneByTrack);

  let currentLevel;

  let pointsForCurrentLevel = totalPoints;
  while (!pointsToLevels[pointsForCurrentLevel]) {
    currentLevel = pointsToLevels[pointsForCurrentLevel];
    pointsForCurrentLevel -= 1;
  }

  let pointsToNextLevel = 1;
  while (!pointsToLevels[totalPoints + pointsToNextLevel]) {
    pointsToNextLevel += 1;
    if (pointsToNextLevel > 135) {
      pointsToNextLevel = 'N/A';
      break;
    }
  }

  const blocks = [
    {
      label: 'Current level',
      value: currentLevel,
    },
    {
      label: 'Total points',
      value: totalPoints,
    },
    {
      label: 'Points to next level',
      value: pointsToNextLevel,
    },
  ];

  return (
    <table>
      <style jsx>
        {`
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
        `}
      </style>
      <tbody>
        <tr>
          {blocks.map(({ label }) => (
            <th key={label} className="point-summary-label">
              {label}
            </th>
          ))}
        </tr>
        <tr>
          {blocks.map(({ label, value }) => (
            <td key={label} className="point-summary-value">
              {value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};


export default PointSummaries;
