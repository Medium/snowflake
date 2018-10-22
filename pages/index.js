import SnowflakeApp from '../components/SnowflakeApp'
import Head from 'next/head'

if (typeof window !== 'undefined') {
  window.handleClientLoad = () => {
    console.log('handleClientLoad')
    const checkInit = () => {
      if (window.sheetsControl) {
        gapi.load('client', window.sheetsControl.initClient.bind(window.sheetsControl))
      } else {
        setTimeout(checkInit, 500)
      }
    }
    checkInit()
  }
}

export default () => <div>
  <Head>
    <script
      async
      defer
      src="https://apis.google.com/js/api.js"
      onLoad="this.onLoad = function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()" />
  </Head>
  <SnowflakeApp />
</div>
