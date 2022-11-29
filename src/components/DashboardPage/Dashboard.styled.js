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
display: flex;
justify-content: center;
`
export const Main = styled.div`
display: flex;
`
export const NavContainer = styled.div`
border-right: 1px solid #E7E5F2;
padding-top: 40px;
padding-bottom: 47px;

`
export const ChatContainer = styled.div`
padding-top: 40px;
padding-bottom: 47px;

`
