import React from 'react'
import { Tracks } from '../types/definitions';
import Evaluation from '../types/evaluation';
import { levelFromMilestoneMap, totalPointsFromMilestoneMap } from '../types/calculations';

type Props = {
  name: string,
  level: string,
  title: string,
  totalPoints: number,
  milestoneByTrack: Map<Tracks, number>,
  loadEvaluationFn: (Evaluation) => void,
};

class FileImportExport extends React.Component<Props> {
  async handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (!e.target || !e.target.files || !e.target.files[0])
      return;

    const contents = await e.target.files[0].text();
    const json = JSON.parse(contents);
    const evaluation = new Evaluation(json);

    this.props.loadEvaluationFn(evaluation);
  }

  getFilename() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${this.props.name} ${year}-${month}-${day}.json`;
  }

  getHref() {
    const milestones = Array.from(this.props.milestoneByTrack)
      .map(function(x): [string, number] {
          const [track, milestone] = x;
          const trackString = Tracks[track as Tracks];
          return [trackString, milestone];
        });
    const evaluation = new Evaluation({
      name: this.props.name, 
      level: this.props.level,
      title: this.props.title,
      totalPoints: this.props.totalPoints,
      milestones: milestones});
    const json = encodeURIComponent(JSON.stringify(evaluation));
    return `data:application/json;charset=utf-8,${json}`;
  }

  render() {
    const filename = this.getFilename();
    const href = this.getHref();
    return (
      <span style={{display:"inline-block"}}>
        Download: <a download={filename} href={href} target="_blank">🔽</a>
        <br />
        Upload: <input type="file" onChange={this.handleFileUpload.bind(this)}>
        </input>
      </span>
    );
  }
}

export default FileImportExport
