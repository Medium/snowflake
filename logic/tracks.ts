import {
  MilestoneMap,
  SpecialtyId,
  TrackId,
  trackIds,
  specialtyTrackIds,
  tracks,
  MilestoneStates,
} from "../constants/tracks";
import { includes, unique } from "./utils";

export function getInitialMilestones() {
  return Object.fromEntries(trackIds.map((id) => [id, 0])) as MilestoneMap;
}
export function getInitialMilestoneStates() {
  return Object.fromEntries(
    trackIds.map((id) => [id, { milestone: 0, milestone_notes: [] }])
  ) as MilestoneStates;
}

export function getTracksWithSpecialties(
  specialties: SpecialtyId[],
  ids = specialtyTrackIds
) {
  return unique(
    specialties?.flatMap((specialtyId) => {
      return ids.filter((id) => tracks[id].specialty?.includes(specialtyId));
    }) ?? []
  );
}

export function getTracksIncludingSpecialties(
  specialties: SpecialtyId[],
  ids = trackIds
) {
  return (
    ids?.filter((trackId) => {
      return (
        !hasSpecialty(trackId) ||
        !specialties ||
        includes(tracks[trackId].specialty, specialties)
      );
    }) ?? []
  );
}

export function hasSpecialty(trackId: TrackId) {
  return tracks[trackId].specialty;
}
