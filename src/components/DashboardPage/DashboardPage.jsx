import Container from '../Container';
import { NavBar } from '../../NavBar/NavBar';
import Chart from '../Chart';
import Currency from '../Currency';
import Balance from '../Balance';
import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import { Wrapper, Main, NavContainer, ChatContainer, Line, NavbarBalance} from './Dashboard.styled';
import Table from '../Table/Table';
import { useMediaQuery } from 'react-responsive'
const FROM = {
  home: 'home',
  statistics: 'statistics',
};

export default function DashboardPage({ currentUser, from }) {
  const isDesktopBig = useMediaQuery({ query: '(min-width: 2560px)' })
  const isDesktopSmall = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <Wrapper>
     <Container>
        <Main>
          <NavContainer>
            <NavbarBalance>
            <NavBar />
            <Balance currentUser={currentUser} />
            </NavbarBalance>
            {isTablet && <Currency />}
            </NavContainer>
            <Line></Line>
          <ChatContainer>
            {from === FROM.home ? <Table /> : <Chart />}
          </ChatContainer>
          <ButtonAddTransactions currentUser={currentUser} />
        </Main>
      </Container>
    </Wrapper>
  );
}