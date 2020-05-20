// @flow

import React from 'react'
import { cohorts } from '../constants'

type Props = {
  currentCohort: String,
  setCohortFn: (string) => void
}

class CohortSelector extends React.Component {
  render() {
    return <select value={this.props.currentCohort} onChange={e => this.trackChange(e)}>
      <style jsx>{`
        select {
          color: #fff;
          font-size: 16px;
          line-height: 20px;
          min-width: 250px;
          padding: .5em .25em;
          background: transparent;
          height: 3em;
          border: 0;
        }
      `}</style>
      {cohorts.map(cohort => (
        <option key={cohort.key}>
          {cohort.label}
        </option>
      ))}
    </select>
  }

  trackChange(e) {
    this.props.setCohortFn(e.target.value)
  }
}

export default CohortSelector
