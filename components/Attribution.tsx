import React from "react"

class Attribution extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', paddingBottom: '20px'}}>
        <div style={{flex: 1}}>
          <p>Originally made with ❤️ by <a href="https://medium.engineering" target="_blank">Medium</a>.<br />
          Rebuilt with 💗 by <a href="https://foragerscs.com/technology/" target="_blank">Forager</a>.</p>
          <p>Get the <a href="https://github.com/forager-logistics/snowflake" target="_blank">source code</a>.</p>
        </div>
      </div>
    );
  }
}

export default Attribution