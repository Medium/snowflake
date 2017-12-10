// @flow

import { trackIds } from '../constants'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'

type CompanionQuizState = {
  milestoneByTrack: MilestoneMap,
  name: string
}

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null
  const result = defaultState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[16]) result.name = decodeURI(hashValues[16])
  if (hashValues[17]) result.title = decodeURI(hashValues[17])
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
      'SELF': undefined,
      'TEAM': undefined,
      'PEERS': undefined,
      'SUPERIORS': undefined,
      'BUSINESS': undefined,
      'HEALTH': undefined
    }
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    name: '',
    milestoneByTrack: {
      'SELF': 0,
      'TEAM': 0,
      'PEERS': 0,
      'SUPERIORS': 0,
      'BUSINESS': 0,
      'HEALTH': 0
    }
  }
}

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.title))
  return values.join(',')
}

type Props = {}

class CompanionQuiz extends React.Component<Props, CompanionQuizState> {
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
          a {
            color: #888;
            text-decoration: none;
          }
          .name-input {
            border: none;
            display: block;
            font-size: 40px;
            height: 40px;
            width: 350px;
            line-height: 40px;
            font-weight: bold;
            border-bottom: 2px solid #ccc;
            padding-top: .67em;
            padding-bottom: 5px;
          }
          .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
        `}</style>
        <div style={{margin: '19px auto 0', textAlign: 'center', width: '100%'}}>
          <h1 style={{marginTop: 0, paddingBottom: 20, borderBottom: '2px solid #ccc', fontSize:'3em', fontFamily:'serif', fontWeight:'bold'}}>Manager Companion</h1>
        </div>
        <div>
          <input
            type="text"
            className="name-input h1"
            placeHolder='Your Name'
            autofocus='autofocus'
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}
            />
        </div>
        <div className='quiz-content'>
          
        </div>

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

export default CompanionQuiz
