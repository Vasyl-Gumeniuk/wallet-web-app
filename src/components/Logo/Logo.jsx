import sprite from '../../images/icons/sprite-all-icons.svg';

const Logo = () => {
  return (
    <div>
      <svg width={30} height={30}>
        <use href={sprite + '#icon-wallet'}></use>
      </svg>
      <h1>Wallet</h1>
    </div>
  );
};

export default Logo;
