import SnowflakeApp from '../components/SnowflakeApp'
import fetch from 'isomorphic-unfetch'
import Wordmark from '../components/Wordmark'
import "../styles/index.css"

const Index = props => (
  <div>
    <div style={{margin: '0 auto', width: 200}}>
      <Wordmark />
    </div>
    <h1>{props.FIRSTNAME} {props.LASTNAME}</h1>
    <SnowflakeApp data={props} pageType={'profile'} />
  </div>
);

Index.getInitialProps = async function(r) {
  const str = 'https://snowflake-api-service.herokuapp.com/' + Object.keys(r.query)[0]
  const res = await fetch(str);
  const data = await res.json();
  return data
};

export default Index;