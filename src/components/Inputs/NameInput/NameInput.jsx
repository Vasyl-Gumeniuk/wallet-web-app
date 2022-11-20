import { Field } from 'formik';
import FormError from '../../FormError';

const NameInput = ({ value, nameError, touchedError, handleChange }) => {
  return (
    <div>
      <Field
        id="name"
        type="text"
        name="name"
        placeholder=" "
        required
        onChange={handleChange}
        value={value}
        error={nameError && touchedError ? 'true' : 'false'}
      />
      <label htmlFor="name">Name</label>
      <FormError name="name" />
    </div>
  );
};

export default NameInput;
