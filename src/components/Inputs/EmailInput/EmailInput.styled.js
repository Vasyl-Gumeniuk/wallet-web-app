import styled from 'styled-components';

export const EmailIcon = styled.svg`
  --color5: ${p => (p.error === 'true' ? p.theme.colors.error : '#E0E0E0')};
  position: absolute;
  top: 10px;
  left: 12px;
  width: 20px;
  height: 16px;
`;
