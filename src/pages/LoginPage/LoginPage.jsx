import { Box } from '../../Box';
import { ContainerBlock } from '../../components/Container/Container.styled';
import Logo from '../../components/Logo';
import LoginForm from './LoginForm';
// import Currency from '../../components/Currency/Currency';

const LoginPage = () => {
  return (
    <Box pt={107} pb={107}>
      <ContainerBlock>
        <Logo />
        <LoginForm />
      </ContainerBlock>
    </Box>
  );
};

export default LoginPage;
