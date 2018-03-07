import QuestionsGrid from './QuestionsGrid'
import type { Tracks, Milestone, MilestoneMap, TrackId } from '../constants'
import Link from 'next/link'

type Props = {
  tracks: Array,
  trackIds: Array,
  name: String,
  nameInputted: Boolean,
  handleQuizSubmitFn: () => Object,
  handleNameChangeFn: () => void,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

function CompanionQuiz({trackIds, tracks, handleQuizSubmitFn, name, nameInputted, handleNameChangeFn, handleMileStoneChangeFn}) {
  let _name = null;

  function onNameChange() {
    handleNameChangeFn(_name.value)
  }

  return (
    <div>

      <div style={{
        width: '45%'
        }}>
        <input
          type="text"
          className="name-input h1"
          style={{borderBottom: `2px solid ${ nameInputted ? '#ccc' : '#000' }`}}
          placeholder='Your Name'
          autoFocus='autofocus'
          value={name}
          ref={(input) => {_name = input;}}
          onChange={onNameChange}
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
      <QuestionsGrid
        trackIds={trackIds}
        tracks={tracks}
        handleMileStoneChangeFn={handleMileStoneChangeFn}/>
      </div>

      <Link href={handleQuizSubmitFn()}>
        <div className='submit-button'>SUBMIT</div>
      </Link>
    </div>
  )
}

export default CompanionQuiz
