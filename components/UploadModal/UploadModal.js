// @flow
import * as React from 'react';
import glamorous, { Form } from 'glamorous';
import Modal from 'react-modal';
import CancelIcon from '../icons/CancelIcon'
import SuccessIcon from '../icons/SuccessIcon'
import ProgressBar from '../ProgressBar'
import { teal, teal2 } from '../../palette'
import UploadMatrixStep from './UploadMatrixStep'
import UploadThresholdStep from './UploadThresholdStep'
import SubmitStep from './SubmitStep'
import api from '../../api/api';
import { select } from 'd3-selection';

const UploadModalContainer = glamorous.div({
  padding: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  outline: 'none'
})

const ProgressBarContainer = glamorous.div({
  padding: '100px 20% 50px 20%',
  width: '100%',
  boxSizing: 'border-box'
})

type UploadModalProps = {
  toggleModal: () => void,
  isModalOpen: boolean
}
type UploadModalState = {
  currentStep: number,
  files: { matrixFile?: File, thresholdFile?: File }
}


const totalSteps = 3;

class UploadModal extends React.Component<UploadModalProps, UploadModalState> {
  constructor(props: UploadModalProps) {
    super(props)

    this.state = {
      currentStep: 1,
      files: {}
    }
  }

  incStep = () => {
    this.setState({ currentStep: Math.min(this.state.currentStep + 1, totalSteps) })
  }

  saveFile = (file: File, name: string) => {
    this.setState(
      { files: {
        ...this.state.files,
        [name]: file 
      } }
    );
}

  submitFiles = () => {
    api.submitFiles(this.state.files);
  }

  changeStep = (step: number) => {
    this.setState({
      currentStep: step
    })
  }

  getStep = () => {
    switch (this.state.currentStep) {
      case 1:
        return <UploadMatrixStep toNextStep={this.onUploadMatrix} />
      case 2:
        return  <UploadThresholdStep toNextStep={this.onUploadThreshold} />
      case 3:
        return <SubmitStep submitFiles={this.submitFiles} />
    }
  }

  onUploadMatrix = (e: any) => {
    e.preventDefault();

    const matrixFile = e.target.files[0];
    this.saveFile(matrixFile, "performanceMatrix");
    this.incStep();
  }

  onUploadThreshold = (e: any) => {
    e.preventDefault();

    const thresholdFile = e.target.files[0];
    this.saveFile(thresholdFile, "roleDefinition");
    this.incStep();
  }

  render() {
    return (
      <Modal isOpen={this.props.isModalOpen} style={{ content: { margin: '0 auto', maxHeight: '80vh', maxWidth: '40vw'}}}>
        <ProgressBarContainer>
          <ProgressBar
            numBuckets={totalSteps}
            currentStep={this.state.currentStep}
            changeStep={this.changeStep} />
        </ProgressBarContainer>
        <UploadModalContainer>
          <CancelIcon onClick={this.props.toggleModal} />
        </UploadModalContainer>
        {this.getStep()}
      </Modal>
    );
  }
}

export default UploadModal