// @flow

import React from 'react'

class HelpModal extends React.Component {
  render() {

    return (
      <div>
        <style jsx>{`
          .modalBackdrop {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left 0;
            background-color: rgba(0, 0, 0, 0.75);
          }
        `}
        </style>
        <div className="modalBackdrop" onClick={() => this.props.hideModalFn()}>
          <div style={{ margin: '5vh 5vw', background: 'white'}}>
            <h1>
              Getting Started
            </h1>
            <p>
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpModal;