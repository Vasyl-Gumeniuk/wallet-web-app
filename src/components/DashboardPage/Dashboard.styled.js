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
  overflow-y: scroll;
   
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9999;
  width: 100%;
  height: 100%;
 
`;
export const NavContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 47px;
  height: scrollHeight;
  @media screen and (min-width: 1024px) {
   padding-right: 69px;
   
  }
  @media screen and (min-width: 2560px) {
   margin-right: 69px;
    
   }
`;
export const ChatContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 47px;
  margin-left: 69px;
  
`;
export const Line = styled.div`
  display: none;
  background: url(${line}) ;
  width: 8px;
  background-repeat: repeat-y;
  background-size: 100% 100%;
  @media screen and (min-width: 1024px) {
    display: block;
    
   }
   @media screen and (min-width: 2560px) {
    display: block;
     
    }
    
`;