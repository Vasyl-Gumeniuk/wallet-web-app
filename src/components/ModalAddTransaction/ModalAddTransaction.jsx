import React from 'react';
import sprite from '../../images/icons/sprite-all-icons.svg';
import { Modal } from '../Modal/Modal';
import Button from '../Button/Button';
import {
  Div,
  ButtonClose,
  Container,
  TitleModal,
} from './ModalAddTransaction.styled';
import { useEffect } from 'react';
import { transactionApi } from '../../redux/transactions/transactionApi';
import Header from '../Header/Header';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';

const StateFull = {
  type: 'expense',
  category: '',
  sum: '',
  date: new Date(),
  comment: '',
};

const ModalAddTransaction = ({ onClose }) => {
  const [transaction, setTransaction] = React.useState(StateFull);
  const dispatch = useDispatch();

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

  const handleInputChange = event => {
    const { name, value, checked, type } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    updateTransaction(name, inputValue);
    console.log(event.target);
    if (type === 'checkbox') {
      console.log('test type', inputValue ? 'expense' : 'income');
      updateTransaction('type', inputValue ? 'expense' : 'income');
    }
  };

  const updateTransaction = (name, value) => {
    setTransaction(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Modal onClick={handleBackdropClick}>
      <Header />
      <Div>
        <ButtonClose onClick={onClose}>
          <svg width="16" height="16" fill="#000000" aria-label="buttonclose">
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </ButtonClose>
      </Div>
      <Container>
        <TitleModal>Add transaction</TitleModal>

        <Form
          transaction={transaction}
          updateTransaction={updateTransaction}
          handleInputChange={handleInputChange}
        />

        <Button type="button" onClick={onClose}>
          CANSEL
        </Button>
      </Container>
    </Modal>
  );
};

export default ModalAddTransaction;
