import styled from 'styled-components';

export const ContainerBlock = styled.div`
  width: 100%;
  margin: ${p => p.theme.space[0]}px ${p => p.theme.space[9]};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  /* background-color: ${p => p.theme.colors.mainBg}; */

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 2560px) {
    width: 1170px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
  }
`;

export const LoginContainer = styled(ContainerBlock)`
  margin: 0;
  z-index: 5;
  padding-top: 107px;
  padding-bottom: 107px;
  background-color: ${p => p.theme.colors.secondaryTextColor};
  @media screen and (min-width: 768px) {
    max-width: 533px;
    max-height: 468px;
    padding-top: 40px;
    padding-bottom: 62px;
    position: ${p => p.theme.position.absolute};
    top: 360px;
    left: 50%;
    transform: translate(-50%);
    border-radius: ${p => p.theme.radii.exlg};
  }
  @media screen and (min-width: 1280px) {
    top: 136px;
    right: 91px;
    transform: translate(0);
  } ;
`;

export const RegisterContainer = styled(LoginContainer)`
  @media screen and (min-width: 768px) {
    max-height: 616px;
  }

  @media screen and (min-width: 1280px) {
    top: 52px;
  } ;
`;
