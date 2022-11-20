import { Form, Formik } from 'formik';
import {
  LoginButton,
  RedirectFormButton,
} from '../../../components/Button/Button.styled';
import EmailInput from '../../../components/Inputs/EmailInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import { LoginSchema } from '../../../services/formValidationService';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, actions) => {
        console.log('values', values);
        // const validValues = {
        //   ...values,
        //   position: +values.position,
        //   file,
        // };
        //-------------------------------
        // await handleSubmit(validValues);
        //-------------------------------
        // if (postError !== '') {
        //   actions.setSubmitting(false);
        // }
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
            <LoginButton type="submit">Login</LoginButton>
            <RedirectFormButton>Register</RedirectFormButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
