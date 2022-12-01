import styled from 'styled-components';
import bg from '../../images/dashboard/bg.png';
import line from '../../images/dashboard/line.svg'
import tablet from '../../images/dashboard/tablet.png'
export const Wrapper = styled.div`
  background: rgb(241, 242, 247);
  display: flex;
  justify-content: center;
  margin: 0;
  height: 100vh;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    background: url(${tablet}) no-repeat center center fixed;
    background-size: cover;
  }
  @media screen and (min-width: 1024px) {
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
    
   };
   @media screen and (min-width: 2560px) {
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
     
    };
   `;
export const Main = styled.div`
  display: block;
  z-index: 9999;
  width: 100%;
  height: 130%;
  @media screen and (min-width: 768px) {
    display: block;
  };
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    
    
   };
   @media screen and (min-width: 2560px) {
    display: flex;   
    justify-content: center;  
    
    };
 
`;
export const NavContainer = styled.div`
  padding-top: 15px;
  display: block;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 32px;
    align-items: flex-start;
    justify-content: space-between; 
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    margin-right: 69px;
    padding-bottom: 47px;
    margin-bottom: 0px;
   
  }
  @media screen and (min-width: 2560px) {
    display: block;
    margin-right: 69px;
    padding-bottom: 47px;
    margin-bottom: 0px;
    
   }
`;
export const ChatContainer = styled.div`
@media screen and (min-width: 768px) {
  margin-top: 20px;
  display: flex;
  align-item: center;
  justify-content: center; 

}
  @media screen and (min-width: 1024px) {
    padding-top: 40px;
    padding-bottom: 47px;
    margin-left: 69px;
   
  }
  @media screen and (min-width: 2560px) {
    padding-top: 40px;
    padding-bottom: 47px;
    margin-left: 69px;
  }
`;
export const Line = styled.div`
  display: none;
  background: url(${line}) ;
  width: 8px;
  background-repeat: repeat-y;
  @media screen and (min-width: 1024px) {
    display: block;
    
   }
   @media screen and (min-width: 2560px) {
    display: block;
     
    }
    
`;
export const NavbarBalance = styled.div`
@media screen and (min-width: 768px) {
  padding-top: 8px;
};
`