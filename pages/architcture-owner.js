import Wordmark from '../components/Wordmark'
import SnowflakeApp from '../components/SnowflakeApp'
import "../styles/index.css"

const data = { 
  LASTNAME: '',
  FIRSTNAME: 'Architecture Owner',
  MOBILE: 4,
  FRONTEND: 4,
  SYSTEME: 4,
  BACKEND: 4,
  PROJECT_MANAGEMENT: 2,
  COMMUNICATION: 4,
  CRAFT: 4,
  INITIATIVE: 3,
  CAREER_DEVELOPMENT: 0,
  ORG_DESIGN: 0,
  WELLBEING: 0,
  ACCOMPLISHMENT: 0,
  MENTORSHIP: 2,
  EVANGELISME: 0,
  RECRUTEMENT: 0,
  CULTURE: 1
}

const Index = props => (
  <main>
      <div style={{margin: '19px auto 0', width: 142}}>
        <Wordmark />
      </div>
      <h1>{data.FIRSTNAME} {data.LASTNAME}</h1>
      <h2>Missions</h2>
      <p className="description">Plop</p>
    <hr />
    <div>
      <h2>Minimum Requis</h2>
      <SnowflakeApp data={data} />
    </div>
  </main>
);

export default Index;
