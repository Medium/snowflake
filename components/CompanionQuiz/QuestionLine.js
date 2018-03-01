type Props = {
  question: String,
}

function QuestionLine({question}) {
  return (
    <div className='box question-text'>
      <p>{question}</p>
    </div>
  )
}

export default QuestionLine
