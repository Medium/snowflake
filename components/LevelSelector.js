// @flow

import React from 'react'
import {executionGate, pointsToLevels} from '../constants'

type Props = {
    level: number,
    setLevelFn: (string) => void
}

class LevelSelector extends React.Component {
    render() {
        return <select value={this.props.level} onChange={e => this.trackChange(e)}>
            <style jsx>{`
        select {
          color: #fff;
          font-size: 16px;
          line-height: 20px;
          min-width: 100px;
          padding: .5em .25em;
          background: transparent;
          height: 3em;
          border: 0;
        }
      `}</style>
            {Object.entries(pointsToLevels).map(levels => (
                <option key={levels[1]}>
                    {levels[1]}
                </option>
            ))}
        </select>
    }

    trackChange(e) {
        this.props.setLevelFn(e.target.value)
    }
}

export default LevelSelector
