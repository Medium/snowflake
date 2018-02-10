import type { QuestionsList } from '../constants'
import QuestionLine from './QuestionLine'
import BreakLine from './BreakLine'
import RadioInputLine from './RadioInputLine'

type Props = {
  questions: QuestionsList,
  trackIndex: Number,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

function QuestionGroup({questions, trackIndex}) {
  const questionGroupSections = [
    (<div className='box question-text'>
      <p>{questions[0]}</p>
    </div>),
    (<div className='box'></div>),
    (<div className='box radio-input'>
      <label htmlFor='input-a'>
        <input
          id='input-a'
          type="radio"
          className="radio-button"
          name="radioGroup1"/>
        <div className="check"></div>
      </label>
    </div>),
    (<div className='box radio-input'>
      <label htmlFor='input-b'>
        <input
          id='input-b'
          type="radio"
          className="radio-button"
          name="radioGroup1"/>
        <div className="check"></div>
      </label>
    </div>),
    (<div className='box radio-input'>
      <label htmlFor='input-c'>
        <input
          id='input-c'
          type="radio"
          className="radio-button"
          name="radioGroup1"/>
        <div className="check"></div>
      </label>
    </div>)
  ]
  return (
    <div
      key={trackIndex}
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
      <div className='box answer-option'><p>rarely</p></div>
      <div className='box answer-option'><p>sometimes</p></div>
      <div className='box answer-option'><p>usually</p></div>
      {questions.map((question, questionIndex) => {
        console.log("NEW QUESTION SECTION:");
        console.log(question);
        return (
          questionGroupSections.map((section, lineIndex) => {
            if (lineIndex === 0) {
              return (
                <QuestionLine
                  key={lineIndex}
                  lineIndex={lineIndex}
                  question={question}/>
              )
            } else if (lineIndex === 1) {
              return (
                <BreakLine
                  key={lineIndex}/>
              )
            } else {
              return (
                <RadioInputLine
                  key={lineIndex}
                  lineIndex={lineIndex}
                  trackIndex={trackIndex}
                  questionIndex={questionIndex}/>
              )
            }
          })
        )
      })}


    </div>
  )
}

export default QuestionGroup
