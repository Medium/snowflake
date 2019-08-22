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

  handleKeyDown({ code, preventDefault }: KeyboardEvent) {
    const {
      increaseFocusedMilestoneFn,
      selectNextTrackFn,
      decreaseFocusedMilestoneFn,
      selectPrevTrackFn,
    } = this.props;
    switch (code) {
      case 'ArrowUp':
        increaseFocusedMilestoneFn();
        preventDefault();
        break;
      case 'ArrowRight':
        selectNextTrackFn();
        preventDefault();
        break;
      case 'ArrowDown':
        decreaseFocusedMilestoneFn();
        preventDefault();
        break;
      case 'ArrowLeft':
        selectPrevTrackFn();
        preventDefault();
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
