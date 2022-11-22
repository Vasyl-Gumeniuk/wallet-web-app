import styled from 'styled-components';
import vector from '../../images/currency/vector.svg'
export const Wrapper = styled.table`
  background-color: #4A56E2;
   color:#FFFFFF;
   border-collapse: separate;
   border-spacing: 0;
   font-size: 16px; 
   border-radius: 30px;
   overflow: hidden;
   font-family: 'Circe';
   @media screen and (min-width: 1024px) {
    background-image: url(${vector});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: contain;
  }
  @media screen and (min-width: 2560px) {
    background-image: url(${vector});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: contain;
   }
    `;

  export const Header = styled.thead`
  font-size: 18px; 
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 700;
  font-family: 'Circe';
  line-height: 27px;
  
  `;
  export const Line = styled.tr`
    border: none
  `;
  export const Body = styled.tbody`
  font-size: 16px;
  background-color: #4A56E2;
  font-weight: 400;
  line-height: 24px;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: contain;
  @media screen and (min-width: 1024px) {
    background-image: none;
  }
  @media screen and (min-width: 2560px) {
    background-image: none;     
   }
  `;
   export const Cell = styled.td`
   padding-top: 12px;
   padding-left: 20px;
   padding-bottom: 11px; 
   font-family: 'Circe';
   font-size: 16px;
   line-height: 24px;
   border:none;

   
  @media screen and (min-width: 1024px) {
    padding-left: 58px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 58px;
    
  }
   `;
   export const CellLast = styled.td`
   padding-left: 20px;
   padding-top: 12px;
   padding-right: 20px;
   padding-bottom: 11px; 
   font-family: 'Circe';
   font-size: 16px;
   line-height: 24px;

   @media screen and (min-width: 1024px) {
    padding-left: 58px;
    padding-right: 58px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 58px;
    padding-right: 58px;
    
  }

   `;
   export const LineNotFirst = styled.td`
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom: 12px; 
   font-family: 'Circe';
   font-size: 16px;
   line-height: 24px;
   @media screen and (min-width: 1024px) {
    padding-left: 58px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 58px;
    
  }
  `;
  export const Foot = styled.tfoot`
   dispay: none;  
   background-image: url(${vector});
   background-repeat: no-repeat;
   background-position: left bottom;
   background-size: contain;
 @media screen and (min-width: 1024px) {
  dispay: block;  
  height: 134px;
  }
 @media screen and (min-width: 2560px) {
  dispay: block;  
   height: 134px;
 }
  `;