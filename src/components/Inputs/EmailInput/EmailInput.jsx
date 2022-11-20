import { Field } from 'formik';
import FormError from '../../FormError/FormError';

const EmailInput = ({ value, emailError, touchedError, handleChange }) => {
  return (
    <div>
      <Field
        id="email"
        type="email"
        name="email"
        placeholder=" "
        required
        onChange={handleChange}
        value={value}
        error={emailError && touchedError ? 'true' : 'false'}
      />
      <label htmlFor="email">Email</label>
      <FormError name="email" />
    </div>
  );
};

export default EmailInput;
