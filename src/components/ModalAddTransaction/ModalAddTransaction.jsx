import { AiOutlineClose } from 'react-icons/ai';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import {
  Div,
  ButtonClose,
  Container,
  Title,
} from './ModalAddTransaction.styled';
import { useEffect, useState } from 'react';
// import { Header} from '../Header/Header';

export const ModalAddTransaction = ({ onClose, showModal }) => {
  <Modal>
    {/* <Header /> */}
    <Div>
      <ButtonClose onClick={() => showModal(false)}>
        <AiOutlineClose
          sx={{
            width: 16,
            height: 16,
            color: '#000000',
          }}
        />
      </ButtonClose>
    </Div>
    <Container>
      <Title>Add transaction</Title>
      <Button type="submit">ADD</Button>
      <Button type="reset">CANSEL</Button>
    </Container>
  </Modal>;
};

export default ModalAddTransaction;
