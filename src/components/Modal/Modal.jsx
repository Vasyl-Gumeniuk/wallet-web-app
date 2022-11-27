import { createPortal } from 'react-dom';

import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  return createPortal(
    <Backdrop>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
