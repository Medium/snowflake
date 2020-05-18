// @flow

import React from 'react'
import {trackIds, tracks, categoryColorScale, trackMap, pointsToLevels} from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  currentCohort: String,
  setFocusedTrackIdFn: (TrackId) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    const trackList = trackMap(tracks, this.props.currentCohort)
    console.log(trackList)
    let coreTrack = trackIds.slice(0,4)
    let deliveringTrack = trackIds.slice(4,7)
    let strengtheningTrack = trackIds.slice(7,10)
    let supportingTrack = trackIds.slice(10)

    console.log(coreTrack)
    console.log(deliveringTrack)
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            padding-top: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
            border-top: 2px solid #ccc;
          }
          .track-selector-value {
            line-height: 62px;
            width: 62px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 10px;
          }
          .primary-skills {
            text-align: center;
            font-size: 11px;
            font-weight: bold;
            padding: 4px;
            background-color: #9fc855;
          }
          .t-skills {
            text-align: center;
            font-size: 11px;
            font-weight: bold;
            padding: 4px;
            background-color: #a7d1bc;
          }          
        `}</style>
        <tbody>
          <tr>
            {coreTrack.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {trackList[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {coreTrack.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(trackList[trackId].category)), background: categoryColorScale(trackList[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector
