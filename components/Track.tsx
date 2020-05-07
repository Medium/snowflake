import React from 'react'
import { trackDefinitions, Tracks } from '../types/definitions'
import { milestones, categoryColorScale } from '../types/calculations'

type Props = {
  milestoneByTrack: Map<Tracks, number>,
  track: Tracks,
  handleTrackMilestoneChangeFn: (Tracks, number) => void
}

class Track extends React.Component<Props> {
  render() {
    const trackDefinition = trackDefinitions.find(x => x.track === this.props.track);
    if (!trackDefinition) return (<div></div>);
    
    const currentMilestoneId = this.props.milestoneByTrack.get(this.props.track)
    const currentMilestone = trackDefinition.milestones[currentMilestoneId];
    const displayName = (trackDefinition && trackDefinition.displayName) || Track[trackDefinition.track];
    const description = trackDefinition.description || "";
    const trackId = this.props.track;
    const track = Tracks[trackId];
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
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
        `}</style>
        <h2>{displayName}</h2>
        <p className="track-description">{description}</p>
        <div style={{display: 'flex'}}>
          <table style={{flex: 0, marginRight: 50}}>
            <tbody>
              {milestones.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                return (
                  <tr key={milestone}>
                    <td onClick={() => this.props.handleTrackMilestoneChangeFn(trackId, milestone)}
                        style={{border: `4px solid ${milestone === currentMilestoneId ? '#000' : isMet ? categoryColorScale(trackDefinition.category) : '#eee'}`, background: isMet ? categoryColorScale(trackDefinition.category) : undefined}}>
                      {milestone}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {currentMilestone ? (
            <div style={{flex: 1}}>
              <h3>{currentMilestone.summary}</h3>
              <h4>Example behaviors:</h4>
              <ul>
                {currentMilestone.signals && currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              <h4>Example tasks:</h4>
              <ul>
                {currentMilestone.examples && currentMilestone.examples.map((example, i) => (
                  <li key={i}>{example}</li>
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
