import sprite from '../../../images/icons/sprite-all-icons.svg';
import FormError from '../../FormError';
import {
  FormInput,
  FormInputIcon,
  InputBlock,
  InputContent,
  InputLabel,
} from '../Inputs.styled';

const NameInput = ({ value, nameError, touchedError, handleChange }) => {
  return (
    <InputBlock>
      <InputContent>
        <FormInputIcon error={nameError && touchedError ? 'true' : 'false'}>
          <use href={sprite + '#icon-account'}></use>
        </FormInputIcon>
        <FormInput
          id="name"
          type="text"
          name="name"
          placeholder=" "
          required
          onChange={handleChange}
          value={value}
          error={nameError && touchedError ? 'true' : 'false'}
        />
        <InputLabel htmlFor="name">Name</InputLabel>
      </InputContent>
      <FormError name="name" />
    </InputBlock>
  );
};

export default NameInput;
