import Container from '../Container';
import { NavBar } from '../../NavBar/NavBar';
import Chart from '../Chart';
import Currency from '../Currency';
import Balance from '../Balance';
import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import { Wrapper, Main, NavContainer, ChatContainer, Line, NavbarBalance} from './Dashboard.styled';
import Table from '../Table/Table';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
const FROM = {
  home: 'home',
  statistics: 'statistics',
};

export default function DashboardPage({ currentUser, from }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  let location = useLocation().pathname;
  function getElementforNavigation() {
  let navBalance 
  if(location === '/home'&& isMobile===true) {
    navBalance = (
    <NavContainer>
    <NavbarBalance>
     <NavBar />
     <Balance currentUser={currentUser} />
    </NavbarBalance>
     </NavContainer>
    );
    
  }
  if(location === '/statistics'&&isMobile===true) {
    navBalance = (
    <NavContainer>
    <NavbarBalance>
    <NavBar />
    </NavbarBalance>
     </NavContainer>
    );
   
  }
  if(isMobile!==true) {
      navBalance = (
          <NavContainer>
           <NavbarBalance>
            <NavBar />
            <Balance currentUser={currentUser} />
            </NavbarBalance>
            <Currency />
            </NavContainer>
      )
      
    }
   return navBalance
  }
  
  return (
    <Wrapper>
     <Container>
        <Main>
          {getElementforNavigation()}
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