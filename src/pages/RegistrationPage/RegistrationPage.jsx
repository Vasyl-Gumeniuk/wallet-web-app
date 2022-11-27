import RegistrationForm from './RegistrationForm';
import Logo from '../../components/Logo';
import { Box } from '../../Box';
import { ContainerBlock } from '../../components/Container/Container.styled';

const RegistrationPage = () => {
  return (
    <Box pt={32} pb={32}>
      <ContainerBlock>
        <Logo type="registration" />
        <RegistrationForm />
      </ContainerBlock>
    </Box>
  );
};

export default RegistrationPage;
