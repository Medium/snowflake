// @flow

import React, { useCallback } from "react";
import { eligibleTitles } from "../logic/titles";
import { MilestoneMap, SpecialtyId } from "../constants/tracks";
import Select from "react-select";

type Props = {
  milestoneByTrack: MilestoneMap;
  specialties: SpecialtyId[];
  currentTitle: string;
  setTitleFn: (string) => void;
};

const TitleSelector: React.FC<Props> = function TitleSelector({
  currentTitle,
  milestoneByTrack,
  specialties,
  setTitleFn,
}) {
  const titles = eligibleTitles(milestoneByTrack, specialties).map((value) => ({
    value,
    label: value,
  }));
  const value = titles.find(({ value }) => (value = currentTitle));
  return (
    <Select
      value={value}
      onChange={(option) => setTitleFn(option.value)}
      options={titles}
    />
  );
};

export default TitleSelector;
