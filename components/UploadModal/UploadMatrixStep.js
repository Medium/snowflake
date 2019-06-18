import * as React from 'react';
import FileUploadButton from '../FileUploadButton'
import { Div, H1 } from 'glamorous'
import DepartmentDropDown from './../DepartmentDropDown';

const UploadMatrixStep = ({
  toNextStep
}) => (
  <Div textAlign="center">
    <H1 marginBottom="200px">Please upload your performance matrix.</H1>
    <DepartmentDropDown />
    <FileUploadButton onChange={toNextStep} />
  </Div>
)

export default UploadMatrixStep;