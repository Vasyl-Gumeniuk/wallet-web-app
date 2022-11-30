import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Currency from './components/Currency/Currency';
import { Mobile } from './services/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchCurrentUserQuery } from './redux/auth/authApi';
import { fetchUser } from './redux/auth/authSlice';
import DashboardPage from './components/DashboardPage/DashboardPage';
import PrivateRouter from './components/Navigation/PrivateRouter';
import PublicRouter from './components/Navigation/PublicRouter';

export const App = () => {
  const token = useSelector(state => state.authSlice.token);
  const skip = token === null ? true : false;
  const { data: currentUser } = useFetchCurrentUserQuery('', {
    skip,
  });
  console.log(currentUser);
  console.log(token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token === null) {
      return;
    }
    dispatch(fetchUser(currentUser));
  }, [currentUser, dispatch, token]);
  return (
    <>
      <Header currentUser={currentUser} />
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
              <Currency></Currency>
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
      </Routes>
      <GlobalStyle />
    </>
  );
};
