// @flow

import React from 'react';

type Props = {
  increaseFocusedMilestoneFn: () => void,
  selectNextTrackFn: () => void,
  decreaseFocusedMilestoneFn: () => void,
  selectPrevTrackFn: () => void
}

class KeyboardListener extends React.Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e)); // TK unlisten
  }

  handleKeyDown(event: KeyboardEvent) {
    const {
      increaseFocusedMilestoneFn,
      selectNextTrackFn,
      decreaseFocusedMilestoneFn,
      selectPrevTrackFn,
    } = this.props;
    switch (event.code) {
      case 'ArrowUp':
        increaseFocusedMilestoneFn();
        event.preventDefault();
        break;
      case 'ArrowRight':
        selectNextTrackFn();
        event.preventDefault();
        break;
      case 'ArrowDown':
        decreaseFocusedMilestoneFn();
        event.preventDefault();
        break;
      case 'ArrowLeft':
        selectPrevTrackFn();
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  render() {
    return null;
  }
}

export default KeyboardListener;
