import styled from 'styled-components';

export const WalletLogo = styled.svg`
  width: 30px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const AuthLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
