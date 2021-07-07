import { levelPointCap, levelsToPoints, maxPoints } from "../constants/points";
import type { MilestoneMap } from "../constants/tracks/types";
import React from "react";
import { totalPointsFromMilestoneMap } from "../logic/points";

type Props = {
  milestoneByTrack: MilestoneMap;
};

const PointSummaries: React.FC<Props> = function PointSummaries(props) {
  const totalPoints = totalPointsFromMilestoneMap(props.milestoneByTrack);

  let currentLevel, pointsToNextLevel;

  Object.keys(levelsToPoints).some((level, index, levels) => {
    const currentPoints = levelsToPoints[level];
    const nextPoints = levelsToPoints[levels[index + 1]] ?? maxPoints;
    if (currentPoints <= totalPoints && totalPoints <= nextPoints) {
      currentLevel = level;
      if (totalPoints > levelPointCap) {
        pointsToNextLevel = "N/A";
      } else {
        pointsToNextLevel = nextPoints - totalPoints;
      }
      return true;
    }
    return false;
  });

  const blocks = [
    {
      label: "Current level",
      value: currentLevel,
    },
    {
      label: "Total points",
      value: totalPoints,
    },
    {
      label: "Points to next level",
      value: pointsToNextLevel,
    },
  ];

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
          {blocks.map(({ label }, i) => (
            <th key={i} className="point-summary-label">
              {label}
            </th>
          ))}
        </tr>
        <tr>
          {blocks.map(({ value }, i) => (
            <td key={i} className="point-summary-value">
              {value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default PointSummaries;
