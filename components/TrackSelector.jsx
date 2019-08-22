// @flow

import React from 'react';
import { trackIds, tracks, categoryColorScale } from '../data/constants';
import type { MilestoneMap, TrackId } from '../data/constants';

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

const TrackSelector = ({
  milestoneByTrack,
  focusedTrackId,
  setFocusedTrackIdFn,
}: Props) => (
  <table>
    <style jsx>
      {`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}
    </style>
    <tbody>
      <tr>
        {trackIds.map((trackId) => (
          <td
            key={trackId}
            className="track-selector-label"
          >
            <button
              type="button"
              onClick={() => setFocusedTrackIdFn(trackId)}
            >
              {tracks[trackId].displayName}
            </button>
          </td>
        ))}
      </tr>
      <tr>
        {trackIds.map((trackId) => (
          <td
            key={trackId}
            className="track-selector-value"
            style={{
              border: `4px solid ${trackId === focusedTrackId ? '#000' : categoryColorScale(tracks[trackId].category)}`,
              background: categoryColorScale(tracks[trackId].category),
            }}
          >
            <button
              type="button"
              onClick={() => setFocusedTrackIdFn(trackId)}
            >

              {milestoneByTrack[trackId]}
            </button>
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

export default TrackSelector;
