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
    return (
      <div className="bounding-table">
        <style jsx>{`
          .bounding-table {
            width: 440px;
            padding: 20px;
            margin-right: 40px;
          }
          table {
            width: 360px;
            margin-bottom: 20px;
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
        <h2>Core Skills</h2>
        <p>This is information about core skills.</p>
        <table>
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

        <h2>T-Shaped Skills</h2>
        <p>This is information about t-shaped skills.</p>

        <table>
          <th colSpan="3"><h3>Delivering</h3></th>
          <tbody>
          <tr>
            {deliveringTrack.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {trackList[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {deliveringTrack.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(trackList[trackId].category)), background: categoryColorScale(trackList[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
          </tbody>
        </table>

        <table>
          <th colspan="3"><h3>Strengthening</h3></th>
          <tbody>
          <tr>
            {strengtheningTrack.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {trackList[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {strengtheningTrack.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(trackList[trackId].category)), background: categoryColorScale(trackList[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
          </tbody>
        </table>

        <table>
          <th colSpan="3"><h3>Supporting</h3></th>
          <tbody>
          <tr>
            {supportingTrack.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {trackList[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {supportingTrack.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(trackList[trackId].category)), background: categoryColorScale(trackList[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TrackSelector
