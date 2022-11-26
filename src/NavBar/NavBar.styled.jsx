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
  fill: ${p => p.theme.colors.unactiveButtonColor};
  transition: ${p => p.theme.transition.all};
  &:hover,
  &:focus {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    font-weight: 700px;
  }
  &:active {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    font-size: 30px;
  }
`;

export const Icon = styled.svg`
  fill: ${p => p.theme.colors.unactiveButtonColor};
  width: 18px;
  height: 18px;

  @media screen and (max-width: 767px) {
    width: 38px;
    height: 38px;
  }
`;

export const Text = styled.span`
  margin-left: 25px;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primaryTextColor};
  font-weight: 400px;
  &:hover,
  &:focus {
    font-weight: 700px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 23px;
  }
`;
