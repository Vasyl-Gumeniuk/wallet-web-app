import React from 'react';
import sprite from '../../images/icons/sprite-all-icons.svg';
import { Modal } from '../Modal/Modal';
import {
  Div,
  ButtonClose,
  Container,
  TitleModal,
  ButtonCancel,
} from './ModalAddTransaction.styled';
import { useEffect } from 'react';

import Form from './Form/Form';

const ModalAddTransaction = ({ onClose }) => {
  useEffect(() => {
    const closeModal = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Modal onClick={handleBackdropClick}>
      <Div>
        <ButtonClose onClick={onClose}>
          <svg width="16" height="16" fill="#000000" aria-label="buttonclose">
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </ButtonClose>
      </Div>
      <Container>
        <TitleModal>Add transaction</TitleModal>
        <Form />
        <ButtonCancel type="button" onClick={onClose}>
          CANCEL
        </ButtonCancel>
      </Container>
    </Modal>
  );
};

export default ModalAddTransaction;
