import SnowflakeApp from '../components/SnowflakeApp'

export default ({ url: { query: { name, answerValues} } }) => {
  return (
    <SnowflakeApp
        name={name}
        answerValues={answerValues} />
  )
}
