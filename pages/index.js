import SnowflakeApp from '../components/SnowflakeApp'
import fetch from 'isomorphic-unfetch'

const Index = props => (
  <div>
    {props.shows.map(show => (
        <li key={show.id}>
          <a>{show.name}</a>
        </li>
      ))}
    <SnowflakeApp />
  </div>
);

Index.getInitialProps = async function(plop) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log('plop', Object.keys(plop.query));
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;