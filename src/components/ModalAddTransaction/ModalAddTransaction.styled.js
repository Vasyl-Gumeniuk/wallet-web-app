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
  &:hover,
  &:focus {
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

export const ButtonCancel = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  color: rgba(74, 86, 226, 1);
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid rgba(74, 86, 226, 1);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  background-color: white;
  transition: all 200ms ease-in-out;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 60px;

  &:hover {
    transform: scale(1.03);
  }
`;
