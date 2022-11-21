import { useState } from 'react';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import sprite from '../../../images/icons/sprite-all-icons.svg';
import { HideShowButton } from '../../Button/Button.styled';
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
  const [showPassword, setShowPassword] = useState(false);

  const handleHideShowButtonClick = () => {
    setShowPassword(!showPassword);
  };

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
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder=" "
          required
          onChange={handleChange}
          value={value}
          error={confirmPasswordError && touchedError ? 'true' : 'false'}
        />
        <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
        {/* <LinearProgress /> */}
        <HideShowButton onClick={handleHideShowButtonClick}>
          {showPassword ? <BiShowAlt /> : <BiHide />}
        </HideShowButton>
      </InputContent>
      <FormError name="confirmPassword" />
    </InputBlock>
  );
};

export default PasswordInput;
