import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonElement = styled.li`
  :first-child {
    margin-bottom: 20px;
  }
`;

export const RedirectButtonLink = styled(Link)`
  color: ${p => p.theme.colors.unactiveButtonColor};
`;
