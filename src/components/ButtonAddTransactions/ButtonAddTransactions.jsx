import { ImPlus } from 'react-icons/im';
import { Div, BasButton } from './ButtonAddTransactions.styled';
import sprite from '../../images/icons/sprite-all-icons.svg';
import { useState } from 'react';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import Loader from '../Loader/Loader';

const ButtonAddTransactions = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onToggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const onClickButton = () => {
    setShowModal(true);
  };
  return (
    <>
      <Div>
        <BasButton type="button" onClick={onClickButton}>
          <svg width="20" height="20" aria-label="plus">
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </BasButton>
      </Div>
      {isLoading && <Loader />}
      {showModal && (
        <ModalAddTransaction
          onClose={onToggleModal}
          toggleModal={() => setShowModal(s => !s)}
        />
      )}
    </>
  );
};

export default ButtonAddTransactions;
