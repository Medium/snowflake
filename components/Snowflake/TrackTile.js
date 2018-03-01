import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../../constants'
import type { MilestoneMap, TrackId } from '../../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

function TrackTile(props) {
  return (
    <td key={props.trackId}
      onClick={() => props.setFocusedTrackIdFn(props.trackId)}>
      <div className="track-selector-value"
          style={{
            height: '175px',
            width: '175px'
          }}>
        <p style={{margin:'0', paddingBottom:'10px'}}>{tracks[props.trackId].shortDisplayName}</p>
        <div style={{
          border: '4px solid ' + (props.trackId == props.focusedTrackId ? '#000': categoryColorScale(tracks[props.trackId].category)),
          background: categoryColorScale(tracks[props.trackId].category),
          width: '125px',
          height: '125px',
          borderRadius: '3px'
        }}>
          <h1 style={{
            fontSize:'50px',
            textAlign: 'center'
            }}>
            {props.milestoneByTrack[props.trackId]}
          </h1>
        </div>
      </div>
    </td>
  )
}

export default TrackTile
