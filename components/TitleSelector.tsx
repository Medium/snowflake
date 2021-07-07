// @flow

import React from "react";
import { eligibleTitles } from "../logic/titles";
import { MilestoneMap } from "../constants/tracks";

type Props = {
  milestoneByTrack: MilestoneMap;
  currentTitle: string;
  setTitleFn: (string) => void;
};

class TitleSelector extends React.Component<Props> {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack);
    return (
      <select
        value={this.props.currentTitle}
        onChange={(e) => this.props.setTitleFn(e.target.value)}
      >
        <style jsx>{`
          select {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 20px;
            min-width: 300px;
          }
        `}</style>
        {titles.map((title) => (
          <option key={title}>{title}</option>
        ))}
      </select>
    );
  }
}

export default TitleSelector;
