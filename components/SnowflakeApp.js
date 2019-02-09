// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import { milestones, milestoneToPoints, getTracksForDomain, getCategoryColorScaleFromTracks } from '../constants'
import type { DomainId, Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'
import DomainSelector from '../components/DomainSelector'

type SnowflakeAppState = {
  domain: DomainId,
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId,
}

const hashToState = (hash: String, trackIds: Array<TrackId>): ?SnowflakeAppState => {
  if (!hash) return null
  const result = defaultState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[16]) result.name = decodeURI(hashValues[16])
  if (hashValues[17]) result.title = decodeURI(hashValues[17])
  if (hashValues[18]) result.domain = decodeURI(hashValues[18])
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
    domain: '',
    name: '',
    title: '',
    milestoneByTrack: {
      'MOBILE': 0,
      'WEB_CLIENT': 0,
      'FOUNDATIONS': 0,
      'SERVERS': 0,
      'PROJECT_MANAGEMENT': 0,
      'COMMUNICATION': 0,
      'CRAFT': 0,
      'INITIATIVE': 0,
      'CAREER_DEVELOPMENT': 0,
      'ORG_DESIGN': 0,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 0,
      'MENTORSHIP': 0,
      'EVANGELISM': 0,
      'RECRUITING': 0,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    domain: 'FULLSTACK',
    name: 'Cersei Lannister',
    title: 'Staff Engineer',
    milestoneByTrack: {
      'MOBILE': 1,
      'WEB_CLIENT': 2,
      'FOUNDATIONS': 3,
      'SERVERS': 2,
      'PROJECT_MANAGEMENT': 4,
      'COMMUNICATION': 1,
      'CRAFT': 1,
      'INITIATIVE': 4,
      'CAREER_DEVELOPMENT': 3,
      'ORG_DESIGN': 2,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 4,
      'MENTORSHIP': 2,
      'EVANGELISM': 2,
      'RECRUITING': 3,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  }
}

const getIdForTrack = (track, tracks) => {
  return Object.keys(tracks).find(trackId => {
    return tracks[trackId] === track;
  });
}

const stateToHash = (state: SnowflakeAppState, trackIds: Array<TrackId>) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.title), encodeURI(state.domain))
  return values.join(',')
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const trackIds = Object.keys(getTracksForDomain(this.state.domain))
    const hash = stateToHash(this.state, trackIds)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const trackIds = Object.keys(getTracksForDomain(this.state.domain))
    const state = hashToState(window.location.hash, trackIds)
    if (state) {
      this.setState(state)
    } else {
      this.setState(defaultState())
    }
  }

  render() {
    const tracks = getTracksForDomain(this.state.domain);
    const categoryColorScale = getCategoryColorScaleFromTracks(tracks);
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
              <input
                  type="text"
                  className="name-input"
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                  placeholder="Name"
                  />
              <DomainSelector
                  currentDomain={this.state.domain}
                  setDomainFn={(domain) => this.setDomain(domain)} />
            </form>
          </div>
          <div style={{flex: 0}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)}
                tracks={tracks}
                categoryColorScale={categoryColorScale} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}
            tracks={tracks}
            categoryColorScale={categoryColorScale} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <Track
            currentMilestoneValue={this.state.milestoneByTrack[this.state.focusedTrackId]}
            track={tracks[this.state.focusedTrackId]}
            handleTrackMilestoneChangeFn={(trackId, milestone) => this.handleTrackMilestoneChange(trackId, milestone)}
            categoryColorScale={categoryColorScale} />
        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>
            Made with ❤️ by <a href="https://medium.engineering" target="_blank">Medium Eng</a>.
            Learn about the <a href="https://medium.com/s/engineering-growth-framework" target="_blank">growth framework</a>.
            Get the <a href="https://github.com/Medium/snowflake" target="_blank">source code</a>.
            Read the <a href="https://medium.com/p/85e078bc15b7" target="_blank">terms of service</a>.
          </div>
        </div>
      </main>
    )
  }

  handleTrackMilestoneChange(track: Track, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    const trackId = getIdForTrack(track, getTracksForDomain(this.state.domain))
    milestoneByTrack[trackId] = milestone

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(track: Track) {
    const focusedTrackId = getIdForTrack(track, getTracksForDomain(this.state.domain))
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }

  setDomain(domain: string) {
    this.setState({ domain })
  }
}

export default SnowflakeApp
