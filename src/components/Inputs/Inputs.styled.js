import { Field } from 'formik';
import styled from 'styled-components';

export const InputBlock = styled.div`
  position: ${p => p.theme.position.relative};
  margin-bottom: 40px;
`;

export const InputLabel = styled.label`
  background-color: transparent;
  position: ${p => p.theme.position.absolute};
  top: 8px;
  left: 56px;
  color: ${p => p.theme.colors.formColor};
  transition: ${p => p.theme.transition.all};
`;

export const InputContent = styled.div`
  position: ${p => p.theme.position.relative};
`;

export const FormInput = styled(Field)`
  width: 100%;
  background-color: transparent;
  outline: ${p => p.theme.borders.none};
  border: ${p => p.theme.borders.none};
  border-bottom: ${p =>
    p.error === 'true' ? p.theme.borders.inputError : p.theme.borders.input};
  padding: 8px ${p => p.theme.space[0]}px 8px 56px;
  color: ${p => p.theme.colors.primaryTextColor};

  :focus-within + ${InputLabel} {
    font-weight: 500;
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.label};
    padding: 2px 4px;
    color: ${p =>
      p.error === 'true' ? p.theme.colors.error : p.theme.colors.formColor};
    transform: translate(-45px, -23px);
  }

  :not(:placeholder-shown) + ${InputLabel} {
    transform: translate(-45px, -23px);
    font-weight: 500;
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.label};
    color: ${p =>
      p.error === 'true' ? p.theme.colors.error : p.theme.colors.formColor};
    padding: 2px 4px;
  }
`;
