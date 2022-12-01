import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Box } from '../../Box';
import { ContainerBlock } from '../Container/Container.styled';
import { ButtonElement } from '../../pages/LoginPage/LoginForm/LoginForm.styled';
import { logOutUser } from '../../redux/auth/authSlice';
import { useLogOutQuery } from '../../redux/auth/authApi';
import {
  Title,
  CenteredDiv,
  LogoutButton,
  CancelButton,
} from './ModalLogout.styled';

export const ModalLogout = ({ closeModal }) => {
  const [skip, setSkip] = useState(true);
  const { isSuccess } = useLogOutQuery('', { skip });
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    setSkip(false);
    try {
      if (isSuccess) {
        dispatch(logOutUser());
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
                      <LogoutButton onClick={handleLogOut}>
                        Log out
                      </LogoutButton>
                    </ButtonElement>
                    <ButtonElement>
                      <CancelButton onClick={closeModal}>Cancel</CancelButton>
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
