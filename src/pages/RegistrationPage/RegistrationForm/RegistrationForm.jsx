import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AuthButton,
  RedirectFormButton,
} from '../../../components/Button/Button.styled';
import EmailInput from '../../../components/Inputs/EmailInput';
import NameInput from '../../../components/Inputs/NameInput/NameInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import { useRegisterMutation } from '../../../redux/auth/authApi';
import { registerUser } from '../../../redux/auth/authSlice';
import { RegistrationSchema } from '../../../services/formValidationService';

const RegistrationForm = () => {
  const [
    register,
    {
      isError: isRegistrationError,
      isLoading: isRegistrationLoading,
      isSuccess: isRegistrationSuccess,
    },
  ] = useRegisterMutation();

  const dispatch = useDispatch();

  const handleSubmit = async (email, password, name) => {
    const user = { email, password, name };
    const { data } = await register(user);

    await dispatch(registerUser(data));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
      }}
      validationSchema={RegistrationSchema}
      onSubmit={async ({ email, password, name }, actions) => {
        await handleSubmit(email, password, name);
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
            />
            <NameInput
              handleChange={handleChange}
              value={values.name}
              nameError={errors.name}
              touchedError={touched.name}
            />
            <AuthButton type="submit">Register</AuthButton>
            <RedirectFormButton>
              <Link to="/login">Log in</Link>
            </RedirectFormButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
