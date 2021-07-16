import { SpecialtyId, TrackId, trackIds, tracks } from "../constants/tracks";

export function getTracksWithSpecialties(
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

export function includes(list1: any[], list2: any[]) {
  return list1.some((item1) => {
    return list2.includes(item1);
  });
}
export function exclude(list1: any[], list2: any[]) {
  return list1.filter((item) => !list2.includes(item));
}
export function include(list1: any[], list2: any[]) {
  return list1.filter((item) => list2.includes(item));
}
