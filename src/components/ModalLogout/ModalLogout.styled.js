import styled from 'styled-components';
import { AuthButton } from '../Button/Button.styled';

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 20px;
  color: black;
`;

export const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LogoutButton = styled(AuthButton)`
  background-color: #ff6596;
  color: ${p => p.theme.colors.activeButtonColor};
`;

export const CancelButton = styled(AuthButton)`
  border: ${p => p.theme.borders.unactiveButtonBorder};
  background-color: transparent;
  color: ${p => p.theme.colors.unactiveButtonColor};
`;
