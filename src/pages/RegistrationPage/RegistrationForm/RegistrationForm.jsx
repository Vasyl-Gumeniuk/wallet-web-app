import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  AuthButton,
  RedirectFormButton,
} from '../../../components/Button/Button.styled';
import EmailInput from '../../../components/Inputs/EmailInput';
import NameInput from '../../../components/Inputs/NameInput/NameInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import { useRegisterMutation } from '../../../redux/auth/authApi';
import { RegistrationSchema } from '../../../services/formValidationService';

const RegistrationForm = () => {
  const [
    registerUser,
    {
      isError: isRegistrationError,
      isLoading: isRegistrationLoading,
      isSuccess: isRegistrationSuccess,
    },
  ] = useRegisterMutation();

  console.log('isRegistrationError', isRegistrationError);
  console.log('isRegistrationLoading', isRegistrationLoading);
  console.log('isRegistrationSuccess', isRegistrationSuccess);

  const dispatch = useDispatch();

  const handleSubmit = async (email, password, name) => {
    await dispatch(registerUser({ email, password, name }));
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
            <RedirectFormButton>Login</RedirectFormButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
