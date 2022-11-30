import styled from 'styled-components';
import bg from '../../images/dashboard/bg.png';
import line from '../../images/dashboard/line.svg'
export const Wrapper = styled.div`
  background: url(${bg}) no-repeat center center fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: 0;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9999;
  padding-top: 40px;
  padding-bottom: 47px;
`;
export const NavContainer = styled.div`
  @media screen and (min-width: 1024px) {
   padding-right: 69px;
   
  }
  @media screen and (min-width: 2560px) {
   margin-right: 69px;
    
   }
`;
export const ChatContainer = styled.div`
  margin-left: 69px;
  
`;
export const Line = styled.div`
  background: url(${line}) ;
  width: 8px;
  height: 100%;
  position: fixed;
  left: 40.5%;
  background-repeat: repeat-y;
  
`;