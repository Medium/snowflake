// @flow
import * as React from 'react';
import glamorous, { Div, H1 } from 'glamorous'
import { teal, teal2 } from '../../palette'
import api from '../../api/api';

const FunButton = glamorous.button({
  backgroundColor: teal,
  padding: '10px 20px',
  borderRadius: '5px',
  fontWeight: 600,
  ':hover': {
    backgroundColor: teal2
  },
  transition: 'background-color 0.25s',
  margin: '0 auto',
  textAlign: 'center',
  width: '80px'
})

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