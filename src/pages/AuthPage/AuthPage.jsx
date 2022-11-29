import { useMedia } from 'react-use';
import {
  AuthSection,
  BlurBlock,
  FramePNG,
  PeachCirclePNG,
  PositionText,
  PurpleCirclePNG,
} from './AuthPage.styled';

import frame1x from '../../images/loginPage/tab/Frame-1x.png';
import frame2x from '../../images/loginPage/tab/Frame-2x.png';
import purpleCircle1x from '../../images/loginPage/tab/Ellipse 1-1x.png';
import purpleCircle2x from '../../images/loginPage/tab/Ellipse 1-2x.png';
import peachCircle1x from '../../images/loginPage/tab/Ellipse 2-1x.png';
import peachCircle2x from '../../images/loginPage/tab/Ellipse 2-2x.png';

const AuthPage = ({ children }) => {
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
              srcSet={`${frame2x} 1280w, ${frame1x} 768w`}
              src={frame1x}
              alt="frame"
              width={isDesktop ? 435 : 260}
              height={isDesktop ? 420 : 250}
            />
          </FramePNG>
          <PurpleCirclePNG>
            <img
              srcSet={`${purpleCircle2x} 1280w, ${purpleCircle1x} 768w`}
              src={purpleCircle1x}
              alt="purple-circle"
              width={618}
              height={547}
            />
          </PurpleCirclePNG>
          <PeachCirclePNG>
            <img
              srcSet={`${peachCircle2x} 1280w, ${peachCircle1x} 768w`}
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
