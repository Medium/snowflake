// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import TrackDetail from '../components/TrackDetail'
import { eligibleTitles, trackIds, milestones, milestoneToPoints } from '../constants'
import type { Milestone, MilestoneMap, TrackId, QuizResults } from '../constants'
import React from 'react'
import Link from 'next/link'

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId,
}

const quizResultToState = (props: QuizResults): ?SnowflakeAppState => {
  if (!props) return null
  const result = defaultState()
  // set answer values into returned state object
  const milestoneValues = Array.from(props.answerValues.toString()).map(Number);
  if (!milestoneValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = milestoneValues[i]
  })
  // set inputted name into returned state object
  if (!props.name) return null
  result.name = props.name

  return result
}

const emptyState = (): SnowflakeAppState => {
  return {
    name: '',
    milestoneByTrack: {
      'SELF': undefined,
      'TEAM': undefined,
      'PEERS': undefined,
      'SUPERIORS': undefined,
      'BUSINESS': undefined,
      'WORK/LIFE': undefined
    },
    focusedTrackId: 'SELF'
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    name: 'Name Not Found',
    title: '',
    milestoneByTrack: {
      'SELF': 2,
      'TEAM': 2,
      'PEERS': 2,
      'SUPERIORS': 2,
      'BUSINESS': 2,
      'WORK/LIFE': 2
    },
    focusedTrackId: 'SELF'
  }
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = quizResultToState(this.props)


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
          a {
            color: #888;
            text-decoration: none;
          }
          .title-text {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
            font-size: 3em;
            font-family: serif;
            font-weight: bold;
          }
          .title-text:hover {
            cursor: pointer;
          }
          .name-display {
            font-size: 40px;
            height: 40px;
            width: 350px;
            line-height: 40px;
            font-weight: bold;
            border-bottom: 2px solid #ccc;
            padding-bottom: 5px;
          }
        `}</style>
        <div style={{margin: '19px auto 0', textAlign: 'center', width: '100%'}}>
        <Link href={{ pathname: '/quiz' }}>
            <h1 className='title-text'>
              Manager Companion
            </h1>
          </Link>
        </div>
        <div style={{display: 'flex',
          borderBottom: '2px solid #ccc',
          paddingBottom: '20px'
          }}>
          <div style={{flex: 1,
            maxWidth:'45%'}}>
            <h1 className='name-display'>
              { this.state.name || <pre style={{margin:'0'}}> </pre> }
            </h1>
            <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
          </div>
          <div style={{flex: 0,
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center',
            minWidth: '55%'}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
          </div>
        </div>
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <TrackDetail
            milestoneByTrack={this.state.milestoneByTrack}
            trackId={this.state.focusedTrackId}
            handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>
            Made with ❤️ by <a href="" target="_blank"> Tyler</a> from the amazing open source work of <a href="https://medium.engineering" target="_blank">Medium Engineering</a>.
            Get the <a href="https://github.com/Medium/snowflake" target="_blank">original code</a>.
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

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title })
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

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack)
    title = titles.indexOf(title) == -1 ? titles[0] : title
    this.setState({ title })
  }
}

export default SnowflakeApp
