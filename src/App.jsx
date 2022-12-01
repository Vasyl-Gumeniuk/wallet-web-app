import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import Currency from './components/Currency/Currency';
import { Mobile } from './services/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchCurrentUserQuery } from './redux/auth/authApi';
import { fetchUser } from './redux/auth/authSlice';
import { CurrencyBg } from './components/DashboardPage/Dashboard.styled';
// import StatisticsPage from './pages/StatisticsPage';
import Table from '../src/components/Table';
import DashboardPage from './components/DashboardPage/DashboardPage';
import PrivateRouter from './components/Navigation/PrivateRouter';
import PublicRouter from './components/Navigation/PublicRouter';
import { NavBar } from './NavBar/NavBar';
import { useMediaQuery } from 'react-responsive';
export const App = () => {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  let location = useLocation().pathname;
  if (location === '/currency' && isMobile !== true) {
    navigate('/home');
  }

  const token = useSelector(state => state.authSlice.token);
  const skip = token === null ? true : false;
  const { data: currentUser } = useFetchCurrentUserQuery('', {
    skip,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (token === null) {
      return;
    }
    dispatch(fetchUser(currentUser));
  }, [currentUser, dispatch, token]);
  return (
    <>
      {currentUser && <Header currentUser={currentUser} />}
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRouter>
              <DashboardPage currentUser={currentUser} from="home" />
            </PrivateRouter>
          }
        ></Route>
        <Route
          path="/statistics"
          element={
            <PrivateRouter>
              <DashboardPage currentUser={currentUser} from="statistics" />
            </PrivateRouter>
          }
        ></Route>
        <Route
          path="/currency"
          element={
            <Mobile>
              <CurrencyBg>
                <NavBar></NavBar>
                <Currency></Currency>
              </CurrencyBg>
            </Mobile>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicRouter restricted>
              <LoginPage />
            </PublicRouter>
          }
        ></Route>
        <Route
          path="/registration"
          element={
            //
            <PublicRouter restricted>
              <RegistrationPage />
            </PublicRouter>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/registration" />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
