import styled from 'styled-components';
import bg from '../../images/dashboard/bg.png';
import pink from '../../images/dashboard/pink.png';

export const Wrapper = styled.div`
  background: url(${bg}) no-repeat center center fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: 0;
  height: 100vh;
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9999;
`;
export const NavContainer = styled.div`
  border-right: 1px solid #e7e5f2;
  padding-top: 40px;
  padding-bottom: 47px;
  @media screen and (min-width: 1024px) {
   padding-right: 69px;
  }
  @media screen and (min-width: 2560px) {
    padding-right: 69px;
   }
`;
export const ChatContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 47px;
`;
