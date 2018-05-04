// @flow
import * as React from 'react';
import glamorous, { Div, H1 } from 'glamorous'
import { teal, teal2 } from '../../palette'
import api from '../../api/api';
import FunButton from '../../glamorous/FunButton'

type SubmittedTypeProps = {
  submitFiles: () => void
};

const SubmitStep = ({ submitFiles }: SubmittedTypeProps) => (
  <Div textAlign="center">
    <H1 marginBottom="200px">You can submit!</H1>

    <FunButton onClick={submitFiles}>Submit</FunButton>
  </Div>
)

export default SubmitStep