import { useState } from 'react';
import sprite from '../../images/icons/sprite-all-icons.svg';
import Logo from '../Logo/Logo';
import Modal from '../Modal/Modal';
import ModalLogout from '../ModalLogout';
import {
  Head,
  Wrapper,
  UserBlock,
  Name,
  IconExit,
  Exit,
  ExitButton,
} from './Header.styled';

export default function Header({ currentUser }) {
  const name = currentUser?.data.name;
  const [showModal, setShowModal] = useState(false);

  const onExitButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Head>
     <Wrapper>
        <Logo type="header"></Logo>
        <UserBlock>
          <>
            <Name>{name}</Name>
            <ExitButton onClick={onExitButtonClick}>
              <IconExit width="18" height="18" aria-label="wallet">
                <use href={`${sprite}#icon-exit`}></use>
              </IconExit>
              <Exit>Exit</Exit>
            </ExitButton>
          </>
        </UserBlock>
      </Wrapper>
       {showModal && (
        <Modal>
          <ModalLogout closeModal={closeModal}></ModalLogout>
        </Modal>
      )}
     </Head>
    );
}
