import type { QuestionsList } from '../constants'

type Props = {
  questionIndex: Number,
  lineIndex: Number,
  trackIndex: Number,
  trackId: String
}

function RadioInputLine({questionIndex, lineIndex, trackIndex, trackId}) {
  return (
    <div className='box radio-input'>
      <label
          htmlFor={`input-${trackIndex}${questionIndex}${lineIndex}`}
          onClick={() => handleTrackMilestoneChangeFn(trackId, 1)}>
        <input
            id={`input-${trackIndex}${questionIndex}${lineIndex}`}
            type="radio"
            className="radio-button"
            name={`radioGroup-${trackIndex}${questionIndex}`}/>
        <div className="check"></div>
      </label>
    </div>
  )
}

export default RadioInputLine
