import SnowflakeApp from '../components/SnowflakeApp'

export default ({ url: { query } }) => {
  console.log(query);
  return (
    <SnowflakeApp />
  )
}
