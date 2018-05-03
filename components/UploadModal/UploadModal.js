// @flow
import * as React from 'react';
import glamorous from 'glamorous';
import Modal from 'react-modal';
import CancelIcon from '../icons/CancelIcon'
import SuccessIcon from '../icons/SuccessIcon'
import ProgressBar from '../ProgressBar'
import { teal, teal2 } from '../../palette'
import UploadMatrixStep from './UploadMatrixStep'
import UploadThresholdStep from './UploadThresholdStep'
import SubmitStep from './SubmitStep'

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
  currentStep: number
}

const totalSteps = 3;

class UploadModal extends React.Component<UploadModalProps, UploadModalState> {
  constructor(props: UploadModalProps) {
    super(props)

    this.state = {
      currentStep: 1
    }
  }

  incStep = () => {
    this.setState({ currentStep: Math.min(this.state.currentStep + 1, totalSteps) })
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
        return <SubmitStep />
    }
  }

  onUploadMatrix = (e) => {
    e.preventDefault();
    
    this.incStep();
  }

  onUploadThreshold = (e) => {
    e.preventDefault();
    
    this.incStep();
  }

  render() {
    return (
      <Modal isOpen={this.props.isModalOpen} style={{ content: { margin: '0 auto', maxHeight: '60vh', maxWidth: '40vw'}}}>
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