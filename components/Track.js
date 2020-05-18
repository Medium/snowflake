// @flow

import { tracks, milestones, categoryColorScale, trackMap } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  currentCohort: String,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class Track extends React.Component<Props> {
  render() {
    const trackList = trackMap(tracks, this.props.currentCohort)
    const track = trackList[this.props.trackId]
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId]
    const currentMilestone = track.milestones[currentMilestoneId - 1]
    const nextMilestone = track.milestones[currentMilestoneId]
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 20px 0 0 0;
            padding: 20px;
            width: 100%;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          ul {
            line-height: 1.5em;
          }
          h4 {
            margin-left: 10px;
          }
          .current-level {
            padding-bottom: 10px;
          }          
          .next-level {
            border-top: 2px solid #eee;
            background-color: #eee;
            padding-bottom: 10px;
          }
        `}</style>
        <h2>{track.displayName}</h2>
        <p className="track-description">{track.description}</p>
        <div>
          <table style={{flex: 1}}>
            <tbody>
              <tr>
              {milestones.slice(1).map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                return (

                    <td key={milestone} onClick={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}
                        style={{border: `4px solid ${milestone === currentMilestoneId ? '#000' : isMet ? categoryColorScale(track.category) : '#eee'}`, background: isMet ? categoryColorScale(track.category) : undefined}}>
                      {milestone}
                    </td>
                )
              })}
              </tr>
            </tbody>
          </table>
          {currentMilestone ? (
            <div className="current-level">

              <h4>Example behaviors:</h4>
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {nextMilestone ? (
            <div className="next-level">

              <h4>Next level behaviors:</h4>
              <ul>
                {nextMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Track
