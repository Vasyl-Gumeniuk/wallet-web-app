import { useMedia } from 'react-use';
import {
  AuthSection,
  BlurBlock,
  FramePNG,
  PeachCirclePNG,
  PositionText,
  PurpleCirclePNG,
} from './AuthPage.styled';

import frameTablet1x from '../../images/loginPage/tab/Frame-1x.png';
import frameTablet2x from '../../images/loginPage/tab/Frame-2x.png';
import frameDesk1x from '../../images/loginPage/desk/Frame-1x.png';
import frameDesk2x from '../../images/loginPage/desk/Frame-2x.png';

import frameRegisterTablet1x from '../../images/registrationPage/tab/Frame-1x.png';
import frameRegisterTablet2x from '../../images/registrationPage/tab/Frame-2x.png';
import frameRegisterDesk1x from '../../images/registrationPage/desk/Frame-1x.png';
import frameRegisterDesk2x from '../../images/registrationPage/desk/Frame-2x.png';

import purpleCircle1x from '../../images/loginPage/tab/Ellipse1-1x.png';
import purpleCircle2x from '../../images/loginPage/tab/Ellipse1-2x.png';
import purpleCircleDesk1x from '../../images/loginPage/desk/Ellipse1-1x.png';
import purpleCircleDesk2x from '../../images/loginPage/desk/Ellipse1-2x.png';

import peachCircle1x from '../../images/loginPage/tab/Ellipse2-1x.png';
import peachCircle2x from '../../images/loginPage/tab/Ellipse2-2x.png';
import peachCircleDesk1x from '../../images/loginPage/desk/Ellipse2-1x.png';
import peachCircleDesk2x from '../../images/loginPage/desk/Ellipse2-2x.png';

const AuthPage = ({ registration = false, children }) => {
  const isNotMobile = useMedia('(min-width: 768px)');
  const isDesktop = useMedia('(min-width: 1280px)');
  const isTablet = useMedia('(min-width: 768px)' && '(max-width: 1280px)');

  return (
    <AuthSection>
      {isDesktop && <BlurBlock></BlurBlock>}
      {children}
      {isNotMobile && (
        <>
          <FramePNG>
            <img
              src={registration ? frameRegisterTablet1x : frameTablet1x}
              srcSet={`${
                registration ? frameRegisterTablet1x : frameTablet1x
              } 768w, ${
                registration ? frameRegisterDesk1x : frameDesk1x
              } 1280w`}
              alt="frame"
              width={isDesktop ? 435 : 260}
              height={isDesktop ? 420 : 250}
            />
          </FramePNG>
          <PurpleCirclePNG>
            <img
              srcSet={`${purpleCircle1x} 768w, ${purpleCircleDesk1x} 1280w`}
              src={purpleCircle1x}
              alt="purple-circle"
              width={618}
              height={547}
            />
          </PurpleCirclePNG>
          <PeachCirclePNG>
            <img
              srcSet={`${peachCircle1x} 768w, ${peachCircleDesk1x} 1280w`}
              src={peachCircle1x}
              alt="peach-circle"
              width={618}
              height={547}
            />
          </PeachCirclePNG>
          {isTablet && <PositionText>Finance App</PositionText>}
        </>
      )}
    </AuthSection>
  );
};

export default AuthPage;
