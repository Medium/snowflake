import React, { useMemo, useRef } from "react";
import * as d3 from "d3";
import {
  TrackId,
  Milestone,
  MilestoneMap,
  tracks,
  milestones,
  categoryColorScale,
} from "../constants/tracks";
import { getTitleByLabel } from "../logic/titles";

const width = 400;
const arcMilestones = milestones.slice(1); // we'll draw the '0' milestone with a circle, not an arc.
const radiusScale = d3
  .scaleBand()
  .domain(arcMilestones)
  .range([0.15 * width, 0.45 * width])
  .paddingInner(0.1);
const SYSTEM_INFLUENCE_OFFSET = 1.04;

type Props = {
  milestoneByTrack: MilestoneMap;
  focusedTrackId: TrackId;
  title?: string;
  accountedTracks: TrackId[];
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void;
};

const NightingaleChart: React.FC<Props> = function NightingaleChart({
  accountedTracks,
  focusedTrackId,
  handleTrackMilestoneChangeFn,
  milestoneByTrack,
  title,
}) {
  const arcFn = useRef<any>();

  const currentMilestoneId = milestoneByTrack[focusedTrackId];
  const job = useMemo(() => getTitleByLabel(title), [title]);

  arcFn.current = useMemo(
    () =>
      d3
        .arc()
        .innerRadius((milestone) =>
          milestone > 3
            ? radiusScale(milestone) * SYSTEM_INFLUENCE_OFFSET
            : radiusScale(milestone)
        )
        .outerRadius(
          (milestone) =>
            (milestone > 3
              ? radiusScale(milestone) * SYSTEM_INFLUENCE_OFFSET
              : radiusScale(milestone)) + radiusScale.bandwidth()
        )
        .startAngle(-Math.PI / accountedTracks.length)
        .endAngle(Math.PI / accountedTracks.length)
        .padAngle(Math.PI / 200)
        .padRadius(0.45 * width)
        .cornerRadius(2),
    [accountedTracks.length]
  );

  return (
    <figure>
      <style jsx>{`
        figure {
          margin: 0;
        }
        svg {
          width: ${width}px;
          height: ${width}px;
        }
        .track-milestone {
          fill: #eee;
          cursor: pointer;
        }
        .track-milestone__recommended {
          fill: #f3d2a6;
        }
        .track-milestone-current,
        .track-milestone:hover {
          stroke: #000;
          stroke-width: 4px;
          stroke-linejoin: round;
        }
      `}</style>
      <svg>
        <g transform={`translate(${width / 2},${width / 2}) rotate(-33.75)`}>
          {accountedTracks.map((trackId, i) => {
            const track = tracks[trackId];
            const isCurrentTrack = trackId == focusedTrackId;
            return (
              <g
                key={trackId}
                transform={`rotate(${(i * 360) / accountedTracks.length})`}
              >
                {arcMilestones.map((milestone) => {
                  const isCurrentMilestone =
                    isCurrentTrack && milestone == currentMilestoneId;
                  const isMet =
                    milestoneByTrack[trackId] >= milestone || milestone == 0;
                  const hasSpecialty = Boolean(track.specialty);
                  let isRecommended =
                    !isMet &&
                    (job?.trackMilestoneRecommendations?.[trackId] ?? 0) >=
                      milestone;
                  isRecommended = isRecommended
                    ? isRecommended
                    : hasSpecialty && milestone <= job?.level;
                  return (
                    arcFn.current && (
                      <path
                        key={milestone}
                        className={
                          "track-milestone " +
                          (isMet ? "is-met " : " ") +
                          (isCurrentMilestone
                            ? "track-milestone-current "
                            : " ") +
                          (isRecommended ? "track-milestone__recommended" : "")
                        }
                        onClick={() =>
                          handleTrackMilestoneChangeFn(trackId, milestone)
                        }
                        d={arcFn.current?.(milestone)}
                        style={{
                          fill: isMet
                            ? categoryColorScale(tracks[trackId].category)
                            : undefined,
                        }}
                      />
                    )
                  );
                })}
                <circle
                  r="8"
                  cx="0"
                  cy="-50"
                  style={{
                    fill: categoryColorScale(tracks[trackId].category),
                  }}
                  className={
                    "track-milestone " +
                    (isCurrentTrack && !currentMilestoneId
                      ? "track-milestone-current "
                      : "")
                  }
                  onClick={() => handleTrackMilestoneChangeFn(trackId, 0)}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </figure>
  );
};

export default NightingaleChart;
