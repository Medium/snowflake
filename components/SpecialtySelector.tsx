// @flow

import React, { useCallback, useMemo } from "react";
import { specialties, SpecialtyId } from "../constants/tracks";
import Select from "react-select";

type Props = {
  specialties: SpecialtyId[];
  setSpecialtyFn: (specialties: SpecialtyId[]) => void;
};

const SpecialtySelector: React.FC<Props> = function SpecialtySelector(props) {
  const onChange = useCallback(
    (options: { value: SpecialtyId; label: SpecialtyId }[]) => {
      props.setSpecialtyFn(options.map(({ value }) => value));
    },
    [props.setSpecialtyFn]
  );
  const values = useMemo(
    () =>
      props.specialties
        .map((value) => specialties.find((option) => option.value === value))
        .filter(Boolean),
    [props.specialties]
  );
  return (
    <Select
      placeholder="Specialty"
      options={specialties}
      value={values}
      onChange={onChange}
      isMulti
    />
  );
};

export default SpecialtySelector;
