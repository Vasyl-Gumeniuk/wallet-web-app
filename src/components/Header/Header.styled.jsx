import styled from 'styled-components';

export const Head = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  min-width: 320px;
  margin: 20px 16px 20px 16px;
  @media screen and (max-width: 1279.5px) {
    max-width: 1280px;
    margin: 20px 16px 20px 16px;
  }
  @media screen and (max-width: 767.5px) {
    max-width: 768px;
    margin: 20px 32px 20px 32px;
  }
  @media screen and (max-width: 319.5px) {
    margin: 15px 20px 15px 20px;
    min-width: 320px;
  }
`;

export const UserBlock = styled.div`
  display: flex;
  justify-content: center;
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
