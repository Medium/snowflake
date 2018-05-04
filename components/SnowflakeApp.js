// @flow

import { isEmpty, isUndefined, mapValues } from 'lodash'
import { Div, H1 } from 'glamorous'
import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import Wordmark from '../components/Wordmark'
import LevelThermometer from '../components/LevelThermometer'
import { milestoneToPoints, departments } from '../constants'
import type { RoleToLevel, Tracks } from '../constants'
import PointSummaries from '../components/PointSummaries'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'
import Modal from 'react-modal'
import UploadModal from './UploadModal/UploadModal'
import api from '../api/api'
import coerceMilestone from '../utils/coerceMilestone'
import FunButton from '../glamorous/FunButton'
import Spinner from './Spinner'
import { teal2 } from '../palette'
import type { UserData } from '../models/UserData'
import UserSelect from './UserSelect'

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId?: TrackId,
  isUploadModalOpen: boolean,
  tracks?: Tracks,
  trackIds: Array<string>,
  roleToLevel?: RoleToLevel,
  loadingData: boolean,
  users: Array<string>,
  selectedUser: string,
  selectedUserData?: UserData,
  promotionModalOpen: boolean
}

const emptyState = (): SnowflakeAppState => {
  return {
    name: '',
    title: '',
    milestoneByTrack: {
    },
    isUploadModalOpen: false,
    trackIds: [],
    loadingData: true,
    users: [],
    selectedUser: '',
    promotionModalOpen: false
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    name: 'Cersei Lannister',
    title: 'Staff Engineer',
    milestoneByTrack: {
    },
    isUploadModalOpen: false,
    trackIds: [],
    loadingData: true,
    users: [],
    selectedUser: '',
    promotionModalOpen: false
  }
}

