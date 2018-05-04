import * as React from 'react';
import FileUploadButton from '../FileUploadButton'
import { Div, H1 } from 'glamorous'

const UploadThresholdStep = ({ toNextStep }) => (
  <Div textAlign="center">
    <H1 marginBottom="200px">Please upload your threshold matrix.</H1>
    <FileUploadButton onChange={toNextStep} />
  </Div>
)

export default UploadThresholdStep;