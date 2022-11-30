import Container from '../Container';
import { NavBar } from '../../NavBar/NavBar';
import Chart from '../Chart';
// import Currency from '../Currency';
import Balance from '../Balance';
import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import { Wrapper, Main, NavContainer, ChatContainer } from './Dashboard.styled';
import Table from '../Table/Table';

const FROM = {
  home: 'home',
  statistics: 'statistics',
};

export default function DashboardPage({ currentUser, from }) {
  return (
    <Wrapper>
      <Container>
        <Main>
          <NavContainer>
            <NavBar />
            <Balance currentUser={currentUser} />
            {/* <Currency /> */}
          </NavContainer>
          <ChatContainer>
            {from === FROM.home ? <Table /> : <Chart />}
          </ChatContainer>
          <ButtonAddTransactions currentUser={currentUser} />
        </Main>
      </Container>
    </Wrapper>
  );
}
