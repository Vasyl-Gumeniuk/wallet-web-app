import styled from 'styled-components';

export const ContainerBlock = styled.div`
  width: 100%;
  margin: ${p => p.theme.space[0]}px ${p => p.theme.space[9]};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.mainBg};

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
