import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;
export const ModalWindov = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  left: 50%;

  @media (min-width: 768px) {
    position: fixed;
    width: 540px;
    height: 508px;
    left: 114px;
    top: 258px;
    transform: translate(-50%, -50%);
    width: 540px;
    height: 508px;
    border-radius: 20px;
  }

  @media (min-width: 1260px) {
    left: 370px;
    top: 106px;
  }
`;
