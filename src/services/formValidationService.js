import { object, string, ref } from 'yup';
// eslint-disable-next-line
export const NAME_MATCH =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
// eslint-disable-next-line
export const EMAIL_MATCH =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

export const nameError =
  'Name may contain only letters, apostrophe, dash and spaces';
export const emailError = 'Invalid email address';
export const requiredError = 'This field is required';
export const LoginSchema = object().shape({
  email: string()
    .matches(EMAIL_MATCH, emailError)
    .min(4, 'Email is too short')
    .max(255, 'Email is too long')
    .email()
    .required(requiredError),
  password: string()
    .min(6, 'Password is too short')
    .max(12, 'Password is too long')
    .required(requiredError),
});
export const RegistrationSchema = object().shape({
  name: string()
    .matches(NAME_MATCH, nameError)
    .min(1, 'Name is too short')
    .max(12, 'Name is too long')
    .required(requiredError),
  email: string()
    .matches(EMAIL_MATCH, emailError)
    .min(4, 'Email is too short')
    .max(255, 'Email is too long')
    .email()
    .required(requiredError),
  password: string()
    .min(6, 'Password is too short')
    .max(12, 'Password is too long')
    .required(requiredError),
  confirmPassword: string()
    .min(6, 'Password is too short')
    .max(12, 'Password is too long')
    .required(requiredError)
    .oneOf([ref('password'), null], 'Passwords must match'),
});
