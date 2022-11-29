import Container from '../Container'
import { NavBar } from '../../NavBar/NavBar';
import Chart from '../Chart';
import Currency from '../Currency';
import Balance from '../Balance'
import {Wrapper, Main, NavContainer, ChatContainer, NavBalance} from './Dashboard.styled';
export default function DashboardPage() {
    return (
        <Wrapper>
        <Container>
        <Main>
       <NavContainer> 
        <NavBalance>   
       <NavBar/>
       <Balance/>
       </NavBalance>
       <Currency/>
       </NavContainer>
       <ChatContainer>
       <Chart/>
       </ChatContainer>
       </Main>
       </Container>
       </Wrapper>
      
    )
}