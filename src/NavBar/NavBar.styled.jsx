import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    margin-right: 36px;
    &:last-child {
      margin-left: 0px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Icon = styled.svg`
  fill: ${p => p.theme.colors.unactiveButtonColor};
`;
