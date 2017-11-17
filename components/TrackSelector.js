// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

function TrackSelector(props) {
  let row = [];
  return (
    <table>
      <style jsx>{`
        table {
          width: 100%;
          border-spacing: 10px;
          margin-left: -10px;
          margin-top: -10px;
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
      {
        trackIds.map(trackId => {
          let rowLength = row.length
          console.log(rowLength)
        })
      }
      </tr>
        <tr>
          {trackIds.map(trackId => (
            <td key={trackId} className="track-selector-label" onClick={() => props.setFocusedTrackIdFn(trackId)}>
              {tracks[trackId].displayName}
            </td>
          ))}
        </tr>
        <tr>
          {trackIds.map(trackId =>
            {
              return (
                <td key={trackId} className="track-selector-value"
                style={{border: '4px solid ' + (trackId == props.focusedTrackId ? '#000': categoryColorScale(tracks[trackId].category)), background: categoryColorScale(tracks[trackId].category)}}
                onClick={() => props.setFocusedTrackIdFn(trackId)}>
                {props.milestoneByTrack[trackId]}
                </td>
              )
            }
          )}
        </tr>
      </tbody>
    </table>
  )
}

// class TrackSelector extends React.Component<Props> {
//   constructor(props: Props) {
//     super(props)
//   }
//
//   render() {
//     return (
//       <table>
//         <style jsx>{`
//           table {
//             width: 100%;
//             border-spacing: 10px;
//             margin-left: -10px;
//             margin-top: -10px;
//           }
//           .track-selector-value {
//             line-height: 50px;
//             width: 50px;
//             text-align: center;
//             background: #eee;
//             font-weight: bold;
//             font-size: 24px;
//             border-radius: 3px;
//             cursor: pointer;
//           }
//           .track-selector-label {
//             text-align: center;
//             font-size: 9px;
//           }
//         `}</style>
//         <tbody>
          // {
          //   trackIds.map(trackId => {
          //     let rowLength = row.length
          //     console.log(rowLength)
          //   })
          // }
          // <tr>
          // </tr>
//           <tr>
//             {trackIds.map(trackId => (
//               <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
//                 {tracks[trackId].displayName}
//               </td>
//             ))}
//           </tr>
//           <tr>
//             {trackIds.map(trackId =>
//               {
//                 return (
//                   <td key={trackId} className="track-selector-value"
//                   style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(tracks[trackId].category)), background: categoryColorScale(tracks[trackId].category)}}
//                   onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
//                   {this.props.milestoneByTrack[trackId]}
//                   </td>
//                 )
//               }
//             )}
//           </tr>
//         </tbody>
//       </table>
//     )
//   }
// }

export default TrackSelector
