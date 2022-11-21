import { createPortal } from 'react-dom';

import { Backdrop, ModalWindov } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  return createPortal(
    <Backdrop>
      <ModalWindov>{children}</ModalWindov>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
