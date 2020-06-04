// @flow

import { tracks, milestones, milestoneToPoints, categoryColorScale, trackMap } from '../constants'
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

    let pointsVal = milestoneToPoints(currentMilestoneId, this.props.trackId)

    return (
      <div className="track">
        <style jsx>{`
          .track__header {
            padding: 1em 0 .25em;
          }
          .track__title {
            margin-top: 0;
            margin-bottom: 5px;
          }
          .track__description {
            margin-top: 10px;
            margin-bottom: 0;
            padding-bottom: 15px;
            border-bottom: 1px solid #E1E9EF;
          }
          table {
            color: #000;
            border-spacing: 3px;
            margin-top: -4px;
            margin-left: -4px;
          }
          td {
            line-height: 30px;
            width: 30px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 16px;
            border-radius: 0px 0px 3px 3px;
            cursor: pointer;
          }
          ul {
            line-height: 1.5em;
            padding-left: 1.25em;
          }
          .current-level {
            margin-bottom: 2em;
          }          
          .next-level {
            font-size: .85em;
            background-color: rgba(225, 233, 239, .5);
            padding: .5em 1.5em;
            border-radius: 5px;
            margin-bottom: 2em;
          }
          .point-value {
            font-style: italic;
            font-size: 12px;
          }
        `}</style>
        <header className="track__header">
          <h2 className="track__title">{track.displayName}</h2>
          <p className="track__description">{track.description}</p>
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
            <p className="point-value">Worth {pointsVal} points</p>
          </div>
        </header>
        <div className="track__content">
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
