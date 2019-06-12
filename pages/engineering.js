import SnowflakeApp from '../components/SnowflakeApp'
import dynamic from "next/dynamic";

const constants = dynamic(import("../constants_engineering"))

function Home() {
  return (
    <div>
      <SnowflakeApp />
    </div>
  );
}

export default Home;
