import sprite from '../../../images/icons/sprite-all-icons.svg';
import FormError from '../../FormError';
import {
  FormInput,
  InputBlock,
  InputContent,
  InputLabel,
  FormInputIcon,
} from '../Inputs.styled';

const PasswordInput = ({
  value,
  confirmPasswordError,
  touchedError,
  handleChange,
}) => {
  return (
    <InputBlock>
      <InputContent>
        <FormInputIcon
          error={confirmPasswordError && touchedError ? 'true' : 'false'}
        >
          <use href={sprite + '#icon-lock'}></use>
        </FormInputIcon>
        <FormInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder=" "
          required
          onChange={handleChange}
          value={value}
          error={confirmPasswordError && touchedError ? 'true' : 'false'}
        />
        <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
      </InputContent>
      <FormError name="confirmPassword" />
    </InputBlock>
  );
};

export default PasswordInput;
