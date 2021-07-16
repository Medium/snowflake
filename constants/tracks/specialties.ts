import { SpecialtyId } from "./types";

export const specialties = Object.values(SpecialtyId).map((value) => ({
  value,
  label: value,
}));
