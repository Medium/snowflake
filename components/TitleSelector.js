import React from 'react'
import { eligibleTitles } from '../constants'
//import type { MilestoneMap } from '../constants'

class TitleSelector extends React.Component {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack)
    return <select value={this.props.currentTitle} onChange={e => this.props.setTitleFn(e.target.value)}>
      <style jsx>{`
        select {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}</style>
      {titles.map(title => (
        <option key={title}>
          {title}
        </option>
      ))}
    </select>
  }
}

export default TitleSelector
