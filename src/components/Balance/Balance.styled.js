import styled from 'styled-components';
export const BalanceLabel = styled.p`
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 12px;
text-transform: uppercase;
color: #A6A6A6;
margin-bottom: 12px;

`;
export const Wrapper = styled.div`
min-width: 287px; 
padding-left: 32px;
padding-right: 73px;
padding-top:8px;
padding-bottom:12px;
background: #FFFFFF;
border-radius: 30px;
display: inline-block;
margin-top:28px;
@media screen and (min-width: 768px) {
  padding-left: 40px;
  padding-right: 121px;
  min-width: 343px; 
}
@media screen and (min-width: 1024px) {
  padding-left: 40px;
  padding-right: 180px;
  min-width: 409px; 

  
}

@media screen and (min-width: 2560px) {
  padding-left: 40px;
  padding-right: 180px;
  min-width: 409px; 
  
}
`;
export const Sum = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 30px;
color: #000000;
`;