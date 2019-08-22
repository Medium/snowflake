// @flow

import React from 'react';
import { tracks, milestones, categoryColorScale } from '../data/constants';
import type { MilestoneMap, TrackId, Milestone } from '../data/constants';

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

const Track = ({
  milestoneByTrack,
  trackId,
  handleTrackMilestoneChangeFn,
}: Props) => {
  const track = tracks[trackId];
  const currentMilestoneId = milestoneByTrack[trackId];
  const currentMilestone = track.milestones[currentMilestoneId - 1];
  return (
    <div className="track">
      <style jsx>
        {`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          ul {
            line-height: 1.5em;
          }
        `}
      </style>
      <h2>{track.displayName}</h2>
      <p className="track-description">{track.description}</p>
      <div style={{ display: 'flex' }}>
        <table style={{ flex: 0, marginRight: 50 }}>
          <tbody>
            {milestones.slice().reverse().map((milestone) => {
              const isMet = milestone <= currentMilestoneId;
              const isCurrentMilestone = milestone === currentMilestoneId;
              const background = isMet ? categoryColorScale(track.category) : undefined;
              const borderColor = isMet ? categoryColorScale(track.category) : '#eee';
              return (
                <tr key={milestone}>
                  <td
                    style={{ border: `4px solid ${isCurrentMilestone ? '#000' : borderColor}`, background }}
                  >
                    <button
                      type="button"
                      onClick={() => handleTrackMilestoneChangeFn(trackId, milestone)}
                      onKeyPress={() => handleTrackMilestoneChangeFn(trackId, milestone)}
                    >
                      {milestone}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {currentMilestone ? (
          <div style={{ flex: 1 }}>
            <h3>{currentMilestone.summary}</h3>
            <h4>Example behaviors:</h4>
            <ul>
              {currentMilestone.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
            <h4>Example tasks:</h4>
            <ul>
              {currentMilestone.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Track;
