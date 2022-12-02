import { BalanceLabel } from './Balance.styled';
import { Wrapper } from './Balance.styled';
import { Sum, Main } from './Balance.styled';
export default function Balance({ currentUser }) {
  const currentBalance = currentUser?.data.balance;
  console.log(currentBalance);
  return (
    <Main>
      <Wrapper>
        <BalanceLabel>Your balance</BalanceLabel>
        <Sum>
          <span>₴</span> {currentBalance ? currentBalance : 0.0}
        </Sum>
      </Wrapper>
    </Main>
  );
}
