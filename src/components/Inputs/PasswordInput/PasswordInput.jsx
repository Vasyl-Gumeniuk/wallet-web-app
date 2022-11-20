import { Field } from 'formik';
import FormError from '../../FormError';

const PasswordInput = ({
  value,
  passwordError,
  touchedError,
  handleChange,
}) => {
  return (
    <div>
      <Field
        id="password"
        type="password"
        name="password"
        placeholder=" "
        required
        onChange={handleChange}
        value={value}
        error={passwordError && touchedError ? 'true' : 'false'}
      />
      <label htmlFor="password">Password</label>
      <FormError name="password" />
    </div>
  );
};

export default PasswordInput;
