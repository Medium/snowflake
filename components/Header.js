// @flow

import React from 'react'

type Props = {
  name: String,
  setNameFn: (string) => void
}

class Header extends React.Component<Props> {
  render() {
    return (
      <div style={{display: 'flex', 'justify-content': 'space-between', outline: '1px red solid'}}>
        <div style={{width: 120}}>
          <div className="aui">
            <img width="110px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wikimedia_Deutschland-Logo.svg/512px-Wikimedia_Deutschland-Logo.svg.png"/>
          </div>
        </div>

        <form>

          <label>
              <span style={{fontSize: '1.5rem'}}>
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
          {/* <TitleSelector
            milestoneByTrack={this.state.milestoneByTrack}
            currentTitle={this.state.title}
            setTitleFn={(title) => this.setTitle(title)} /> */
          }

        </form>

        <div title="FIXME Add about text here" style={{width:'110px', fill: 'grey'}}>
          <svg viewBox="0 0 24 24">
            <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Header;