import styled from 'styled-components';

export const AuthSection = styled.section`
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-color: ${p => p.theme.colors.primaryPageBgr};
  }
`;

export const FramePNG = styled.div`
  position: ${p => p.theme.position.absolute};
  top: 60px;
  left: 114px;
  @media screen and (min-width: 1280px) {
    top: 150px;
    left: 76px;
  }
`;
