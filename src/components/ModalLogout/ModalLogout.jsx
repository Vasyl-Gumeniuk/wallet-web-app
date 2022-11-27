import { Formik } from 'formik';
import { Form } from 'formik';
import { Box } from '../../Box';
import { ContainerBlock } from '../Container/Container.styled';
import { ButtonElement } from '../../pages/LoginPage/LoginForm/LoginForm.styled';
import {
  Title,
  CenteredDiv,
  LogoutButton,
  CancelButton,
} from './ModalLogout.styled';

export const ModalLogout = () => {
  return (
    <CenteredDiv>
      <Box pt={32} pb={32}>
        <ContainerBlock>
          <Title>Are You sure?</Title>
          <Formik>
            {() => {
              return (
                <Form>
                  <ul>
                    <ButtonElement>
                      <LogoutButton type="submit">Log out</LogoutButton>
                    </ButtonElement>
                    <ButtonElement>
                      <CancelButton>Cancel</CancelButton>
                    </ButtonElement>
                  </ul>
                </Form>
              );
            }}
          </Formik>
        </ContainerBlock>
      </Box>
    </CenteredDiv>
  );
};

export default ModalLogout;
