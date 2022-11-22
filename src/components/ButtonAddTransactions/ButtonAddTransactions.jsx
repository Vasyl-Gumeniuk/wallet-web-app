import Button from '../../components/Button/Button';
import { ImPlus } from 'react-icons/im';
import { Div, Wrapper } from './ButtonAddTransactions.styled';
import { useState } from 'react';
import { ModalAddTransaction } from '../ModalAddTransaction/ModalAddTransaction';
import { Loader } from '../Loader/Loader';

export const ButtonAddTransactions = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onToggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <Wrapper>
      <Div>
        <Button type="button" onClick={() => setShowModal(true)}>
          <ImPlus
            sx={{
              width: 44,
              height: 44,
              borderRadius: 50,
              color: 'white',
            }}
          />
        </Button>
      </Div>
      {isLoading && <Loader />}
      {showModal && (
        <ModalAddTransaction
          onClose={onToggleModal}
          toggleModal={() => setShowModal(s => !s)}
        />
      )}
    </Wrapper>
  );
};

export default ButtonAddTransactions;
