import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;
export const ModalWindow = styled.div`
  background-color: #ffffff;

  @media (max-width: 767) {
    width: 100vh;
    height: 100vh;
  }

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 540px;
  max-height: 608px;
  border-radius: 20px;
`;
