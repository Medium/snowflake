// @flow
import * as React from 'react';
import glamorous, { Div } from 'glamorous';
import { green1, gray2 } from '../palette'

const Circle = glamorous.div({
  display: 'inline-block',
  minWidth: '30px',
  minHeight: '30px',
  borderRadius: '1000px'
},
({ active }) => ({ backgroundColor: active ? green1 : gray2 })
)

const LineBetween = glamorous.hr({
  display: 'inline-block',
  width: '100%'
})

type ProgressBarProps = {
  numBuckets: number,
  currentStep: number,
  changeStep: (step: number) => void
}

const ProgressBar = ({ currentStep, numBuckets, changeStep }: ProgressBarProps) => (
  <Div display="flex" alignItems="center">
    {
      [...new Array(numBuckets - 1)].map((_, index) =>
        <React.Fragment key={index}>
          <Circle active={currentStep > index} onClick={() => changeStep(index + 1)} />
          <LineBetween />
        </React.Fragment>
      )
    }
    <Circle active={currentStep >= numBuckets} onClick={() => changeStep(numBuckets)} />
  </Div>
)

export default ProgressBar;