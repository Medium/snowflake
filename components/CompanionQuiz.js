// @flow

import { trackIds } from '../constants'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'

type CompanionQuizState = {
  milestoneByTrack: MilestoneMap,
  name: string
}

const hashToState = (hash: String): ?CompanionQuizState => {
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

const emptyState = (): CompanionQuizState => {
  return {
    name: undefined,
    nameInputted: false,
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

const defaultState = (): CompanionQuizState => {
  return {
    name: undefined,
    nameInputted: false,
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

const stateToHash = (state: CompanionQuizState) => {
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
          .box {
            border-radius: 5px;
            font-size: 150%;
          }
          .question-text {
            font-size: 1em;
          }
          .answer-text {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1em;
          }
          .radio-answer {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .radio-border {
            height: 20px;
            width: 20px;
            border-radius: 100%;
            border: 4px solid #000;
          }
          input.radio-button {
            position: absolute;
            visibility: hidden;
          }
        `}</style>
        <div style={{margin: '19px auto 0', textAlign: 'center', width: '100%'}}>
          <h1 style={{marginTop: 0, paddingBottom: 20, borderBottom: '2px solid #ccc', fontSize:'3em', fontFamily:'serif', fontWeight:'bold'}}>Manager Companion</h1>
        </div>
        <div style={{}}>
          <div style={{
            width: '45%'
            }}>
            <input
            type="text"
            className="name-input h1"
            placeHolder='Your Name'
            autofocus='autofocus'
            value={this.state.name}
            onChange={e => this.setState({
              name: e.target.value,
              nameInputted: true,
            })}
            />
          </div>
          <div className='instructions-text'>
            {
              // TODO: this is super hacky right now rewrite this section and use a cursor position library to delay appreance of instructions until cursor-reengagement
              this.state.name ? <div className='quiz-content'>
              <h2>For each of the following sections, use the scale to indicate how each statement applies to your current situation as a manager. It is important to evaluate the statements honestly and without over-thinking your answers.</h2>
              </div>: ''
            }
          </div>
          {
            // TODO: add transitions and movement in quiz a la this example: jhttps://github.com/mitchgavan/react-multi-choice-quiz/tree/master/src
          }
          <div className='quiz-content'>
            <div className='quiz-section'>
              <h1 className='quiz-section-heading'>Managing Yourself</h1>
              <div
                className='quiz-questions'
                style={{
                  display:'grid',
                  gridTemplateColumns: '35% 5% 20% 20% 20%'
                }}>

                <div className='box'></div>
                <div className='box'></div>
                <div className='box answer-text'><p>rarely</p></div>
                <div className='box answer-text'><p>sometimes</p></div>
                <div className='box answer-text'><p>usually</p></div>
                <div className='box question-text'>
                  <p>
                    The manager team in my department works effectively together to accomplish the needs of the business
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <div className='radio-border'>
                    <input
                    type="radio"
                    className="radio-button"
                    name="radioGroup1">
                      
                    </input>
                  </div>
                </div>
                <div className='box radio-answer'>
                  <input
                    type="radio"
                    className="radio-button"
                    name="radioGroup1"
                  />
                </div>
                <div className='box radio-answer'>
                  <input
                    type="radio"
                    className="radio-button"
                    name="radioGroup1"
                  />
                </div>
                <div className='box question-text'>
                  <p>
                    I regularly connect with managers outside my department and understand how my work impacts them
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>block</div>
                <div className='box radio-answer'>block</div>
                <div className='box radio-answer'>block</div>
                <div className='box question-text'>
                  <p>
                    I am able to put the needs of the business and my department ahead of the needs of my team
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>block</div>
                <div className='box radio-answer'>block</div>
                <div className='box radio-answer'>block</div>
              </div>
            </div>
          </div>
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

  hideShowQuizContent() {
    if (this.state.nameInputted) {
      return (
        <p>this seems hella hacky</p>
      )
    }
  }
}

export default CompanionQuiz
