import type { QuestionsList, TrackId, Milestone } from '../constants'
import QuestionLine from './QuestionLine'
import RadioInputLine from './RadioInputLine'

type Props = {
  questions: QuestionsList,
  trackIndex: Number,
  trackId: String,
  handleMileStoneChangeFn: (TrackId, Milestone) => void
}

function TrackQuestions({questions, trackIndex, trackId, handleMileStoneChangeFn}) {

  const answerOptions = ['rarely', 'sometimes', 'usually'];

  return (
    <div
      key={trackIndex}
      style={{
        display:'grid',
        gridTemplateColumns: '40% 20% 20% 20%',
        paddingBottom: '10px',
        marginBottom: '40px',
        borderBottom: '2px solid #ccc'
      }}>

      <style jsx>{`
        .answer-option {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1em;
        }
      `}</style>

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
                  handleMileStoneChangeFn={handleMileStoneChangeFn}/>
              )
            }
          })
        )
      })}

    </div>
  )
}

export default TrackQuestions
