import SnowflakeApp from '../components/Snowflake/SnowflakeApp'

export default ({ url: { query: { name, answerValues} } }) => {
  return (
    <SnowflakeApp
        name={name}
        answerValues={answerValues} />
  )
}
