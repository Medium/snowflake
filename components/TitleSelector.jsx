// @flow

import React from 'react';
import { eligibleTitles } from '../data/constants';
import type { MilestoneMap } from '../data/constants';

type Props = {
  milestoneByTrack: MilestoneMap,
  currentTitle: string,
  setTitleFn: (string) => void
}

const TitleSelector = ({
  milestoneByTrack,
  currentTitle,
  setTitleFn,
}: Props) => {
  const titles = eligibleTitles(milestoneByTrack);
  return (
    <select value={currentTitle} onChange={(e) => setTitleFn(e.target.value)}>
      <style jsx>
        {`
        select {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}
      </style>
      {titles.map((title) => (
        <option key={title}>
          {title}
        </option>
      ))}
    </select>
  );
};

export default TitleSelector;
