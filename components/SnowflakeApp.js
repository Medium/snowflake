// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import Wordmark from '../components/Wordmark'
import LevelThermometer from '../components/LevelThermometer'
import { eligibleTitles, trackIds, milestones, milestoneToPoints, cohorts } from '../constants'
import PointSummaries from '../components/PointSummaries'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'
import CurrentLevel from '../components/CurrentLevel'
import CohortSelector from '../components/CohortSelector'
import TitleSelector from '../components/TitleSelector'
import LevelSelector from '../components/LevelSelector'

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  level: number,
  focusedTrackId: TrackId,
}

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null
  const result = defaultState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[13]) result.level = decodeURI(hashValues[13])
  if (hashValues[14]) result.name = decodeURI(hashValues[14])
  if (hashValues[15]) result.cohort = decodeURI(hashValues[15])
  //if (hashValues[16]) result.title = decodeURI(hashValues[16])
  return result
}

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch(value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

const emptyState = (): SnowflakeAppState => {
  return {
    name: '',
    cohort: '',
    title: '',
    level: 0,
    milestoneByTrack: {
      'CHAPTER_ONE': 0,
      'CHAPTER_TWO': 0,
      'CHAPTER_THREE': 0,
      'CHAPTER_FOUR': 0,
      'PLANNING': 0,
      'COLLABORATION': 0,
      'CLIENT_VALUE': 0,
      'INITIATIVE': 0,
      'COMPLEXITY': 0,
      'MATURITY': 0,
      'LEARNING': 0,
      'INFLUENCE': 0,
      'MENTORSHIP': 0,
    },
    focusedTrackId: 'CHAPTER_ONE',
    version: "1.0.3"
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    name: 'Palantiri Name',
    cohort: 'Project Management',
    title: 'Project Manager, III',
    level: 4,
    milestoneByTrack: {
      'CHAPTER_ONE': 2,
      'CHAPTER_TWO': 2,
      'CHAPTER_THREE': 2,
      'CHAPTER_FOUR': 2,
      'PLANNING': 2,
      'COLLABORATION': 2,
      'CLIENT_VALUE': 2,
      'INITIATIVE': 2,
      'COMPLEXITY': 2,
      'MATURITY': 2,
      'LEARNING': 2,
      'INFLUENCE': 2,
      'MENTORSHIP': 2,
    },
    focusedTrackId: 'CHAPTER_ONE'
  }
}

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.level), encodeURI(state.name), encodeURI(state.cohort))
  return values.join(',')
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const state = hashToState(window.location.hash)
    if (state) {
      this.setState(state)
    } else {
      this.setState(defaultState())
    }
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          body {
            font-family: Helvetica;
            color: #4c5b67;
            padding: 0;
            margin: 0;
          }
          .grid {
            width: 90%;
            max-width: 1300px
            margin: 0 auto;
          }
          .logo {
            margin: 1.5em auto;
            max-width: 150px;
          }
          .header {
            padding: 2em 0;
            background-color: #1A262F;
          }
          .header-form {
            display: flex;
          }
          .header-form form {
            display: flex;
            align-items: stretch;
            justify-content: center;
            flex-wrap: nowrap;
            width: 100%;
          }
          .name-input {
            border: 0;
            border-bottom: 2px solid #7e97a0;
            background: transparent;
            color: #fff;
            display: inline;
            font-size: 26px;
            line-height: 30px;
            font-weight: bold;
            width: 50%;
            margin-right: 50px;
            padding: .25em .125em;
          }
          .name-input:hover, .name-input:focus, .name-input:active {
            border-color: #11a9a1;
            background-color: rgba(17, 169, 161, .125);
            outline: 0;
          }
          .form-input {
            display: inline-block;
            margin-right: 10px;
            font-size: 14px;
            color: #fff;
          }
          .form-input label {
            margin-right: 10px;
          }
          .select-wrapper {
            display: inline-block;
            height: 3em;
            border-bottom: 2px solid #7e97a0;
            margin-right: 10px;
          }
          .select-wrapper:active, .select-wrapper:focus, .select-wrapper:hover {
            border-color: #11a9a1;
            background-color: rgba(17, 169, 161, .125);
            cursor: pointer;
          }
          a {
            color: #109C95;
            text-decoration: none;
          }
          a:active, a:hover, a:focus {
            text-decoration: underline;
          }
          .scoring {
            display: flex;
            flex-wrap: nowrap;
          }
          .panel {
            padding: 2em;
          }
          .panel:first-of-type {
            margin-right: 2em;
            padding-right: 4em;
            border-right: 1px solid #E1E9EF;
          }
          .career-summary-wrapper {
            color: #fff;
            padding: 2em 0;
            background-color: #1A262F;
          }
          .footer {
            color: #fff;
            padding: 2em 0;
            background-color: #1A262F;
            border-top: 1px solid #4c5b67; 
            text-align: center
          }
          .footer span {
            margin: 0 2em;
          }
        `}</style>
        <div className="header">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="185.8" height="29.5"><defs/><path d="M160.7 23.8v-9.5c0-4.5-2.2-6.4-5.4-6.4a5.26 5.26 0 00-4.3 2.2V8.3h-2.2v15.5h2.2v-9.1c0-3.4 1.7-4.8 3.8-4.8 2.5 0 3.7 1.5 3.7 4.8v9.1z" fill="#fff"/><path d="M14.2 20.3a6.23 6.23 0 006.2-6.2 6.2 6.2 0 00-12.4 0 6.23 6.23 0 006.2 6.2" fill="#f16722"/><path d="M24.1 24H4.2V4.2H24V24zM14.2 0a14.15 14.15 0 1014.1 14.2A14.11 14.11 0 0014.2 0" fill="#0da9a0"/><path d="M14.2 8A6.2 6.2 0 118 14.2 6.17 6.17 0 0114.2 8m-10 16.1h20v-20h-20z" fill="#9fc854"/><path fill="#fff" d="M128 5.2v-4l-4.1 2v3.1l4.1-1.1zM123.9 8.3h4.1v15.5h-4.1zM142.3 9.1a4.36 4.36 0 00-6.1.3v-1h-4.1v15.5h4.1v-8.4c0-2.7 1-3.4 2.6-3.4a3.49 3.49 0 012.4 1zM145.3 22.3a1.9 1.9 0 00-3.8-.2v.2a2 2 0 002 1.8 2.12 2.12 0 001.8-1.8M120 19.1a3.4 3.4 0 01-2.3 1.2c-1 0-1.5-.4-1.5-1.9v-6.2h3.7V8.3h-3.7v-6l-4.1 2v4h-2.6v3.8h2.6v7.3c0 2.7 1.6 4.7 4.1 4.7a6.2 6.2 0 003.2-.9zM107.1 23.8v-8.7c0-4.4-1.8-7.1-5.7-7.1a5.24 5.24 0 00-3.6 1.4v-1h-4.1v15.5h4.1v-8.5c0-2.7 1-3.5 2.7-3.5s2.6.8 2.6 3.6v8.4h4zM83.5 8a9.79 9.79 0 00-5.8 1.6l1.6 2.9a7.22 7.22 0 014.3-1 2 2 0 012.2 2v.8a6.21 6.21 0 00-3-.6c-3.5 0-6.3 1.7-6.3 5.1 0 3.8 2.9 5.5 5.8 5.5a5 5 0 003.5-1.4v1h4.1V13.4C89.8 9.9 87.3 8 83.5 8zm2.2 11.3a3.5 3.5 0 01-2.8 1.4c-1.7 0-2.4-1-2.4-2.1s.8-1.9 2.4-1.9a4.46 4.46 0 012.8.6zM73.4 23.8V2.3l-4.1 2v19.5h4.1zM59 8a10.94 10.94 0 00-5.8 1.5l1.6 2.9a7.22 7.22 0 014.3-1 2 2 0 012.2 2v.8a6.21 6.21 0 00-3-.6c-3.5 0-6.3 1.7-6.3 5.1 0 3.8 2.9 5.5 5.8 5.5a5 5 0 003.5-1.4v1h4.1V13.4C65.3 9.9 62.8 8 59 8zm2.3 11.3a3.5 3.5 0 01-2.8 1.4c-1.7 0-2.4-1-2.4-2.1s.8-1.9 2.4-1.9a4.46 4.46 0 012.8.6zM43.7 8a5.07 5.07 0 00-3.3 1.3v-1h-4.1v21.2l4.1-2.1v-4.5a5 5 0 003.3 1.2c3.8 0 6-3.3 6-7.9 0-5.7-2.7-8.2-6-8.2zm-.5 12.3a3.72 3.72 0 01-2.8-1.3v-5.9a3 3 0 012.5-1.3c1.6 0 2.7 1.3 2.7 4.5 0 2.6-.9 4-2.4 4zM185.8 10.2V8.3H182v-6l-2.2 1.2v4.8h-1.9v1.9h1.9v10.5c0 2.6 1 3.5 3 3.5a9.29 9.29 0 002.9-.5l.1-1.9a4.13 4.13 0 01-2.2.4c-1.2 0-1.6-.5-1.6-1.9V10.2zM176.2 15.6c0-4.4-2.2-7.6-6.2-7.6-3.7 0-6.4 3.1-6.4 8 0 6.1 3.4 8.2 6.3 8.2a9.36 9.36 0 005.6-1.8l-1-1.6a6.63 6.63 0 01-4.3 1.5c-2.5 0-4.1-2.1-4.3-5.4h10.3zm-10.5-.6c.3-3.4 1.9-5.1 4.2-5.1 2.7 0 4 2.1 4.2 5.1z"/></svg>
          </div>
          <div className="header-form grid">
            <form>
                <input
                    type="text"
                    className="name-input"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                    placeholder="Name"
                    />
                <div className="form-input">
                  <label>Cohort:</label>
                  <span className="select-wrapper">
                  <CohortSelector
                      currentCohort={this.state.cohort}
                      setCohortFn={(cohort) => this.setCohort(cohort)} />
                  </span>
                </div>
                <div className="form-input">
                  <label>Level:</label>
                  <span className="select-wrapper">
                  <LevelSelector
                      level={this.state.level}
                      setLevelFn={(level) => this.setLevel(level)} />
                  </span>
                </div>
            </form>
            <div style={{flex: 0}}>
              {/*<NightingaleChart
                  milestoneByTrack={this.state.milestoneByTrack}
                  focusedTrackId={this.state.focusedTrackId}
                  handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />*/}
            </div>
          </div>
        </div>
        <div className="grid scoring">
          <div className="panel">
            <CurrentLevel
              milestoneByTrack={this.state.milestoneByTrack}
              level = {this.state.level} />
            <TrackSelector
              milestoneByTrack={this.state.milestoneByTrack}
              focusedTrackId={this.state.focusedTrackId}
              currentCohort={this.state.cohort}
              setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
          </div>
          <div className="panel">
            <Track
              milestoneByTrack={this.state.milestoneByTrack}
              trackId={this.state.focusedTrackId}
              currentCohort={this.state.cohort}
              handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
            <KeyboardListener
              selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
              selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
              increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
              decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
          </div>
        </div>
        <div className="career-summary-wrapper">
          <div className="grid">
            <PointSummaries
              milestoneByTrack={this.state.milestoneByTrack}
              level = {this.state.level} />
            {/*<LevelThermometer milestoneByTrack={this.state.milestoneByTrack} />*/}
          </div>
        </div>
        <div className="footer">
          <div className="grid">
            <span>
              Version {this.state.version}
            </span>
            <span>
              {this.getDate()}
            </span>
          </div>
        </div>
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    const titles = eligibleTitles(milestoneByTrack)
    const title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title
    const cohort = this.state.cohort

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title, cohort })
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    const cohort = this.state.cohort
    this.setState({ focusedTrackId, cohort })
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    const cohort = this.state.cohort
    this.setState({ focusedTrackId, cohort })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }

  setCohort(cohort: string) {
    this.setState({ cohort })
  }

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack, this.state.cohort)
    title = titles.indexOf(title) == -1 ? titles[0] : title
    this.setState({ title })
  }

  setLevel(level: number) {
    this.setState({ level })
  }

  getDate() {
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return new Date().toLocaleString('us-EN', dateOptions)
  }

}

export default SnowflakeApp
