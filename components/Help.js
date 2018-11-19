// @flow

import React from 'react'
import HelpModal from "./HelpModal";

type Props = {}

class Help extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    if (window.localStorage.getItem('showHelpModal') !== 'false') {
        this.setState({showModal: true})
    }
  }

  hideModal() {
    this.setState({showModal: false})
    window.localStorage.setItem('showHelpModal', 'false')
  }

  showModal() {
    this.setState({showModal: true})
  }


  render() {
    return (
      <div style={{width: '50px', fill: 'grey'}}>
        <button
          onClick={() => this.showModal()}
          style={{
            display: 'block',
            width: '100%',
            border: 'none',
            padding: 0,
            background: 'none'
          }}
        >
        <svg viewBox="0 0 24 24">
          {/* Source: Material Design Icons */}
          <path
            d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"/>
        </svg>
        </button>
        {
          this.state.showModal ? (<HelpModal hideModalFn={this.hideModal.bind(this)}/>) : null
        }
      </div>
    );
  }
}

export default Help;