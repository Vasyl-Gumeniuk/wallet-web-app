import sprite from '../../../images/icons/sprite-all-icons.svg';
import FormError from '../../FormError/FormError';
import {
  FormInput,
  InputBlock,
  InputContent,
  InputLabel,
  FormInputIcon,
} from '../Inputs.styled';

const EmailInput = ({ value, emailError, touchedError, handleChange }) => {
  return (
    <InputBlock>
      <InputContent>
        <FormInputIcon error={emailError && touchedError ? 'true' : 'false'}>
          <use href={sprite + '#icon-email'}></use>
        </FormInputIcon>
        <FormInput
          id="email"
          type="email"
          name="email"
          placeholder=" "
          required
          onChange={handleChange}
          value={value}
          error={emailError && touchedError ? 'true' : 'false'}
        />
        <InputLabel htmlFor="email">Email</InputLabel>
      </InputContent>
      <FormError name="email" />
    </InputBlock>
  );
};

export default EmailInput;
