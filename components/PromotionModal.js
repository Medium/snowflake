import * as React from 'react';
import Modal from 'react-modal'
import glam from 'glamorous'
import CancelIcon from './icons/CancelIcon'

const ModalContainer = glam.div({
  marginTop: "100px",
  padding: '150px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center'
})

const PromotionModal = ({
  isModalOpen,
  userName,
  nextRole,
  onClose
}) => (
  <Modal isOpen={isModalOpen}>
    <ModalContainer>
      <CancelIcon onClick={onClose} />
      <h1>Congratulations! {userName} was promoted to {nextRole}!</h1>
    </ModalContainer>
  </Modal>
)

export default PromotionModal;