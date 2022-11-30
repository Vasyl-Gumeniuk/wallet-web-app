import { BalanceLabel } from './Balance.styled';
import { Wrapper } from './Balance.styled';
import { Sum } from './Balance.styled';
export default function Balance({ currentUser }) {
  const currentBalance = currentUser?.data.curr_balance;
  return (
    <Wrapper>
      <BalanceLabel>Your balance</BalanceLabel>
      <Sum>{currentBalance ? currentBalance : '0.00'}</Sum>
    </Wrapper>
  );
}
