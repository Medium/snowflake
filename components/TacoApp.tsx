import React from 'react'
import TrackSelector from './TrackSelector'
import NightingaleChart from './NightingaleChart'
import KeyboardListener from './KeyboardListener'
import Track from './Track'
import LevelThermometer from './LevelThermometer'
import PointSummaries from './PointSummaries'
import TitleSelector from './TitleSelector'
import Attribution from './Attribution'
import FileImportExport from './FileImportExport'
import { TrackDefinition, MilestoneDefinition } from '../types/tracks';
import { Categories, Tracks, trackDefinitions } from '../types/definitions'
import { emptyTracks, eligibleTitles, trackIds, milestoneToPoints, highestMilestone, levelFromMilestoneMap, totalPointsFromMilestoneMap, pointsToNextLevelFromMilestoneMap } from '../types/calculations'
import NameInput from './NameInput'
import Evaluation from '../types/evaluation'
import Notes from './Notes'

type TacoAppState = {
  milestoneByTrack: Map<Tracks, number>,
  name: string,
  level: string,
  title: string,
  totalPoints: number,
  pointsToNextLevel: number | undefined,
  notes: string | undefined,
  focusedTrackId: Tracks,
}

const emptyState = (): TacoAppState => {
  return {
    name: '',
    level: '0',
    title: '',
    totalPoints: 0,
    pointsToNextLevel: 15,
    notes: undefined,
    milestoneByTrack: emptyTracks,
    focusedTrackId: Tracks.Frontend
  }
}

const defaultState = (): TacoAppState => {
  return emptyState();
}

type Props = {}

class TacoApp extends React.Component<Props, TacoAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidMount() {
    this.setState(defaultState());
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          body {
            font-family: Helvetica;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          .name-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 10px;
          }
          .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <form>
              <NameInput
                name={this.state.name}
                setNameFn={this.setName.bind(this)} />
              <TitleSelector
                milestoneByTrack={this.state.milestoneByTrack}
                currentTitle={this.state.title}
                setTitleFn={this.setTitle.bind(this)} />
            </form>
            <PointSummaries 
                level={this.state.level}
                totalPoints={this.state.totalPoints}
                pointsToNextLevel={this.state.pointsToNextLevel}
                milestoneByTrack={this.state.milestoneByTrack} />
            <LevelThermometer milestoneByTrack={this.state.milestoneByTrack} />
          </div>
          <div style={{flex: 0}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrack={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={this.handleTrackMilestoneChange.bind(this)} />
          </div>
        </div>
        <Notes
            notes={this.state.notes}
            setNotesFn={this.setNotes.bind(this)} />
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrack={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <Track
            milestoneByTrack={this.state.milestoneByTrack}
            track={this.state.focusedTrackId}
            handleTrackMilestoneChangeFn={this.handleTrackMilestoneChange.bind(this)} />
        <FileImportExport 
            name={this.state.name}
            level={this.state.level}
            title={this.state.title}
            totalPoints={this.state.totalPoints}
            milestoneByTrack={this.state.milestoneByTrack} 
            loadEvaluationFn={this.loadEvaluation.bind(this)} />
        <Attribution />
      </main>
    )
  }

  handleTrackMilestoneChange(track: Tracks, milestone: number) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack.set(track, milestone)

    const level = levelFromMilestoneMap(milestoneByTrack);
    const totalPoints = totalPointsFromMilestoneMap(milestoneByTrack);
    const pointsToNextLevel = pointsToNextLevelFromMilestoneMap(milestoneByTrack);

    const titles = eligibleTitles(milestoneByTrack)
    const title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title

    this.setState({ level, totalPoints, pointsToNextLevel, milestoneByTrack, focusedTrackId: track, title })
  }

  shiftFocusedTrack(delta: number) {
    // let index = trackIds.indexOf(this.state.focusedTrack);
    // index = (index + delta + trackIds.length) % trackIds.length;
    // const focusedTrack = 
    // this.setState({ focusedTrack });
  }

  setFocusedTrackId(track: Tracks) {
    this.setState({ focusedTrackId: track })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
    let milestone = prevMilestone + delta;
    if (milestone < 0) milestone = 0;
    if (milestone > highestMilestone) milestone = 5;
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
  }

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack)
    title = titles.indexOf(title) == -1 ? titles[0] : title
    this.setState({ title })
  }

  setName(name: string) {
    this.setState({ name });
  }

  setNotes(notes: string) {
    this.setState({ notes });
  }

  loadEvaluation(evaluation: Evaluation) {
    if (evaluation.name) this.setName(evaluation.name);

    if (evaluation.milestones) {
      const entries = evaluation.milestones.map<[Tracks, number]>(x => [Tracks[x[0]], x[1]]);
      const newMilestonesByTrack = new Map<Tracks, number>(entries);
      this.setState({milestoneByTrack: newMilestonesByTrack});
    }

    if (evaluation.title) this.setTitle(evaluation.title);
  }
}

export default TacoApp
