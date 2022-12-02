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
import {useEffect, useState} from 'react';
const FROM = {
  home: 'home',
  statistics: 'statistics',
};

export default function DashboardPage({ currentUser, from }) {
  const [balance, setBalance] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' })
  let location = useLocation().pathname;
  function getElementforNavigation() {
  let navBalance 
  if(location === '/home'&& isMobile===true) {
    navBalance = (
    <NavContainer>
    <NavbarBalance>
     <NavBar />
     <Balance balance={balance} />
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
            <Balance balance={balance} />
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
            {from === FROM.home ? <Table/> : <Chart/>}
          </ChatContainer>
          <ButtonAddTransactions currentUser={currentUser} />
        </Main>
      </Container>
    </Wrapper>
  );
}