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
  if (hashValues[13]) result.name = decodeURI(hashValues[13])
  if (hashValues[14]) result.cohort = decodeURI(hashValues[14])
  if (hashValues[15]) result.title = decodeURI(hashValues[15])
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
    version: "1.0.2"
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
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.level), encodeURI(state.name), encodeURI(state.cohort), encodeURI(state.title))
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
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          .name-input {
            border: 0;
            border-bottom: 2px solid #ccc;
            border-left: 2px solid #ccc;
            display: block;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-top: 10px;
            margin-bottom: 10px;
            padding-left: 8px;
          }
          .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #999;
            background: #eee;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <div style={{margin: '19px auto 0', width: 142}}>
          <svg width="182" height="30" viewBox="0 0 182 30" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M157.19 23.627v-9.214c0-4.347-2.1-6.219-5.296-6.219-1.9 0-3.311.893-4.174 2.16V8.511h-2.16v15.116h2.16v-8.84c0-3.31 1.64-4.721 3.743-4.721 2.418 0 3.57 1.467 3.57 4.721v8.839h2.158z" fill="#444342"></path><path d="M14.4 20.18a5.994 5.994 0 1 0-.004-11.987 5.994 5.994 0 0 0 .003 11.988" fill="#F16722"></path><path d="M24.063 23.85H4.736V4.522h19.328V23.85zM14.4.42C6.796.42.633 6.581.633 14.186c0 7.604 6.163 13.767 13.766 13.767 7.604 0 13.768-6.163 13.768-13.767 0-7.604-6.165-13.768-13.768-13.768z" fill="#0DA9A0"></path><path d="M14.4 8.193a5.994 5.994 0 1 1 0 11.988 5.994 5.994 0 0 1 0-11.988zM4.67 23.916h19.458V4.457H4.67v19.459z" fill="#9FC854"></path><path fill="#444342" d="M125.32 5.45V1.547l-3.973 1.987v3.01zm-3.973 3.061h3.973v15.116h-3.973zm17.85.749c-.517-.548-1.496-1.066-2.792-1.066-1.41 0-2.418.604-3.11 1.324V8.511h-3.972v15.116h3.973V15.45c0-2.62 1.007-3.282 2.563-3.282.892 0 1.67.404 2.303.98l1.035-3.889zm2.907 12.84c0-1.006-.865-1.9-1.843-1.9-1.006 0-1.842.894-1.842 1.9 0 1.008.836 1.843 1.842 1.843.979 0 1.843-.835 1.843-1.842M117.49 18.99c-.98.836-1.527 1.152-2.247 1.152-.95 0-1.469-.374-1.469-1.814v-6.074h3.629V8.511h-3.629V2.638l-3.973 1.986v3.887h-2.534v3.743h2.534v7.138c0 2.65 1.583 4.55 4.031 4.55 1.238 0 2.417-.401 3.08-.92l.577-4.031zm-12.586 4.637v-8.523c0-4.26-1.727-6.91-5.586-6.91-1.583 0-2.849.604-3.54 1.324V8.511h-3.974v15.116h3.974v-8.264c0-2.62.95-3.425 2.59-3.425 1.641 0 2.563.805 2.563 3.512v8.177h3.973zM81.957 8.194c-2.448 0-3.915.518-5.671 1.526l1.526 2.764c1.381-.748 2.331-1.007 4.145-1.007 1.44 0 2.16.863 2.16 1.928v.748c-.634-.316-1.526-.605-2.909-.605-3.425 0-6.131 1.671-6.131 5.01 0 3.656 2.821 5.384 5.642 5.384 1.411 0 2.678-.574 3.398-1.323v1.007h3.973V13.492c0-3.397-2.476-5.298-6.133-5.298zm2.16 10.997c-.432.72-1.47 1.383-2.764 1.383-1.7 0-2.304-.949-2.304-2.017 0-1.209.807-1.899 2.304-1.899 1.41 0 2.073.202 2.764.634v1.899zm-12.035 4.436V2.637l-3.973 1.987v19.003zM58.118 8.194c-2.447 0-3.916.518-5.671 1.526l1.525 2.764c1.382-.748 2.332-1.007 4.146-1.007 1.441 0 2.16.863 2.16 1.928v.748c-.633-.316-1.526-.605-2.908-.605-3.426 0-6.133 1.671-6.133 5.01 0 3.656 2.822 5.384 5.643 5.384 1.41 0 2.678-.574 3.398-1.323v1.007h3.973V13.492c0-3.397-2.475-5.298-6.133-5.298zm2.16 10.997c-.432.72-1.469 1.383-2.764 1.383-1.699 0-2.303-.949-2.303-2.017 0-1.209.806-1.899 2.303-1.899 1.411 0 2.073.202 2.764.634v1.899zM43.177 8.194c-1.44 0-2.448.604-3.195 1.267v-.95h-3.974v20.672l3.974-1.986v-4.434c.719.662 1.87 1.18 3.195 1.18 3.743 0 5.873-3.166 5.873-7.687 0-5.643-2.648-8.062-5.873-8.062zM42.659 20.2c-1.151 0-2.072-.46-2.676-1.296v-5.7c.575-.75 1.209-1.268 2.446-1.268 1.554 0 2.591 1.296 2.591 4.404 0 2.537-.835 3.86-2.36 3.86zm138.991-9.876V8.511h-3.743V2.638l-2.16 1.208V8.51h-1.872v1.813h1.873v10.193c0 2.505 1.007 3.425 2.879 3.425 1.151 0 1.956-.173 2.792-.518l.144-1.87c-.69.287-1.267.43-2.129.43-1.152 0-1.527-.46-1.527-1.812v-9.848h3.742zm-9.415 5.298c0-4.319-2.13-7.428-6.076-7.428-3.598 0-6.247 2.995-6.247 7.802 0 5.93 3.368 7.946 6.132 7.946 2.274 0 3.599-.605 5.413-1.755l-1.009-1.555c-1.381.921-2.417 1.44-4.174 1.44-2.477 0-4-2.044-4.204-5.27h10.078c.058-.344.087-.661.087-1.18zm-10.165-.575c.26-3.369 1.814-4.981 4.06-4.981 2.65 0 3.915 2.044 4.09 4.98h-8.15z"></path></g></svg>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <form>
              <input
                  type="text"
                  className="name-input"
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                  placeholder="Name"
                  />
              <div style={{margin: 0, 'line-height': '0.5em'}}>Cohort: &nbsp;&nbsp;
              <CohortSelector
                  currentCohort={this.state.cohort}
                  setCohortFn={(cohort) => this.setCohort(cohort)} /></div>
              <div style={{margin: 0, 'line-height': '0.5em'}}>Title: &nbsp;&nbsp;
              <TitleSelector
                  milestoneByTrack={this.state.milestoneByTrack}
                  currentTitle={this.state.title}
                  currentCohort={this.state.cohort}
                  setTitleFn={(title) => this.setTitle(title)} /></div>
              <div style={{margin: 0, 'line-height': '0.5em'}}>Level: &nbsp;&nbsp;
                <LevelSelector
                    level={this.state.level}
                    setLevelFn={(level) => this.setLevel(level)} /></div>
            </form>
            <PointSummaries
                milestoneByTrack={this.state.milestoneByTrack}
                level = {this.state.level} />
            <LevelThermometer milestoneByTrack={this.state.milestoneByTrack} />
          </div>
          <div style={{flex: 0}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            currentCohort={this.state.cohort}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <Track
            milestoneByTrack={this.state.milestoneByTrack}
            trackId={this.state.focusedTrackId}
            currentCohort={this.state.cohort}
            handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>

          </div>
          <div style={{flex: 2}}>
            Version {this.state.version}
          </div>
          <div style={{flex: 2}}>
            {this.getDate()}
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
