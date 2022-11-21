import sprite from '../../images/icons/sprite-all-icons.svg';
import { AuthLogo, WalletLogo } from './Logo.styled';

const Logo = () => {
  return (
    <AuthLogo>
      <WalletLogo>
        <use href={sprite + '#icon-wallet'}></use>
      </WalletLogo>
      <h1>Wallet</h1>
    </AuthLogo>
  );
};

export default Logo;
