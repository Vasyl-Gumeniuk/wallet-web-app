import styled from 'styled-components';

export const BasButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: #24cca7;
  color: white;
  border: none;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-right: 40px;
    padding-bottom: 40px;
  } ;
`;

export const Wrapper = styled.div``;
