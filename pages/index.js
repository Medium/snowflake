import SnowflakeApp from '../components/SnowflakeApp'
import fetch from 'isomorphic-unfetch'
import Wordmark from '../components/Wordmark'

const Index = props => (
  <div>
    <div style={{margin: '19px auto 0', width: 142}}>
      <Wordmark />
    </div>
    <h1>{props[1]} {props[0]}</h1>
    <SnowflakeApp data={props} pageType={'profile'} />
  </div>
);

Index.getInitialProps = async function(plop) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log('plop', res, Object.keys(plop.query));

  console.log(`Show data fetched. Count: ${data.length}`);

  return ['Green', 'Rachel', 0, 0, 5, 2, 1, 2, 3, 4, 0, 4, 3, 0, 2, 3, 1, 0, 1, 1, 0, 0]
};

export default Index;