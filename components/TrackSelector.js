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
    let coreTrack = trackIds.slice(0,4)
    let deliveringTrack = trackIds.slice(4,7)
    let strengtheningTrack = trackIds.slice(7,10)
    let supportingTrack = trackIds.slice(10)
    return (
      <div className="bounding-table">
        <style jsx>{`
          .bounding-table {
            width: 100%;
          }
          .section {
            margin-top: 2.5em;
          }
          .section__title {
            margin-bottom: 5px;
          }
          .section__subtitle {
            text-align: left;
            padding-bottom: 5px;
            margin-top: .5em;
            margin-bottom: 10px;
            border-bottom: 1px dotted #E1E9EF;
          }
          .section p {
            margin-top: 0;
          }
          table {
            width: 360px;
            margin-bottom: 10px;
            table-layout: fixed;
          }
          .track-selector-value {
            height: 50px;
            text-align: center;
            background: #eee;
            color: #000;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 10px;
          }          
        `}</style>
        <header className="section">
          <h2 className="section__title">Core Skills</h2>
          <p>This is information about core skills.</p>
        </header>
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

        <header className="section">
          <h2 className="section__title">T-Shaped Skills</h2>
          <p>This is information about t-shaped skills.</p>
        </header>

        <table>
          <thead><tr>
          <th colSpan="3"><h3 className="section__subtitle">Delivering</h3></th>
          </tr></thead>
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
          <thead><tr>
          <th colSpan="3"><h3 className="section__subtitle">Strengthening</h3></th>
          </tr></thead>
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
          <thead><tr>
          <th colSpan="3"><h3 className="section__subtitle">Supporting</h3></th>
          </tr></thead>
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
