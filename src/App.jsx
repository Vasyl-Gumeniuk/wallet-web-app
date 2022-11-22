import Hello from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hello />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
