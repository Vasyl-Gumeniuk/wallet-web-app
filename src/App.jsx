import Hello from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import Currency from './components/Currency/Currency';
import Container from './components/Container/Container';
import { Mobile } from './services/mediaQuery';
export const App = () => {
  return (
    <>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hello />
                <NavBar />
                <Container>
                  <Outlet></Outlet>
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
    </>
  );
};
