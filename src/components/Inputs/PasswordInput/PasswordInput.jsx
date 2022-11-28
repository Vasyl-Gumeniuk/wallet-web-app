import { useState } from 'react';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import PasswordStrengthBar from 'react-password-strength-bar';
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
  passwordError,
  touchedError,
  handleChange,
  registration = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleHideShowButtonClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputBlock>
      <InputContent>
        <FormInputIcon error={passwordError && touchedError ? 'true' : 'false'}>
          <use href={sprite + '#icon-lock'}></use>
        </FormInputIcon>
        <FormInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder=" "
          required
          onChange={handleChange}
          value={value}
          error={passwordError && touchedError ? 'true' : 'false'}
        />
        <InputLabel htmlFor="password">Password</InputLabel>
        <HideShowButton onClick={handleHideShowButtonClick}>
          {showPassword ? <BiShowAlt /> : <BiHide />}
        </HideShowButton>
      </InputContent>
      {registration && (
        <PasswordStrengthBar password={value} shortScoreWord="" />
      )}
      <FormError name="password" />
    </InputBlock>
  );
};

export default PasswordInput;
