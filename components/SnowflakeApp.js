import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import LevelThermometer from '../components/LevelThermometer'
import { rolesIds, roles, trackIds, milestones, milestoneToPoints } from '../constants'
import PointSummaries from '../components/PointSummaries'
import React from 'react'
import Link from 'next/link'

const propsToState = (data) => {
  if (!data) return null
  const result = defaultState()
  const dataValues = data
  if (!dataValues) return null
  
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = dataValues[trackId]
  })
  result.name = dataValues.FIRSTNAME + ' ' + dataValues.LASTNAME;
  result.role['ARCHITECTURE_OWNER'] = dataValues['Architecture Owner'];
  result.role['EXTERNAL_REFERENT'] = dataValues['External Referent'];
  result.role['ENGINEER_PROJECT_OWNER'] = dataValues['Engineering Project Owner'];
  result.role['SCRUM_MASTER'] = dataValues['Scrum Master'];

  return result
}

const emptyState = () => {
  return {
    name: '',
    milestoneByTrack: {
      MOBILE: 0,
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
    role: {
      'SCRUM_MASTER': 0,
      'EXTERNAL_REFERENT': 0,
      'ENGINEER_PROJECT_OWNER': 0,
      'ARCHITECTURE_OWNER': 0
    }
  }
}

const defaultState = () => {
  return {
    name: 'Tony Stark',
    role: {
      'SCRUM_MASTER': 0,
      'EXTERNAL_REFERENT': 0,
      'ENGINEER_PROJECT_OWNER': 1,
      'ARCHITECTURE_OWNER': 1
    },
    milestoneByTrack: {
      'MOBILE': 1,
      'FRONTEND': 2,
      'SYSTEME': 4,
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
    focusedTrackId: 'PROJECT_MANAGEMENT'
  }
}

const stateToHash = (state) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.role))
  return values.join(',')
}



class SnowflakeApp extends React.Component {
  constructor(props) {
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
    let roleList;

    if (this.props.pageType) {
      roleList = <ul className="titleList">
        {rolesIds.map((eligibleRole, i) => (
          <li key={eligibleRole} className={this.state.role[eligibleRole] ? 'checked' : ''}>
            <Link href={roles[eligibleRole].url}><a target='_blank'>{roles[eligibleRole].label}</a></Link>
          </li>
        ))}
      </ul>
    }
    return (
      <main>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            {roleList}
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

  handleTrackMilestoneChange(trackId, milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack(delta) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }
}

export default SnowflakeApp
