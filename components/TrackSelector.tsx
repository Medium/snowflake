import React from 'react'
import { Tracks, trackDefinitions } from '../types/definitions'
import { trackIds, categoryColorScale } from '../types/calculations'

type Props = {
  milestoneByTrack: Map<Tracks, number>,
  focusedTrack: Tracks,
  setFocusedTrackIdFn: (Tracks) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    const tracks = trackIds.map(trackId => {
      const trackDefinition = trackDefinitions.find(x => Tracks[x.track] == Tracks[trackId])
      return { id: trackId, definition: trackDefinition };
    });
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr>
            {tracks.map(track => {
              return (
                <td key={track.id} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(track.id)}>
                  {(track.definition && track.definition.displayName) || Tracks[track.id]}
                </td>
              );}
            )}
          </tr>
          <tr>
            {tracks.map(track => {
              const category = (track.definition && track.definition.category) || 0;
              return (
              <td key={track.id} className="track-selector-value"
                  style={{border: '4px solid ' + (track.id == this.props.focusedTrack ? '#000': categoryColorScale(category)), background: categoryColorScale(category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(track.id)}>
                {this.props.milestoneByTrack.get(track.id)}
              </td>
              );}
            )}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector
