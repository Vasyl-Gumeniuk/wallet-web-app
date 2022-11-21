import styled from 'styled-components';

export const ErrorText = styled.p`
  position: ${p => p.theme.position.absolute};
  top: 40px;
  left: 15px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.label};

  color: ${p => p.theme.colors.error};
`;
