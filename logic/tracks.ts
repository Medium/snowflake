import {
  MilestoneMap,
  SpecialtyId,
  TrackId,
  trackIds,
  specialtyTrackIds,
  tracks,
} from "../constants/tracks";
import { includes } from "./utils";

export function getInitialMilestones() {
  return Object.fromEntries(trackIds.map((id) => [id, 0])) as MilestoneMap;
}

export function getTracksWithSpecialties(
  specialties: SpecialtyId[],
  ids = specialtyTrackIds
) {
  return (
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
