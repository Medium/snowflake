// @flow

import { tracks, trackIds, } from '../constants'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import TrackQuestions from '../components/TrackQuestions'
import React from 'react'
import Link from 'next/link'

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

const emptyState = (): CompanionQuizState => {
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
      'SELF': undefined,
      'TEAM': undefined,
      'PEERS': undefined,
      'SUPERIORS': undefined,
      'BUSINESS': undefined,
      'WORK/LIFE': undefined
    }
  }
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

class CompanionQuiz extends React.Component<Props, CompanionQuizState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidMount() {
    this.setState(defaultState())
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
          .box {
            border-radius: 5px;
            font-size: 150%;
          }
          .question-text {
            font-size: 1em;
          }
          .answer-option {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1em;
          }
          .radio-input {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          input.radio-button {
            position: absolute;
            left: -9999px;
            visibility :hidden;
          }
          input.radio-button + .check {
            height: 22px;
            width: 22px;
            cursor: pointer;
            border-radius: 100%;
            border: 4px solid #000;
          	transition: border .5s linear;
          }
          input[type=radio]:checked ~ .check {
            background-color: #000;
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


        <div style={{margin: '25px auto 0', textAlign: 'center', width: '100%'}}>
          <h1 style={{marginTop: 0, paddingBottom: 20, borderBottom: '2px solid #ccc', fontSize:'3.5em', fontFamily:'serif', fontWeight:'bold', height:'80px'}}>Manager Companion</h1>
        </div>
        <div style={{
          width: '45%'
          }}>
          {
            // Def can't figure out why this input is throwing an error on change
          }
          <input
            type="text"
            className="name-input h1"
            style={{borderBottom: `2px solid ${ this.state.nameInputted ? '#ccc' : '#000' }`}}
            placeholder='Your Name'
            autoFocus='autofocus'
            value={this.state.name}
            onChange={e => {
              let newNameInputted = true
              if (e.target.value === "") newNameInputted = false
              console.log(newNameInputted)
              this.setState({
                name: e.target.value,
                nameInputted: newNameInputted,
              })
            }}
          />
        </div>
        <div style={{
          padding: '50px 0',
          minHeight: '125px',
          borderBottom: '2px solid #ccc'
          }}>
          <h2>For each of the following sections, use the scale to indicate how each statement applies to your current situation as a manager. It is important to evaluate the statements honestly and without over-thinking your answers.</h2>
          {
          //   // TODO: this is super hacky right now rewrite this section and use a cursor position library to delay appreance of instructions until cursor-reengagement
          //   this.state.name ? <h2>For each of the following sections, use the scale to indicate how each statement applies to your current situation as a manager. It is important to evaluate the statements honestly and without over-thinking your answers.</h2>: ''
          }
        </div>
          {
            // TODO: add transitions and movement in quiz a la this example: jhttps://github.com/mitchgavan/react-multi-choice-quiz/tree/master/src
          }
          {
            // TODO: move question grid into own component... try to separate further if possible
          }
          {
            // TODO: get rarely sometimes and usually to take on a fixed position on scroll
          }
        <div className='quiz-content'>

          {trackIds.map((trackId, trackIndex) => {
            return (
              <div key={trackIndex} className='quiz-section'>
                <h1 className='quiz-section-heading'>{tracks[trackId].longDisplayName}</h1>
                <TrackQuestions
                  trackId={trackId}
                  trackIndex={trackIndex}
                  questions={tracks[trackId].questions}
                  handleTrackMilestoneChangeFn={(track, question, milestone) => this.handleTrackMilestoneChange(track, question, milestone)} />
                </div>
              )
          }

          )}

        </div>

        <Link href={stateToPath(this.state)}>
          <div className='submit-button'>SUBMIT</div>
        </Link>


        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>
            Made with ❤️ by <a href="" target="_blank"> Tyler</a> from the amazing open source work of <a href="https://medium.engineering" target="_blank">Medium Engineering</a>.
            Get the <a href="https://github.com/Medium/snowflake" target="_blank">original code</a>.
          </div>
        </div>
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, questionIndex: Number, milestone: Milestone) {
    const milestoneMatrix = this.state.milestoneMatrix
    milestoneMatrix[trackId][questionIndex] = milestone
    this.setState({ milestoneMatrix})
    const milestoneByTrack = this.state.milestoneByTrack
    let newMilestone = 0;
    for(var key in milestoneMatrix[trackId]) {
      newMilestone += milestoneMatrix[trackId][key]
    }
    milestoneByTrack[trackId] = newMilestone
    this.setState({ milestoneByTrack })
  }

  hideShowQuizContent() {
    if (this.state.nameInputted) {
      return (
        <p>this seems hella hacky</p>
      )
    }
  }
}

export default CompanionQuiz
