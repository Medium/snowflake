// @flow

import { trackIds } from '../constants'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'
import Link from 'next/link'

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
      'WORK/LIFE': undefined
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
      'WORK/LIFE': 0
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
            transition: background-color .2s ease, color .5s linear;
            margin: 50px auto;
          }
          div.submit-button:hover {
            background-color: #202020;
            color: #fff;
            cursor: pointer;
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
              placeholder='Your Name'
              autoFocus='autofocus'
              value={this.state.name}
              onChange={e => this.setState({
                name: e.target.value,
                nameInputted: true,
              })}
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

            <div className='quiz-section'>
              <h1 className='quiz-section-heading'>Managing Yourself</h1>
              <div
                className='quiz-questions'
                style={{
                  display:'grid',
                  gridTemplateColumns: '35% 5% 20% 20% 20%',
                  paddingBottom: '10px',
                  marginBottom: '40px',
                  borderBottom: '2px solid #ccc'
                }}>

                <div className='box'></div>
                <div className='box'></div>
                <div className='box answer-text'><p>rarely</p></div>
                <div className='box answer-text'><p>sometimes</p></div>
                <div className='box answer-text'><p>usually</p></div>
                <div className='box question-text'>
                  <p>
                    I take time to prioritize what I need to get done and always work on the most important things first.
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-a'>
                    <input
                    id='input-a'
                    type="radio"
                    className="radio-button"
                    name="radioGroup1"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-b'>
                    <input
                    id='input-b'
                    type="radio"
                    className="radio-button"
                    name="radioGroup1"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-c'>
                    <input
                    id='input-c'
                    type="radio"
                    className="radio-button"
                    name="radioGroup1"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I control my calendar, and regularly weed out meetings and other demands on my time if I don't know their importance
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-d'>
                    <input
                    id='input-d'
                    type="radio"
                    className="radio-button"
                    name="radioGroup2"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-e'>
                    <input
                    id='input-e'
                    type="radio"
                    className="radio-button"
                    name="radioGroup2"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-f'>
                    <input
                    id='input-f'
                    type="radio"
                    className="radio-button"
                    name="radioGroup2"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I take time away from the day-to-day needs of my job to focus on the big picture
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-g'>
                    <input
                    id='input-g'
                    type="radio"
                    className="radio-button"
                    name="radioGroup3"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-h'>
                    <input
                    id='input-h'
                    type="radio"
                    className="radio-button"
                    name="radioGroup3"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-i'>
                    <input
                    id='input-i'
                    type="radio"
                    className="radio-button"
                    name="radioGroup3"/>
                    <div className="check"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className='quiz-section'>
              <h1 className='quiz-section-heading'>Managing You Team</h1>
              <div
                className='quiz-questions'
                style={{
                  display:'grid',
                  gridTemplateColumns: '35% 5% 20% 20% 20%',
                  paddingBottom: '10px',
                  marginBottom: '40px',
                  borderBottom: '2px solid #ccc'
                }}>

                <div className='box'></div>
                <div className='box'></div>
                <div className='box answer-text'><p>rarely</p></div>
                <div className='box answer-text'><p>sometimes</p></div>
                <div className='box answer-text'><p>usually</p></div>
                <div className='box question-text'>
                  <p>
                    My team comes to me with solutions, not just problems
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-jjj'>
                    <input
                    id='input-jjj'
                    type="radio"
                    className="radio-button"
                    name="radioGroup4"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-k'>
                    <input
                    id='input-k'
                    type="radio"
                    className="radio-button"
                    name="radioGroup4"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-l'>
                    <input
                    id='input-l'
                    type="radio"
                    className="radio-button"
                    name="radioGroup4"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I know what each of my team members hope to do with their career and what keeps them up at night
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-m'>
                    <input
                    id='input-m'
                    type="radio"
                    className="radio-button"
                    name="radioGroup5"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-n'>
                    <input
                    id='input-n'
                    type="radio"
                    className="radio-button"
                    name="radioGroup5"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-o'>
                    <input
                    id='input-o'
                    type="radio"
                    className="radio-button"
                    name="radioGroup5"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    My team works effectively together—they help each other with their work even if they have different roles
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-p'>
                    <input
                    id='input-p'
                    type="radio"
                    className="radio-button"
                    name="radioGroup6"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-q'>
                    <input
                    id='input-q'
                    type="radio"
                    className="radio-button"
                    name="radioGroup6"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-r'>
                    <input
                    id='input-r'
                    type="radio"
                    className="radio-button"
                    name="radioGroup6"/>
                    <div className="check"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className='quiz-section'>
              <h1 className='quiz-section-heading'>Managing Your Peers</h1>
              <div
                className='quiz-questions'
                style={{
                  display:'grid',
                  gridTemplateColumns: '35% 5% 20% 20% 20%',
                  paddingBottom: '10px',
                  marginBottom: '40px',
                  borderBottom: '2px solid #ccc'
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
                  <label htmlFor='input-s'>
                    <input
                    id='input-s'
                    type="radio"
                    className="radio-button"
                    name="radioGroup7"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-t'>
                    <input
                    id='input-t'
                    type="radio"
                    className="radio-button"
                    name="radioGroup7"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-u'>
                    <input
                    id='input-u'
                    type="radio"
                    className="radio-button"
                    name="radioGroup7"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I regularly connect with managers outside my department and understand how my work impacts them
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-v'>
                    <input
                    id='input-v'
                    type="radio"
                    className="radio-button"
                    name="radioGroup8"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-w'>
                    <input
                    id='input-w'
                    type="radio"
                    className="radio-button"
                    name="radioGroup8"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-x'>
                    <input
                    id='input-x'
                    type="radio"
                    className="radio-button"
                    name="radioGroup8"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I am able to put the needs of the business and my department ahead of the needs of my team
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-y'>
                    <input
                    id='input-y'
                    type="radio"
                    className="radio-button"
                    name="radioGroup9"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-z'>
                    <input
                    id='input-z'
                    type="radio"
                    className="radio-button"
                    name="radioGroup9"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-aa'>
                    <input
                    id='input-aa'
                    type="radio"
                    className="radio-button"
                    name="radioGroup9"/>
                    <div className="check"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className='quiz-section'>
              <h1 className='quiz-section-heading'>Managing Up</h1>
              <div
                className='quiz-questions'
                style={{
                  display:'grid',
                  gridTemplateColumns: '35% 5% 20% 20% 20%',
                  paddingBottom: '10px',
                  marginBottom: '40px',
                  borderBottom: '2px solid #ccc'
                }}>

                <div className='box'></div>
                <div className='box'></div>
                <div className='box answer-text'><p>rarely</p></div>
                <div className='box answer-text'><p>sometimes</p></div>
                <div className='box answer-text'><p>usually</p></div>
                <div className='box question-text'>
                  <p>
                    I am able to approach my boss when I'm facing a difficult situation
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-bb'>
                    <input
                    id='input-bb'
                    type="radio"
                    className="radio-button"
                    name="radioGroup10"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-cc'>
                    <input
                    id='input-cc'
                    type="radio"
                    className="radio-button"
                    name="radioGroup10"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-dd'>
                    <input
                    id='input-dd'
                    type="radio"
                    className="radio-button"
                    name="radioGroup10"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I know what I can do to help my boss without having to ask
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-ee'>
                    <input
                    id='input-ee'
                    type="radio"
                    className="radio-button"
                    name="radioGroup11"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-ff'>
                    <input
                    id='input-ff'
                    type="radio"
                    className="radio-button"
                    name="radioGroup11"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-gg'>
                    <input
                    id='input-gg'
                    type="radio"
                    className="radio-button"
                    name="radioGroup11"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I know my boss's top three priorities at any given time
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-hh'>
                    <input
                    id='input-hh'
                    type="radio"
                    className="radio-button"
                    name="radioGroup12"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-hhh'>
                    <input
                    id='input-hhh'
                    type="radio"
                    className="radio-button"
                    name="radioGroup12"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-ii'>
                    <input
                    id='input-ii'
                    type="radio"
                    className="radio-button"
                    name="radioGroup12"/>
                    <div className="check"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className='quiz-section'>
              <h1 className='quiz-section-heading'>Managing the Business</h1>
              <div
                className='quiz-questions'
                style={{
                  display:'grid',
                  gridTemplateColumns: '35% 5% 20% 20% 20%',
                  paddingBottom: '10px',
                  marginBottom: '40px',
                  borderBottom: '2px solid #ccc'
                }}>

                <div className='box'></div>
                <div className='box'></div>
                <div className='box answer-text'><p>rarely</p></div>
                <div className='box answer-text'><p>sometimes</p></div>
                <div className='box answer-text'><p>usually</p></div>
                <div className='box question-text'>
                  <p>
                    I know the major objectives of the company and how I contribute to their success
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-aaa'>
                    <input
                    id='input-aaa'
                    type="radio"
                    className="radio-button"
                    name="radioGroup13"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-bbb'>
                    <input
                    id='input-bbb'
                    type="radio"
                    className="radio-button"
                    name="radioGroup13"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-ccc'>
                    <input
                    id='input-ccc'
                    type="radio"
                    className="radio-button"
                    name="radioGroup13"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    My team understands how their work impacts the bigger picture
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-ddd'>
                    <input
                    id='input-ddd'
                    type="radio"
                    className="radio-button"
                    name="radioGroup14"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-eee'>
                    <input
                    id='input-eee'
                    type="radio"
                    className="radio-button"
                    name="radioGroup14"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-fff'>
                    <input
                    id='input-fff'
                    type="radio"
                    className="radio-button"
                    name="radioGroup14"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    I understand the how the business works—how a dollar enters, moves through, and leaves the organization
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-hhhh'>
                    <input
                    id='input-hhhh'
                    type="radio"
                    className="radio-button"
                    name="radioGroup15"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-iii'>
                    <input
                    id='input-iii'
                    type="radio"
                    className="radio-button"
                    name="radioGroup15"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-jj'>
                    <input
                    id='input-jj'
                    type="radio"
                    className="radio-button"
                    name="radioGroup15"/>
                    <div className="check"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className='quiz-section'>
              <h1 className='quiz-section-heading'>Managing Work & Life</h1>
              <div
                className='quiz-questions'
                style={{
                  display:'grid',
                  gridTemplateColumns: '35% 5% 20% 20% 20%',
                  paddingBottom: '10px',
                  marginBottom: '40px',
                  borderBottom: '2px solid #ccc'
                }}>

                <div className='box'></div>
                <div className='box'></div>
                <div className='box answer-text'><p>rarely</p></div>
                <div className='box answer-text'><p>sometimes</p></div>
                <div className='box answer-text'><p>usually</p></div>
                <div className='box question-text'>
                  <p>
                    I am happy with the amount of hours I work each week
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-kk'>
                    <input
                    id='input-kk'
                    type="radio"
                    className="radio-button"
                    name="radioGroup16"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-ll'>
                    <input
                    id='input-ll'
                    type="radio"
                    className="radio-button"
                    name="radioGroup16"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-mm'>
                    <input
                    id='input-mm'
                    type="radio"
                    className="radio-button"
                    name="radioGroup16"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    My friends and family would say I have a full life outside of work
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-nn'>
                    <input
                    id='input-nn'
                    type="radio"
                    className="radio-button"
                    name="radioGroup17"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-oo'>
                    <input
                    id='input-oo'
                    type="radio"
                    className="radio-button"
                    name="radioGroup17"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-pp'>
                    <input
                    id='input-pp'
                    type="radio"
                    className="radio-button"
                    name="radioGroup17"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box question-text'>
                  <p>
                    My coworkers know and respect my life outside of work
                  </p>
                </div>
                <div className='box'></div>
                <div className='box radio-answer'>
                  <label htmlFor='input-qq'>
                    <input
                    id='input-qq'
                    type="radio"
                    className="radio-button"
                    name="radioGroup18"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-rr'>
                    <input
                    id='input-rr'
                    type="radio"
                    className="radio-button"
                    name="radioGroup18"/>
                    <div className="check"></div>
                  </label>
                </div>
                <div className='box radio-answer'>
                  <label htmlFor='input-ss'>
                    <input
                    id='input-ss'
                    type="radio"
                    className="radio-button"
                    name="radioGroup18"/>
                    <div className="check"></div>
                  </label>
                </div>
              </div>
            </div>

            <Link href={{ pathname: '/' }}>
              <div className='submit-button'>SUBMIT</div>
            </Link>

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
