import { NavLink } from 'react-router-dom';
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

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primaryTextColor};
  font-weight: 400;

  @media screen and (min-width: 1280px) {
    gap: 23px;
  }
  transition: ${p => p.theme.transition.all};
  &:hover,
  &:focus {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    font-weight: 700;
  }
  &:active {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    font-weight: 700;
  }
`;
export const LinkStyledCurrent = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primaryTextColor};
  font-weight: 400;
  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  font-weight: 700;
  `

export const Icon = styled.svg`
  fill: ${p => p.theme.colors.unactiveButtonColor};
  width: 18px;
  height: 18px;

  @media screen and (max-width: 767px) {
    width: 38px;
    height: 38px;
  }
`;
