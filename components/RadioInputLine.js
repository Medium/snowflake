import type { QuestionsList } from '../constants'

type Props = {
  questionIndex: Number,
  lineIndex: Number,
  trackIndex: Number
}

function RadioInputLine({questionIndex, lineIndex, trackIndex}) {
  const lineId = `input-${questionIndex}-${lineIndex}`
  const questionId = `radioGroup${trackIndex}`
  console.log(lineIndex);
  console.log(lineId);
  console.log(questionId);
  return (
    <div className='box radio-answer'>
      <label htmlFor={`input-${questionIndex}-${lineIndex}`}>
        <input
          id={`input-${questionIndex}-${lineIndex}`}
          type="radio"
          className="radio-button"
          name={`radioGroup${trackIndex}`}/>
        <div className="check"></div>
      </label>
    </div>
  )
}

export default RadioInputLine
