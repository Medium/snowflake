import React from "react";
import {
  MilestoneMap,
  TrackId,
  tracks,
  categoryColorScale,
} from "../constants/tracks";

type Props = {
  milestoneByTrack: MilestoneMap;
  focusedTrackId: TrackId;
  accountedTracks: TrackId[];
  setFocusedTrackIdFn: (TrackId) => void;
};

const TrackSelector: React.FC<Props> = function TrackSelector(props) {
  return (
    <table>
      <style jsx>{`
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
      `}</style>
      <tbody>
        <tr>
          {props.accountedTracks.map((trackId) => (
            <td
              key={trackId}
              className="track-selector-label"
              onClick={() => props.setFocusedTrackIdFn(trackId)}
            >
              {tracks[trackId].displayName}
            </td>
          ))}
        </tr>
        <tr>
          {props.accountedTracks.map((trackId) => (
            <td
              key={trackId}
              className="track-selector-value"
              style={{
                border:
                  "4px solid " +
                  (trackId == props.focusedTrackId
                    ? "#000"
                    : categoryColorScale(tracks[trackId].category)),
                background: categoryColorScale(tracks[trackId].category),
              }}
              onClick={() => props.setFocusedTrackIdFn(trackId)}
            >
              {props.milestoneByTrack[trackId]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TrackSelector;
