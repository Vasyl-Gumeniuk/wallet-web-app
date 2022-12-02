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
   padding-bottom: 12px; 
   font-family: 'Circe';
   font-size: 18px;
   line-height: 24px;
   border:none;
   font-weight: 700;

   
  @media screen and (min-width: 1024px) {
    padding-left: 44px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 44px;
    
  }
  @media screen and (min-width: 768px) {
    padding-bottom:16px;
   }
   `;
   export const CellLast = styled.td`
   padding-left: 20px;
   padding-top: 12px;
   padding-right: 20px;
   padding-bottom: 12px; 
   font-family: 'Circe';
   font-size: 18px;
   line-height: 24px;
   font-weight: 700;
   text-align: center;

   @media screen and (min-width: 1024px) {
    padding-left: 26px;
    padding-right: 64px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 26px;
    padding-right: 64px;
    
  }
  @media screen and (min-width: 768px) {
   padding-bottom:16px;
  }
  `;
  export const CellLastBody = styled.td`
  padding-left: 20px;
  padding-top: 12px;
  padding-right: 20px;
  padding-bottom: 12px; 
  font-family: 'Circe';
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  @media screen and (min-width: 1024px) {
   padding-left: 44px;
   padding-right: 64px;
   padding-top: 22px;
 }

 @media screen and (min-width: 2560px) {
   padding-left: 44px;
   padding-right: 64px;
   padding-top: 22px;
   
 }
 @media screen and (min-width: 768px) {
  padding-bottom:16px;
 }
 `;
   export const Foot = styled.tfoot`
   dispay: none;  
  @media screen and (min-width: 1024px) {
  dispay: block;  
  height: 134px;
  }
 @media screen and (min-width: 2560px) {
  dispay: block;  
   height: 134px;
 }
  `;
  export const CellMiddle = styled.td`
  padding-top: 12px;
  padding-left: 33px;
  padding-right: 33px;
  padding-bottom: 12px; 
  font-family: 'Circe';
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    padding-left: 42px;
    padding-right: 42px;
    padding-bottom:16px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 40px;
    padding-right: 40px;
    
  }
    `;
   export const CellBody = styled.td`
   padding-top: 12px;
   padding-left: 20px;
   font-family: 'Circe';
   font-size: 16px;
   line-height: 24px;
   border:none;
   font-weight: 400;
   @media screen and (min-width: 1024px) {
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 22px;
  }

@media screen and (min-width: 2560px) {
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 22px;
    
  }
 `;
 export const CellMiddleBody = styled.td`
  padding-top: 12px;
  padding-left: 33px;
  padding-right: 33px;
  font-family: 'Circe';
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-left: 42px;
    padding-right: 42px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 29px;
    padding-right: 29px;
    padding-top: 22px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 29px;
    padding-right: 29px;
    padding-top: 22px;
    
  }
    `;
    export const CellMiddleBodyLast = styled.td`
    padding-left: 20px;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px; 
    font-family: 'Circe';
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align:center;
    @media screen and (min-width: 1024px) {
     padding-left: 29px;
     padding-right: 29px;
     padding-top: 22px;
   }
  
   @media screen and (min-width: 2560px) {
     padding-left: 29px;
     padding-right: 29px;
     padding-top: 22px;
     
   }
   @media screen and (min-width: 768px) {
    padding-bottom:16px;
    
   }
    `;
    export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content center;
    margin-top: 32px;
    @media screen and (min-width: 1024px) {
      margin-top: 32px;
     
    }
    @media screen and (min-width: 2560px) {
      margin-top: 32px;
      
     }
    `
  export const CellBodyFirst = styled.td`
   padding-top: 12px;
   padding-left: 20px;
   padding-bottom: 12px; 
   font-family: 'Circe';
   font-size: 16px;
   line-height: 24px;
   border:none;
   font-weight: 400;

   
  @media screen and (min-width: 1024px) {
    padding-left: 44px;
  }

  @media screen and (min-width: 2560px) {
    padding-left: 44px;
    
  }
  @media screen and (min-width: 768px) {
    padding-bottom:16px;
   }
   `;