import type { QuestionsList } from '../constants'

type Props = {
  questions: QuestionsList,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

function QuestionGroup({questions}) {
  const questionGroupSections = [
    (<div className='box question-text'>
      <p>{questions[0]}</p>
    </div>),
    (<div className='box'></div>),
    (<div className='box radio-answer'>
      <label htmlFor='input-a'>
        <input
          id='input-a'
          type="radio"
          className="radio-button"
          name="radioGroup1"/>
        <div className="check"></div>
      </label>
    </div>),
    (<div className='box radio-answer'>
      <label htmlFor='input-b'>
        <input
          id='input-b'
          type="radio"
          className="radio-button"
          name="radioGroup1"/>
        <div className="check"></div>
      </label>
    </div>),
    (<div className='box radio-answer'>
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
      {questions.map((question, questionIndex) => {
        return (
          questionGroupSections.map((section, sectionIndex) => {
            console.log(question);
            return (
              section
            )
          })
        )
        console.log(question);
      })}


    </div>
  )
}

export default QuestionGroup
