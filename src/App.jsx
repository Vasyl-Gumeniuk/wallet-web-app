import Hello from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import Container from './components/Container/Container';
import { Outlet } from 'react-router-dom';
import Currency from './components/Currency/Currency';
import { Mobile } from './services/mediaQuery';

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hello />
              <NavBar />
              <Container>
                <Outlet />
              </Container>
            </>
          }
        >
          {/* Add Home page */}
          <Route path="home" element={<div>HOME PAGE MOBILE</div>}></Route>
          {/* Add statistics page */}
          <Route
            path="statistics"
            element={<div>STATISTICS PAGE MOBILE</div>}
          ></Route>
          <Route
            path="currency"
            element={
              <Mobile>
                <Currency></Currency>
              </Mobile>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
