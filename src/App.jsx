import Hello from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hello />
      <RegistrationPage />
      <LoginPage />
    </>
  );
};
