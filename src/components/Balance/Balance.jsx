import { BalanceLabel } from './Balance.styled';
import { Wrapper } from './Balance.styled';
import { Sum } from './Balance.styled';
import Container from '../Container';
export default function Balance({ currentUser }) {
  const currentBalance = currentUser?.data.curr_balance;
  return (
    <Container>
      <Wrapper>
        <BalanceLabel>Your balance</BalanceLabel>
        <Sum>{currentBalance ? currentBalance : 'Earn money'}</Sum>
      </Wrapper>
    </Container>
  );
}
