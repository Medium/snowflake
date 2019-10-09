import Wordmark from '../components/Wordmark'
import SnowflakeApp from '../components/SnowflakeApp'
import "../styles/index.css"

const data = { 
  LASTNAME: '',
  FIRSTNAME: 'Engineering Project Owner',
  MOBILE: 3,
  FRONTEND: 3,
  SYSTEME: 3,
  BACKEND: 3,
  PROJECT_MANAGEMENT: 3,
  COMMUNICATION: 2,
  CRAFT: 0,
  INITIATIVE: 3,
  CAREER_DEVELOPMENT: 0,
  ORG_DESIGN: 0,
  WELLBEING: 0,
  ACCOMPLISHMENT: 0,
  MENTORSHIP: 0,
  EVANGELISME: 0,
  RECRUTEMENT: 0,
  CULTURE: 0
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
