import { Form, Formik } from 'formik';
import EmailInput from '../../../components/EmailInput';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      // validationSchema={SignupSchema}
      // onSubmit={async (values, actions) => {
      //   const validValues = {
      //     ...values,
      //     position: +values.position,
      //     file,
      //   };
      //   await handleSubmit(validValues);
      //   if (postError !== '') {
      //     actions.setSubmitting(false);
      //   }
      // }}
    >
      {({ handleChange, isSubmitting, values, errors, touched }) => {
        return (
          <Form>
            <EmailInput />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
