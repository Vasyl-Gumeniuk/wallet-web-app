import styled from 'styled-components';

export const AuthSection = styled.section`
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-color: ${p => p.theme.colors.primaryPageBgr};
  }
`;

export const BlurBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${p => p.theme.colors.secondaryPageBgr};
  height: 100%;
  width: 57%;
`;

export const FramePNG = styled.div`
  z-index: 1;
  position: ${p => p.theme.position.absolute};
  top: 60px;
  left: 114px;
  @media screen and (min-width: 1280px) {
    top: 150px;
    left: 76px;
  }
`;

export const PurpleCirclePNG = styled.div`
  position: ${p => p.theme.position.absolute};
  bottom: -100px;
  left: -120px;
  @media screen and (min-width: 1280px) {
    bottom: 0;
  }
`;
export const PeachCirclePNG = styled.div`
  position: ${p => p.theme.position.absolute};
  right: -282px;
  top: -24px;

  @media screen and (min-width: 1280px) {
    filter: blur(25px);
  }
`;

export const PositionText = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  position: ${p => p.theme.position.absolute};
  top: 167px;
  right: 167px;
`;
