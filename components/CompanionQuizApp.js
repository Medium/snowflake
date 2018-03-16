// @flow

import { tracks, trackIds, } from '../constants'
import type { Tracks, Milestone, MilestoneMap, TrackId, answerValue } from '../constants'
import CompanionQuiz from './CompanionQuiz'
import Header from '../components/Header'
import React from 'react'

type CompanionQuizState = {
  milestoneByTrack: MilestoneMap,
  name: string
}

const stateToPath = (state: CompanionQuizState) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map((trackId) => {
    return state.milestoneByTrack[trackId]
  })
  return { pathname: '/', query: { answerValues: values.join(''), name: state.name} }
}

const defaultState = (): CompanionQuizState => {
  return {
    name: undefined,
    nameInputted: false,
    milestoneMatrix: {
      'SELF': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'TEAM': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'PEERS': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'SUPERIORS': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'BUSINESS': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'WORK/LIFE': {
        '0': 0,
        '1': 0,
        '2': 0,
      }
    },
    milestoneByTrack: {
      'SELF': 0,
      'TEAM': 0,
      'PEERS': 0,
      'SUPERIORS': 0,
      'BUSINESS': 0,
      'WORK/LIFE': 0
    }
  }
}

type Props = {}

class CompanionQuizApp extends React.Component<Props, CompanionQuizState> {
  constructor(props: Props) {
    super(props)
    this.state = defaultState()
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

          div.submit-button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border-radius: 5px;
            font-size: 40px;
            width: 150px;
            min-height: 50px;
            border: 5px solid #000;
            padding: 10px 20px;
            transition: background-color .5s ease;
            margin: 50px auto;
          }
          div.submit-button:hover {
            background-color: #202020;
            color: #fff;
            cursor: pointer;
          }

        `}</style>


        <Header menuOpen={null}/>

        <CompanionQuiz
          tracks={tracks}
          trackIds={trackIds}
          name={this.state.name}
          nameInputted={this.state.nameInputted}
          handleQuizSubmitFn={this.handleQuizSubmit.bind(this)}
          handleNameChangeFn={this.handleNameChange.bind(this)}
          handleMileStoneChangeFn={this.handleTrackMilestoneChange.bind(this)}/>

        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>
            Made with ❤️ by <a href="" target="_blank"> Tyler</a> from the amazing open source work of <a href="https://medium.engineering" target="_blank">Medium Engineering</a>.
            Get the <a href="https://github.com/Medium/snowflake" target="_blank">original code</a>.
          </div>
        </div>
      </main>
    )
  }

  // not sure why this is throwing a controlled component error... ?

  handleNameChange(name: String) {
    this.setState({name})
  }

  handleTrackMilestoneChange(trackId: TrackId, questionIndex: Number, milestone: Milestone) {
    const milestoneMatrix = this.state.milestoneMatrix
    milestoneMatrix[trackId][questionIndex] = milestone
    this.setState({ milestoneMatrix})
    const milestoneByTrack = this.state.milestoneByTrack
    let newMilestone = 0
    for(var key in milestoneMatrix[trackId]) {
      newMilestone += milestoneMatrix[trackId][key]
    }
    milestoneByTrack[trackId] = newMilestone
    this.setState({ milestoneByTrack })
  }

  handleQuizSubmit() {
    if (!this.state || !this.state.milestoneByTrack) return null
    const values = trackIds.map((trackId) => {
      return this.state.milestoneByTrack[trackId]
    })
    return { pathname: '/', query: { answerValues: values.join(''), name: this.state.name} }
  }

  // I want a method to be able to toggle quiz content after a name has been inputted

  // hideShowQuizContent() {
  //   if (this.state.nameInputted) {
  //     return (
  //       <p>this seems hella hacky</p>
  //     )
  //   }
  // }
}

export default CompanionQuizApp
