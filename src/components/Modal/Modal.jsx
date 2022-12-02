import { createPortal } from 'react-dom';

import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, handleBackdropClick }) => {
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
