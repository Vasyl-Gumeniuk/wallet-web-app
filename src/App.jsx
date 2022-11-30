import Hello from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from './NavBar/NavBar';
import Container from './components/Container/Container';
import { Outlet } from 'react-router-dom';
import Currency from './components/Currency/Currency';
import { Mobile } from './services/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchCurrentUserQuery } from './redux/auth/authApi';
import { fetchUser } from './redux/auth/authSlice';
import StatisticsPage from './pages/StatisticsPage';
import Table from '../src/components/Table';

//import ModalAddTransaction from '../src/components/ModalAddTransaction';
// import PrivateRouter from './components/Navigation/PrivateRouter';
// import PublicRouter from './components/Navigation/PublicRouter';
// PrivateRouter,PublicRouter потрібно буде розкемнтувати щоб все запроцювало. Лишаю закоментовунами щоб кожного разу не логінитись так буду легше працюватись)
export const App = () => {
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
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRouter>
            <>
              <Hello />

              {/* <NavBar /> */}
              {/* <Container> */}
              {/* <ModalAddTransaction /> */}

              <Outlet />
              {/* </Container> */}
            </>
            // </PrivateRouter>
          }
        >
          {/* Add Home page */}
          <Route path="home" element={<div>HOME PAGE MOBILE</div>}></Route>
          {/* Add statistics page */}
          <Route path="statistics" element={<StatisticsPage />}></Route>
          <Route
            path="currency"
            element={
              <Mobile>
                <Currency></Currency>
              </Mobile>
            }
          ></Route>
          <Route path="table" element={<Table />}></Route>
        </Route>
        <Route
          path="/login"
          element={
            // <PublicRouter restricted>
            <LoginPage />
            // </PublicRouter>
          }
        ></Route>
        <Route
          path="/registration"
          element={
            //
            // <PublicRouter restricted>
            <RegistrationPage />
            // </PublicRouter>
          }
        ></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
