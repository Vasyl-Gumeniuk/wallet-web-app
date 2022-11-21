import sprite from '../../../images/icons/sprite-all-icons.svg';
import FormError from '../../FormError';
import { EmailIcon } from '../EmailInput/EmailInput.styled';
import {
  FormInput,
  InputBlock,
  InputContent,
  InputLabel,
} from '../Inputs.styled';

const PasswordInput = ({
  value,
  passwordError,
  touchedError,
  handleChange,
}) => {
  return (
    <InputBlock>
      <InputContent>
        <EmailIcon error={passwordError && touchedError ? 'true' : 'false'}>
          <use href={sprite + '#icon-lock'}></use>
        </EmailIcon>
        <FormInput
          id="password"
          type="password"
          name="password"
          placeholder=" "
          required
          onChange={handleChange}
          value={value}
          error={passwordError && touchedError ? 'true' : 'false'}
        />
        <InputLabel htmlFor="password">Password</InputLabel>
      </InputContent>
      <FormError name="password" />
    </InputBlock>
  );
};

export default PasswordInput;
