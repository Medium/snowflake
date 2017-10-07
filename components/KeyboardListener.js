// @flow

import React from 'react'

type Props = {
  increaseFocusedMilestoneFn: () => void,
  selectNextTrackFn: () => void,
  decreaseFocusedMilestoneFn: () => void,
  selectPrevTrackFn: () => void
}

class KeyboardListener extends React.Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e)) // TK unlisten
  }

  handleKeyDown(e: KeyboardEvent) {
    switch(e.code) {
      case 'ArrowUp':
        this.props.increaseFocusedMilestoneFn()
        break
      case 'ArrowRight':
        this.props.selectNextTrackFn()
        break
      case 'ArrowDown':
        this.props.decreaseFocusedMilestoneFn()
        break
      case 'ArrowLeft':
        this.props.selectPrevTrackFn()
        break
    }
    e.preventDefault()
  }

  render() {
    return null
  }

}

export default KeyboardListener
