import { LoginContainer } from '../../components/Container/Container.styled';
import Logo from '../../components/Logo';
import AuthPage from '../AuthPage/AuthPage';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <AuthPage>
      <LoginContainer>
        <Logo type="login" />
        <LoginForm />
      </LoginContainer>
    </AuthPage>
  );
};

export default LoginPage;
