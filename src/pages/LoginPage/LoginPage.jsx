import { useMedia } from 'react-use';
import { AuthContainer } from '../../components/Container/Container.styled';
import Logo from '../../components/Logo';
import LoginForm from './LoginForm';
import { AuthSection, FramePNG } from './LoginPage.styled';
import frame1x from '../../images/loginPage/tab/Frame-1x.png';
import frame2x from '../../images/loginPage/tab/Frame-2x.png';

const LoginPage = () => {
  const isNotMobile = useMedia('(min-width: 768px)');
  const isDesktop = useMedia('(min-width: 1280px)');
  return (
    <AuthSection>
      <AuthContainer>
        <Logo type="login" />
        <LoginForm />
      </AuthContainer>
      {isNotMobile && (
        <FramePNG>
          <img
            srcSet={`${frame2x} 1280w, ${frame1x} 768w`}
            src={frame1x}
            alt="frame"
            width={isDesktop ? 435 : 260}
            height={isDesktop ? 420 : 250}
          />
        </FramePNG>
      )}
    </AuthSection>
  );
};

export default LoginPage;
