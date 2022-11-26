import sprite from '../../images/icons/sprite-all-icons.svg';
import Logo from '../Logo/Logo';
import {
  Head,
  Wrapper,
  UserBlock,
  Name,
  IconExit,
  Exit,
} from './Header.styled';
export default function Header() {
  return (
    <Head>
      <Wrapper>
        <Logo type="header"></Logo>
        <UserBlock>
          <Name>Name</Name>
          <IconExit width="18" height="18" aria-label="wallet">
            <use href={`${sprite}#icon-exit`}></use>
          </IconExit>
          <Exit>Exit</Exit>
        </UserBlock>
      </Wrapper>
    </Head>
  );
}
