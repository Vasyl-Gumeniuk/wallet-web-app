import { Box } from '../../Box';
import { ContainerBlock } from '../../components/Container/Container.styled';
import Logo from '../../components/Logo';
import LoginForm from './LoginForm';

const LoginPage = () => {
<<<<<<< Updated upstream
=======
  const isNotMobile = useMedia('(min-width: 768px)');
  const isDesktop = useMedia('(min-width: 1280px)');

>>>>>>> Stashed changes
  return (
    <Box pt={107} pb={107}>
      <ContainerBlock>
        <Logo type="login" />
        <LoginForm />
      </ContainerBlock>
    </Box>
  );
};

export default LoginPage;
