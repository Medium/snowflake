import type { QuestionsList, TrackId, Milestone } from '../../constants'
import QuestionLine from './QuestionLine'
import BreakLine from './BreakLine'
import RadioInputLine from './RadioInputLine'

type Props = {
  questions: QuestionsList,
  trackIndex: Number,
  trackId: String,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

function TrackQuestions({questions, trackIndex, trackId, handleTrackMilestoneChangeFn}) {
  return (
    <div
      key={trackIndex}
      className='quiz-questions'
      style={{
        display:'grid',
        gridTemplateColumns: '40% 20% 20% 20%',
        paddingBottom: '10px',
        marginBottom: '40px',
        borderBottom: '2px solid #ccc'
      }}>

      <div className='box'></div>
      <div className='box answer-option'><p>rarely</p></div>
      <div className='box answer-option'><p>sometimes</p></div>
      <div className='box answer-option'><p>usually</p></div>
      {questions.map((question, questionIndex) => {
        return (
          // THIS .map() CALL ON A FAKE ARRAY IS SUPER HACKY TOO... ANY THOUGHTS ON HOW TO MAKE THIS SITUATION BETTER?
          ['questionLine',
            'RadioInputLine',
            'RadioInputLine',
            'RadioInputLine'].map((section, lineIndex) => {
            if (lineIndex === 0) {
              return (
                <QuestionLine
                  key={lineIndex}
                  lineIndex={lineIndex}
                  question={question}/>
              )
            } else {
              return (
                <RadioInputLine
                  key={lineIndex}
                  trackId={trackId}
                  lineIndex={lineIndex}
                  trackIndex={trackIndex}
                  questionIndex={questionIndex}
                  handleTrackMilestoneChangeFn={handleTrackMilestoneChangeFn}/>
              )
            }
          })
        )
      })}

    </div>
  )
}

export default TrackQuestions
