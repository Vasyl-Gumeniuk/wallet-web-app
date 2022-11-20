import { ErrorMessage } from 'formik';

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

export default FormError;
