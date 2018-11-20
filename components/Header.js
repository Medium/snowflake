// @flow

import React from 'react'
import Help from "./Help";

type Props = {
  name: String,
  setNameFn: (string) => void
}

class Header extends React.PureComponent<Props> {
  render() {
    return (
      <div style={{display: 'flex', 'justify-content': 'space-between', 'padding-right': '10%'}}>
        <div style={{width: 120}}>
          <div className="aui">
            <img width="110px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wikimedia_Deutschland-Logo.svg/512px-Wikimedia_Deutschland-Logo.svg.png"/>
          </div>
        </div>

        <form>

          <label style={{
            display: 'flex',
            height: '100%',
            'flex-direction': 'column',
            justifyContent: 'center',
          }}>
              <span>
                  Enter Engineer's Name Here
              </span>
            <input
              type="text"
              className="name-input center"
              value={this.props.name}
              onChange={e => this.props.setNameFn(e.target.value)}
              placeholder="Jane Doe"
            />
          </label>
        </form>

        <Help />
      </div>
    );
  }
}

export default Header;