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

import purpleCircle1x from '../../images/loginPage/tab/Ellipse 1-1x.png';
import purpleCircle2x from '../../images/loginPage/tab/Ellipse 1-2x.png';
import purpleCircleDesk1x from '../../images/loginPage/desk/Ellipse 1-1x.png';
import purpleCircleDesk2x from '../../images/loginPage/desk/Ellipse 1-2x.png';

import peachCircle1x from '../../images/loginPage/tab/Ellipse 2-1x.png';
import peachCircle2x from '../../images/loginPage/tab/Ellipse 2-2x.png';
import peachCircleDesk1x from '../../images/loginPage/desk/Ellipse 2-1x.png';
import peachCircleDesk2x from '../../images/loginPage/desk/Ellipse 2-2x.png';

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
            <picture>
              <source
                srcSet={`${registration ? frameRegisterDesk1x : frameDesk1x} 1x,
            ${registration ? frameRegisterDesk2x : frameDesk2x} 2x"
            media="(min-width: 1200px)"
            type="image/png"`}
              />
              <source
                srcSet={`${
                  registration ? frameRegisterTablet1x : frameTablet1x
                } 1x,
            ${registration ? frameRegisterTablet2x : frameTablet2x} 2x"
            media="(min-width: 768px)"
            type="image/png"`}
              />
              <img
                src={registration ? frameRegisterTablet1x : frameTablet1x}
                alt="frame"
                width={isDesktop ? 435 : 260}
                height={isDesktop ? 420 : 250}
              />
            </picture>
          </FramePNG>
          <PurpleCirclePNG>
            <picture>
              <source
                srcSet={`${purpleCircleDesk1x} 1x,
            ${purpleCircleDesk2x} 2x"
            media="(min-width: 1200px)"
            type="image/png"`}
              />
              <source
                srcSet={`${purpleCircle1x} 1x,
            ${purpleCircle2x} 2x"
            media="(min-width: 768px)"
            type="image/png"`}
              />
              <img
                src={purpleCircle1x}
                alt="purple-circle"
                width={618}
                height={547}
              />
            </picture>
          </PurpleCirclePNG>
          <PeachCirclePNG>
            <picture>
              <source
                srcSet={`${peachCircleDesk1x} 1x,
            ${peachCircleDesk2x} 2x"
            media="(min-width: 1200px)"
            type="image/png"`}
              />
              <source
                srcSet={`${peachCircle1x} 1x,
            ${peachCircle2x} 2x"
            media="(min-width: 768px)"
            type="image/png"`}
              />
              <img
                src={peachCircle1x}
                alt="peach-circle"
                width={618}
                height={547}
              />
            </picture>
          </PeachCirclePNG>
          {isTablet && <PositionText>Finance App</PositionText>}
        </>
      )}
    </AuthSection>
  );
};

export default AuthPage;
