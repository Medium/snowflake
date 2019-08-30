// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import LevelThermometer from '../components/LevelThermometer'
import { titlesIds, titles, trackIds, milestones, milestoneToPoints } from '../constants'
import PointSummaries from '../components/PointSummaries'
import type { Milestone, MilestoneMap, TrackId, Titles } from '../constants'
import React from 'react'
import Link from 'next/link'

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: Titles,
  focusedTrackId: TrackId,
}

const propsToState = (data: String): ?SnowflakeAppState => {
  if (!data) return null
  const result = defaultState()
  const dataValues = data
  if (!dataValues) return null
  
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(dataValues[i]))
  })
  if (dataValues[1] && dataValues[0]) result.name = dataValues[1] + ' ' + dataValues[0]
  if (dataValues[18] !== undefined) result.title[titlesIds[0]] = dataValues[18]
  if (dataValues[19] !== undefined) result.title[titlesIds[1]] = dataValues[19]
  if (dataValues[20] !== undefined) result.title[titlesIds[2]] = dataValues[20]
  if (dataValues[21] !== undefined) result.title[titlesIds[3]] = dataValues[21]
  
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
    milestoneByTrack: {
      'MOBILE': 0,
      'FRONTEND': 0,
      'SYSTEME': 0,
      'BACKEND': 0,
      'PROJECT_MANAGEMENT': 0,
      'COMMUNICATION': 0,
      'CRAFT': 0,
      'INITIATIVE': 0,
      'CAREER_DEVELOPMENT': 0,
      'ORG_DESIGN': 0,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 0,
      'MENTORSHIP': 0,
      'EVANGELISME': 0,
      'RECRUTEMENT': 0,
      'CULTURE': 0
    },
    focusedTrackId: 'MOBILE',
    title: {
      'SCRUM_MASTER': 0,
      'EXTERNAL_REFERENT': 0,
      'ENGINEER_PROJECT_OWNER': 0,
      'ARCHITECTURE_OWNER': 0
    }
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    name: 'Cersei Lannister',
    title: {
      'SCRUM_MASTER': 0,
      'EXTERNAL_REFERENT': 0,
      'ENGINEER_PROJECT_OWNER': 1,
      'ARCHITECTURE_OWNER': 1
    },
    milestoneByTrack: {
      'MOBILE': 1,
      'FRONTEND': 2,
      'SYSTEME': 3,
      'BACKEND': 2,
      'PROJECT_MANAGEMENT': 4,
      'COMMUNICATION': 1,
      'CRAFT': 1,
      'INITIATIVE': 4,
      'CAREER_DEVELOPMENT': 3,
      'ORG_DESIGN': 2,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 4,
      'MENTORSHIP': 2,
      'EVANGELISME': 2,
      'RECRUTEMENT': 3,
      'CULTURE': 0
    },
    focusedTrackId: 'MOBILE'
  }
}

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  console.log('paso por aqui')
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.title))
  return values.join(',')
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)

    this.state = emptyState()
    if (props.data) {
      this.state = propsToState(props.data)
    } 
  }

  componentDidUpdate() {
    stateToHash(this.state)
  }

  render() {
    let titleList;

    if (this.props.pageType) {
      titleList = <ul>
        {titlesIds.map((eligibleTitle, i) => (
          <li key={eligibleTitle}>
            <input type="checkbox" defaultChecked={this.state.title[eligibleTitle]} disabled/>
            <Link href={titles[eligibleTitle].url}><a>{titles[eligibleTitle].label}</a></Link>
          </li>
        ))}
      </ul>
    }
    return (
      <main>
        <style jsx global>{`
          body {
            font-family: 'proxima nova', sans-serif;
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
            {titleList}
            <PointSummaries milestoneByTrack={this.state.milestoneByTrack} />
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
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <Track
            milestoneByTrack={this.state.milestoneByTrack}
            trackId={this.state.focusedTrackId}
            handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }
}

export default SnowflakeApp
