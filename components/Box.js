import type { QuestionsList, TrackId, Milestone } from '../constants'

type Props = {
  question: String,
  questionIndex: Number,
  lineIndex: Number,
  trackIndex: Number,
  trackId: String,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

function Box(props) {

  if(props.quesion) {
    return (
      <div className='box question-text radio-input'>
        <p>this works</p>
      </div>
    )
  } else {
    return (
      <div className='box radio-input'>
        <label
            htmlFor={`input-${trackIndex}${questionIndex}${lineIndex}`}
            onClick={() => handleTrackMilestoneChangeFn(trackId, questionIndex, lineIndex-1)}>
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

}

export default Box
