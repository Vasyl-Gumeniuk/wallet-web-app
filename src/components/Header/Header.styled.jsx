import styled from 'styled-components';

export const Head = styled.header`
display: block;
@media screen and (min-width: 768px) {
  display: block;
  
}

@media screen and (min-width: 1280px) {
display: flex;
align-items: center;
justify-content: center;
  
}

 @media screen and (min-width: 2560px) {
  display: flex;
  align-items: center;
  justify-content: center;
}  
 `;

export const Wrapper = styled.div`
padding-top:20px;
padding-bottom:20px;
display: flex;
justify-content: space-between;
width: 100%;
padding-left: ${p => p.theme.space[10]}px;
padding-right: ${p => p.theme.space[10]}px;
@media screen and (min-width: 767.5px) {
  width: 767,5px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
 
}
@media screen and (min-width: 1280px) {
  width: 1280px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
}
@media screen and (min-width: 2560px) {
  width: 1170px;
}
`;

export const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(189, 189, 189, 1);
  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
export const Name = styled.p`
  display: flex;
  align-items: center;
  padding-right: 12px;
  border-right: 1px solid rgba(189, 189, 189, 1);
  height: 30px;
  @media screen and (max-width: 319.5px) {
    border: none;
  }
`;
export const IconExit = styled.svg`
  margin-left: 12px;
  @media screen and (max-width: 319.5px) {
    margin-left: 0;
  }
`;
export const Exit = styled.p`
  margin-left: 8px;
  @media screen and(max-width: 319.5px) {
    display: none;
    margin-left: 8px;
  }
`;
export const ExitButton = styled.button`
  display: flex;
  background-color: inherit;
  border: none;
  color: inherit;
`;