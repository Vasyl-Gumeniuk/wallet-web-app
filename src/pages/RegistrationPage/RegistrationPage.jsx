import RegistrationForm from './RegistrationForm';
import { RegisterContainer } from '../../components/Container/Container.styled';
import Logo from '../../components/Logo';
import AuthPage from '../AuthPage/AuthPage';

const RegistrationPage = () => {
  return (
    <AuthPage registration={true}>
      <RegisterContainer>
        <Logo type="registration" />
        <RegistrationForm />
      </RegisterContainer>
    </AuthPage>
  );
};

export default RegistrationPage;
