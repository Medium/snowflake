import React from "react";
import {
  MilestoneMap,
  TrackId,
  Milestone,
  categoryColorScale,
  tracks,
  milestoneDescriptions,
  milestones,
} from "../constants/tracks";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  milestoneByTrack: MilestoneMap;
  trackId: TrackId;
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void;
};

const Track: React.FC<Props> = function Track(props) {
  const track = tracks[props.trackId];
  const milestoneDescription = milestoneDescriptions[props.trackId];
  const currentMilestoneId = props.milestoneByTrack[props.trackId];
  const currentMilestone = milestoneDescription[currentMilestoneId - 1];
  const nextMilestone = milestoneDescription[currentMilestoneId];
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
      <h2>{track.displayName}</h2>
      <p className="track-description">{track.description}</p>
      <div style={{ display: "flex" }}>
        <table style={{ flex: 0, marginRight: 50 }}>
          <tbody>
            {milestones
              .slice()
              .reverse()
              .map((milestone) => {
                const isMet = milestone <= currentMilestoneId;
                return (
                  <tr key={milestone}>
                    <td
                      onClick={() =>
                        props.handleTrackMilestoneChangeFn(
                          props.trackId,
                          milestone
                        )
                      }
                      style={{
                        border: `4px solid ${
                          milestone === currentMilestoneId
                            ? "#000"
                            : isMet
                            ? categoryColorScale(track.category)
                            : "#eee"
                        }`,
                        background: isMet
                          ? categoryColorScale(track.category)
                          : undefined,
                      }}
                    >
                      {milestone}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {currentMilestone ? (
          <div style={{ flex: 1 }}>
            <p>
              <ReactMarkdown
                remarkPlugins={[[gfm]]}
                children={currentMilestone.summary}
              />
            </p>
            <h4>Signals:</h4>
            <ReactMarkdown
              remarkPlugins={[[gfm]]}
              children={currentMilestone.signals}
            />
            {nextMilestone && (
              <>
                <h4>Next Milestone:</h4>
                <ReactMarkdown
                  remarkPlugins={[[gfm]]}
                  children={nextMilestone.signals}
                />
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Track;
