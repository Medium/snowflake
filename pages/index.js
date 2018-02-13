import SnowflakeApp from '../components/SnowflakeApp'

export default ({ url: { query: { name, quizResults} } }) => {
  return (
    <SnowflakeApp
        name={name}
        quizResults={quizResults} />
  )
}
