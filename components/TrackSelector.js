// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

function TrackSelector(props) {

  function buildDisplayArray(trackIds) {
    let displayRow = [];
    let displayArray = [];

    trackIds.map(trackId => {
      let track = (<td key={trackId} className="track-selector-value"
      style={{border: '4px solid ' + (trackId == props.focusedTrackId ? '#000': categoryColorScale(tracks[trackId].category)), background: categoryColorScale(tracks[trackId].category)}}
      onClick={() => props.setFocusedTrackIdFn(trackId)}>
      {props.milestoneByTrack[trackId]}
      </td>)
      displayRow.push(track)
      let rowLength = displayRow.length

      if (rowLength === 2) {
        displayArray.push(
          <tr>
            {displayRow[0]}
            {displayRow[1]}
          </tr>
        )
        displayRow = []
      } else if (rowLength > 2) {
        row.splice(0, 2)
      }
    })
    console.log(displayArray);
    return displayArray
  }

  return (
    <table>
      <style jsx>{`
        table {
          width: 100%;
          border-spacing: 10px;
          margin-left: -10px;
          margin-top: -10px;
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
        {buildDisplayArray(trackIds).map(row => (
          row
        ))}
      </tbody>
    </table>
  )
}

// <tr>
// {trackIds.map(trackId => (
//   <td key={trackId} className="track-selector-label" onClick={() => props.setFocusedTrackIdFn(trackId)}>
//   {tracks[trackId].displayName}
//   </td>
// ))}
// </tr>
// <tr>
// {trackIds.map(trackId =>
//   {
//     return (
//       <td key={trackId} className="track-selector-value"
//       >
//       {props.milestoneByTrack[trackId]}
//       </td>
//     )
//   }
// )}
// </tr>
export default TrackSelector
