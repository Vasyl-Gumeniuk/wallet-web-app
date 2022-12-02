import { BalanceLabel } from './Balance.styled';
import { Wrapper } from './Balance.styled';
import { Sum, Main } from './Balance.styled';
import {
  useGetTransactionsStatisticsQuery,
} from '../../redux/transactions/transactionApi';
export default function Balance() {
  const statData = useGetTransactionsStatisticsQuery('', '');
  var currBalance = 0.0;
  if (statData.data) {
    currBalance = statData.data.currBalance;
   
  }
  return (
 
    <Main>
      <Wrapper>
        <BalanceLabel>Your balance</BalanceLabel>
        <Sum><span>₴</span> {currBalance}</Sum>
      </Wrapper>
      </Main>
    );
}
