import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonClose = styled.button`
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  border: none;
  background-color: white;
  :hover,
  :fokus {
    stroke: '#FF6596';
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleModal = styled.h1`
  margin: 0;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  font-family: Poppins;
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;
