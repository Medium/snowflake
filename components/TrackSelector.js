// @flow

import React from 'react'
import TrackTile from '../components/TrackTile'
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
      displayRow.push(
        <TrackTile
           trackId = {trackId}
           focusedTrackId = {props.focusedTrackId}
           milestoneByTrack = {props.milestoneByTrack}
           setFocusedTrackIdFn = {props.setFocusedTrackIdFn}/>
      )
      if (displayRow.length === 2) {
        displayArray.push(
          <tr>
            {displayRow[0]}
            {displayRow[1]}
          </tr>
        )
        displayRow = []
      } else if (displayRow.length > 2) {
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
      `}</style>
      <tbody>
        {buildDisplayArray(trackIds)}
      </tbody>
    </table>
  )
}

export default TrackSelector
