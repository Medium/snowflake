import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

function TrackTile(props) {
  return (
    <td key={props.trackId} className="track-selector-value"
        style={{border: '4px solid ' + (props.trackId == props.focusedTrackId ? '#000': categoryColorScale(tracks[props.trackId].category)),background: categoryColorScale(tracks[props.trackId].category)}}
        onClick={() => props.setFocusedTrackIdFn(props.trackId)}>
      {props.milestoneByTrack[props.trackId]}
    </td>
  )
}

export default TrackTile
