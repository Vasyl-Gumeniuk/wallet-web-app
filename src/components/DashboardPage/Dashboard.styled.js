import styled from 'styled-components';
import bg from '../../images/dashboard/bg.png'
import pink from '../../images/dashboard/pink.png'

export const Wrapper = styled.div`
// background: rgba(231,234,242);
// backdrop-filter: blur(25px);
// position: relative;
// ::before {
//   content: "";
//   background-image: url(${pink});
//   background-repeat: no-repeat;
//   background-position: bottom;
//   background-size: contain;
//   width: 618px;
//   height: 547px;
//   position: absolute;
//   right: 0;
//   bottom: 0;
// 
background-image: url(${bg});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
height: 100%;
display: flex;
justify-content: center;
`
export const Main = styled.div`
display:flex;
padding-rigth: 16px;
padding-left: 16px;
align-item: center;
justify-content: center;  
@media screen and (min-width: 768px) {
    display:block
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: raw;
    
  }
  
  @media screen and (min-width: 2560px) {
    display: flex;
    flex-direction: raw;
    
  }
`
export const NavContainer = styled.div`
padding-top: 40px;
padding-bottom: 47px;
padding-right: 64px;
display:block;
@media screen and (min-width: 768px) {
    display:flex;
    justify-content: space-between; 
  }
  @media screen and (min-width: 1024px) {
    display: block;
    border-right: 1px solid #E7E5F2;
        
  }
  
  @media screen and (min-width: 2560px) {
    display: block;
    border-right: 1px solid #E7E5F2;   
  }
`
export const ChatContainer = styled.div`
padding-top: 40px;
padding-bottom: 47px;

`
export const NavBalance = styled.div`
display: block
`
