import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import CircleLoader from 'react-spinners/CircleLoader';
import {
  AuthButton,
  RedirectFormButton,
} from '../../../components/Button/Button.styled';
import EmailInput from '../../../components/Inputs/EmailInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import { useLogInMutation } from '../../../redux/auth/authApi';
import { logInUser } from '../../../redux/auth/authSlice';
import { LoginSchema } from '../../../services/formValidationService';
import { ButtonElement, RedirectButtonLink } from './LoginForm.styled';

const LoginForm = () => {
  const [login] = useLogInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    const user = { email, password };
    const { data } = await login(user);

    await dispatch(logInUser(data));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async ({ email, password }, actions) => {
        await handleSubmit(email, password);
      }}
    >
      {({ handleChange, isSubmitting, values, errors, touched }) => {
        return (
          <Form>
            <EmailInput
              handleChange={handleChange}
              value={values.email}
              emailError={errors.email}
              touchedError={touched.email}
            />
            <PasswordInput
              handleChange={handleChange}
              value={values.password}
              passwordError={errors.password}
              touchedError={touched.password}
              registration={false}
            />
            <ul>
              <ButtonElement>
                <AuthButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <CircleLoader color="#fff" size={30} />
                  ) : (
                    'Log in'
                  )}
                </AuthButton>
              </ButtonElement>
              <ButtonElement>
                <RedirectButtonLink to="/registration">
                  <RedirectFormButton disabled={isSubmitting}>
                    Register
                  </RedirectFormButton>
                </RedirectButtonLink>
              </ButtonElement>
            </ul>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
