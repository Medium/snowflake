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
      <style jsx>{`
        .radio-input {
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
      `}</style>
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
