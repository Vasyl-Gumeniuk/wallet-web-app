import { BalanceLabel } from './Balance.styled';
import { Wrapper } from './Balance.styled';
import { Sum, Main } from './Balance.styled';
export default function Balance({ currentUser }) {
  const currentBalance = currentUser?.data.curr_balance;
  return (
 
    <Main>
      <Wrapper>
        <BalanceLabel>Your balance</BalanceLabel>
        <Sum>{currentBalance ? currentBalance : 'Earn money'}</Sum>
      </Wrapper>
      </Main>
    );
}
