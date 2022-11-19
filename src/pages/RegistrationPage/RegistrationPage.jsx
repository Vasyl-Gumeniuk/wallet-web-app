import RegistrationForm from './RegistrationForm';
import sprite from '../../images/icons/sprite-all-icons.svg';

const RegistrationPage = () => {
  return (
    <>
      <svg width={30} height={30}>
        <use href={sprite + '#icon-wallet'}></use>
      </svg>
      <h1>Wallet</h1>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
