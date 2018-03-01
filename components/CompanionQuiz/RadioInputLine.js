import type { QuestionsList, TrackId, Milestone } from '../../constants'

type Props = {
  questionIndex: Number,
  lineIndex: Number,
  trackIndex: Number,
  trackId: String,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

function RadioInputLine({questionIndex, lineIndex, trackIndex, trackId, handleTrackMilestoneChangeFn}) {
  // Here I'm using the lineIndex from the loop in the .map() call in trackQuestions to calculate the values of the radio input. Seems liek there's a better way to do that.
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

export default RadioInputLine
