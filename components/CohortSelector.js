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
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 180px;
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
