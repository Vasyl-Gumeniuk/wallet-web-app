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

  margin-bottom: ${({ type }) => {
    switch (type) {
      case 'header':
        return `0px`;

      case 'login':
        return ` 60px`;

      case 'registration':
        return `60px`;

      default:
        return;
    }
  }};
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
