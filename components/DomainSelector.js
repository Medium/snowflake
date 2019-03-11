// @flow

import React from 'react'
import { domains } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  currentDomain: String,
  setDomainFn: (string) => void
}

class DomainSelector extends React.Component {
  render() {
    return <div>
      <label style={{display: 'block', 'marginBottom': '5px'}}>Specialization</label>
      <select value={this.props.currentDomain} onChange={e => this.props.setDomainFn(e.target.value)}>
      <style jsx>{`
        select {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}</style>
      {domains.map(domain => (
        <option key={domain}>
          {domain}
        </option>
      ))}
    </select>
    </div>
  }
}

export default DomainSelector
