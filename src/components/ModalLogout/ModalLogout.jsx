import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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
  const { refetch } = useLogOutQuery('', { skip: skip });

  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(logOutUser());
      closeModal();
      setSkip(true);
    } catch (error) {
      console.error(error);
      setSkip(true);
    }
  };

  useEffect(() => {
    if (!skip) {
      refetch();
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

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
                      <LogoutButton onClick={() => setSkip(false)}>
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
