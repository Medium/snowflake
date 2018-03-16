// @flow

import React from 'react'
import TrackTile from './TrackTile'
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

    trackIds.map((trackId, i) => {
      displayRow.push(
        <TrackTile
          trackId = {trackId}
          focusedTrackId = {props.focusedTrackId}
          milestoneByTrack = {props.milestoneByTrack}
          setFocusedTrackIdFn = {props.setFocusedTrackIdFn}/>
      )
      if (displayRow.length === 2) {
        displayArray.push(
          <tr key={i}>
            {displayRow[0]}
            {displayRow[1]}
          </tr>
        )
        displayRow = []
      } else if (displayRow.length > 2) {
        row.splice(0, 2)
      }
    })
    return displayArray
  }

  return (
    <table>
      <style jsx>{`
        table {
          width: 80%;
          border-spacing: 5px;
          margin-left: -5px;
          margin-top: -5px;
        }
      `}</style>
      <tbody>
        {buildDisplayArray(trackIds)}
      </tbody>
    </table>
  )
}

export default TrackSelector
