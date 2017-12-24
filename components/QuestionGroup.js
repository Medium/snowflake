import type { QuestionsList } from '../constants'

type Props = {
  questions: QuestionsList,
}

function QuestionGroup({questions}) {
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
      <div className='box question-text'>
        <p>{questions[0]}</p>
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
        <p>{questions[1]}</p>
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
        <p>{questions[2]}</p>
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
  )
}

export default QuestionGroup