const defaultMilestoneByTrack = (tracks?: Tracks) => {
  return mapValues(tracks, () => 0);
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidMount() {
    // request for the the initial constants - the defualt will be engineering masterconfig
    Promise.all([api.getMasterConfig(departments[0]), api.fetchUsers()])
      .then(([{ role, rating}, users]) => {
        this.setState({
          roleToLevel: role,
          tracks: rating,
          trackIds: Object.keys(rating),
          milestoneByTrack: mapValues(rating, _ => 0),
          focusedTrackId: Object.keys(rating)[0],
          loadingData: false,
          users
        })
      })
      .catch(() => {
        this.setState({
          ...defaultState(),
          loadingData: false
        })
      })

      this.setState(defaultState())
  }

  fetchConfig = () => {
    Promise.all([api.getMasterConfig(departments[0]), api.fetchUsers()])
      .then(([{ role, rating}, users]) => {
        this.setState({
          roleToLevel: role,
          tracks: rating,
          trackIds: Object.keys(rating),
          milestoneByTrack: mapValues(rating, _ => 0),
          focusedTrackId: Object.keys(rating)[0],
          loadingData: false,
          users
        })
      })
  }

  toggleUploadModal = () => {
    
    this.setState({
      isUploadModalOpen: !this.state.isUploadModalOpen
    })
  }

  selectUser = (e: any) => {
    const userName: string = e.target.value;
    api.fetchUser(userName)
      .then(userData => {
        this.setState({
          selectedUser: userName,
          selectedUserData: userData,
          milestoneByTrack: isEmpty(userData.ratings) ? defaultMilestoneByTrack(this.state.tracks) : userData.ratings
        })
      })
  }

  renderUserSelect = () => {
    if (!this.state.tracks || typeof this.state.focusedTrackId === 'undefined') return null;

    return (
      <UserSelect selectedUser={this.state.selectedUser} users={this.state.users} selectUser={this.selectUser}/>
    ) 
  }

  saveUser = () => {
    api.saveUser(
      this.state.milestoneByTrack,
      this.state.selectedUserData.ladder[0], // hack
      this.state.selectedUser)
  }

  togglePromotionModal = () => {
    this.setState({
      promotionModalOpen: !this.state.promotionModalOpen
    })
  }

  renderProjectedThresholds = () => {
    const { tracks, trackIds, selectedUserData, roleToLevel } = this.state;

    if (!selectedUserData) return null

    const ladder = selectedUserData.ladder;

    return ladder.map(role => {
      const levels = roleToLevel[role];

      return <NightingaleChart
          label={`Min Thresholds for ${role}`}
          tracks={tracks}
          milestoneByTrack={levels}
          focusedTrackId={null}
          trackIds={trackIds}
          handleTrackMilestoneChangeFn={() => {}} />

    }) 
  }

  renderVisualiations = () => {
    if (!this.state.roleToLevel || !this.state.selectedUserData || !this.state.selectedUser || !this.state.tracks || typeof this.state.focusedTrackId === 'undefined') return null;
    const trackIds = Object.keys(this.state.tracks);

    const nextRoleToLevel = this.state.roleToLevel[this.state.selectedUserData.ladder[0]];

    return (
      <div>
        {/* <UserSelect selectedUser={this.state.selectedUser} users={this.state.users} selectUser={this.selectUser}/> */}
        <div style={{display: 'flex'}}>
          <PointSummaries
              user={this.state.selectedUser}
              milestoneByTrack={this.state.milestoneByTrack}
              saveUser={this.saveUser}
              nextRoleToLevel={nextRoleToLevel} />
        </div>
        <div style={{flex: 0, display: 'flex'}}>
        <NightingaleChart
            label={`Current Score as a ${this.state.selectedUserData.currentRole}`}
            tracks={this.state.tracks}
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            trackIds={trackIds}
            handleTrackMilestoneChangeFn={() => {}} />
        {this.renderProjectedThresholds()}
        </div>
      <TrackSelector
          tracks={this.state.tracks}
          milestoneByTrack={this.state.milestoneByTrack}
          focusedTrackId={this.state.focusedTrackId}
          setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}
          trackIds={trackIds} />
      <KeyboardListener
          selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
          selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
          increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
          decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
      <Track
          tracks={this.state.tracks}
          trackId={this.state.focusedTrackId}
          milestoneByTrack={this.state.milestoneByTrack}
          handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
      </div>
    )
  }

  renderFirstToCome = () => {
    const { tracks } = this.state;

    return !tracks
      ? <H1 maxWidth="750px" margin="100px auto">
          We don't have any configurations yet! Be the first to upload one.
        </H1>
      : null;
  }

  renderContent = () => {
    if (this.state.loadingData) return <div style={{height:"60vh", display:"flex", alignItems:"center"}}><Spinner /></div>;

    return (
      <Div textAlign="center" height="500px">
        {this.renderFirstToCome()}
        <FunButton marginBottom="50px" onClick={() => this.toggleUploadModal()} width="500px" height="50px" display="block">
          upload a new matrix
        </FunButton>

        {this.renderUserSelect()}

        {this.renderVisualiations()}
        <UploadModal
          isModalOpen={this.state.isUploadModalOpen}
          fetchConfig={this.fetchConfig}
          toggleModal={this.toggleUploadModal} />
      </Div>
    )
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
          .spinner {
            width: 40px;
            height: 40px;
            position: relative;
          }

          .cube1, .cube2 {
            background-color: ${teal2};
            width: 15px;
            height: 15px;
            position: absolute;
            top: 0;
            left: 0;
            
            -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
            animation: sk-cubemove 1.8s infinite ease-in-out;
          }

          .cube2 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
          }

          @-webkit-keyframes sk-cubemove {
            25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
            50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
            75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
            100% { -webkit-transform: rotate(-360deg) }
          }

          @keyframes sk-cubemove {
            25% { 
              transform: translateX(42px) rotate(-90deg) scale(0.5);
              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
            } 50% { 
              transform: translateX(42px) translateY(42px) rotate(-179deg);
              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
            } 50.1% { 
              transform: translateX(42px) translateY(42px) rotate(-180deg);
              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
            } 75% { 
              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
            } 100% { 
              transform: rotate(-360deg);
              -webkit-transform: rotate(-360deg);
            }
          }
        `}</style>
        <Div marginTop="100px">
          {this.renderContent()}
        </Div>
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {

    if (this.state.tracks === undefined) return;

    const isWithinRange = !isUndefined(this.state.tracks[trackId].milestones[milestone])

    const milestoneByTrack = this.state.milestoneByTrack
    if (isWithinRange) {
      milestoneByTrack[trackId] = milestone
    }

    this.setState({
      milestoneByTrack,
      focusedTrackId: isWithinRange ? trackId : this.state.focusedTrackId
      })
  }

  shiftFocusedTrack(delta: number) {
    const { trackIds } = this.state;
    if (!this.state.focusedTrackId) return;

    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    const { trackIds } = this.state;
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]

    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    if (!this.state.focusedTrackId) return;

    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5

    this.handleTrackMilestoneChange(this.state.focusedTrackId, coerceMilestone(milestone))
  }
}

export default SnowflakeApp
