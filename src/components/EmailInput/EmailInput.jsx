// import {
//   FormInput,
//   InputBlock,
//   InputLabel,
// } from 'components/Registration/Registration.styled';
import { ErrorMessage, Field } from 'formik';

export const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

const EmailInput = () => {
  return (
    <div>
      <Field
        id="email"
        type="email"
        name="email"
        placeholder=" "
        required
        // onChange={handleChange}
        // value={value}
        // error={emailError && touchedError ? 'true' : 'false'}
      />
      <label htmlFor="email">Email</label>
      <FormError name="email" />
    </div>
  );
};

export default EmailInput;
