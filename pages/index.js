import Link from 'next/link'
import Wordmark from '../components/Wordmark'

function Home() {
  return (
    <main>
      <link href="https://fonts.googleapis.com/css?family=Muli:200i,400,400i,600,700,800,900|Roboto" rel="stylesheet" />
      <style jsx global>{`
        body {
          font-family: Muli, Roboto, Helvetica;
        }
        main {
          width: 960px;
          margin: 0 auto;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
      <div style={{margin: '19px auto 0', width: 142}}>
        <a href="https://soapboxhq.com/" target="_blank">
          <Wordmark />
        </a>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <Link href='/product'>
            <a>Product</a>
          </Link>
        </div>
        <div style={{flex: 1}}>
          <Link href='/engineering'>
            <a>Engineering</a>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
