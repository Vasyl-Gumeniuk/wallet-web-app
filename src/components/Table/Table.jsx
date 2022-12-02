import {
  TableContainer,
  TableHead,
  TableHeadItem,
  TableContent,
  TableContentItem,
  MobileContainer,
  MobileItemLeft,
  MobileItemRight,
  MobileItem,
} from './Table.styled';
import { useGetTransactionsQuery } from '../../redux/transactions/transactionApi';
import { Mobile, Default } from '../../services/mediaQuery';

const colors = { income: '#24CCA7', expenses: '#FF6596' };

function Table() {
  const { data: transaction } = useGetTransactionsQuery();
  console.log(transaction);
  return (
    <>
      <Default>
        <TableContainer>
          <TableHead>
            <TableHeadItem style={{ width: '15%', textAlign: 'left' }}>
              Date
            </TableHeadItem>
            <TableHeadItem style={{ width: '10%', textAlign: 'center' }}>
              Type
            </TableHeadItem>
            <TableHeadItem style={{ width: '20%', textAlign: 'left' }}>
              Category
            </TableHeadItem>
            <TableHeadItem style={{ width: '25%', textAlign: 'left' }}>
              Comment
            </TableHeadItem>
            <TableHeadItem style={{ width: '15%', textAlign: 'right' }}>
              Sum
            </TableHeadItem>
            <TableHeadItem style={{ width: '15%', textAlign: 'right' }}>
              Balance
            </TableHeadItem>
          </TableHead>

          {transaction?.data.length > 0 &&
            transaction?.data.map(transaction => (
              <>
                <TableContent key={transaction._id}>
                  <TableContentItem style={{ width: '15%', textAlign: 'left' }}>
                    {transaction.date}
                  </TableContentItem>
                  <TableContentItem
                    style={{ width: '10%', textAlign: 'center' }}
                  >
                    {transaction.type === 'income' ? '+' : '-'}
                  </TableContentItem>
                  <TableContentItem style={{ width: '20%', textAlign: 'left' }}>
                    {transaction.category}
                  </TableContentItem>
                  <TableContentItem style={{ width: '25%', textAlign: 'left' }}>
                    {transaction.comment}
                  </TableContentItem>
                  <TableContentItem
                    style={{
                      width: '15%',
                      textAlign: 'right',
                      color: `${
                        transaction.type === 'income'
                          ? colors.income
                          : colors.expenses
                      }`,
                    }}
                  >
                    {transaction.sum}
                  </TableContentItem>
                  <TableContentItem
                    style={{ width: '15%', textAlign: 'right' }}
                  >
                    {transaction.balance}
                  </TableContentItem>
                </TableContent>
              </>
            ))}
        </TableContainer>
      </Default>
      <Mobile>
        {transaction?.data.length > 0 &&
          transaction?.data.map(transaction => (
            <div key={transaction._id}>
              <MobileContainer>
                <MobileItem>
                  <ul>
                    <MobileItemLeft>
                      <span
                        style={{
                          width: '15%',
                          textAlign: 'right',
                          color: `${
                            transaction.type === 'income'
                              ? colors.income
                              : colors.expenses
                          }`,
                        }}
                      ></span>
                      Date
                    </MobileItemLeft>
                    <MobileItemLeft>
                      <span
                        style={{
                          width: '15%',
                          textAlign: 'right',
                          color: `${
                            transaction.type === 'income'
                              ? colors.income
                              : colors.expenses
                          }`,
                        }}
                      ></span>
                      Type
                    </MobileItemLeft>
                    <MobileItemLeft>
                      <span
                        style={{
                          width: '15%',
                          textAlign: 'right',
                          color: `${
                            transaction.type === 'income'
                              ? colors.income
                              : colors.expenses
                          }`,
                        }}
                      ></span>
                      Category
                    </MobileItemLeft>
                    <MobileItemLeft>
                      <span
                        style={{
                          width: '15%',
                          textAlign: 'right',
                          color: `${
                            transaction.type === 'income'
                              ? colors.income
                              : colors.expenses
                          }`,
                        }}
                      ></span>
                      Comment
                    </MobileItemLeft>
                    <MobileItemLeft>
                      <span
                        style={{
                          width: '15%',
                          textAlign: 'right',
                          color: `${
                            transaction.type === 'income'
                              ? colors.income
                              : colors.expenses
                          }`,
                        }}
                      ></span>
                      Sum
                    </MobileItemLeft>
                    <MobileItemLeft>
                      <span
                        style={{
                          width: '15%',
                          textAlign: 'right',
                          color: `${
                            transaction.type === 'income'
                              ? colors.income
                              : colors.expenses
                          }`,
                        }}
                      ></span>
                      Balance
                    </MobileItemLeft>
                  </ul>
                </MobileItem>
                <MobileItem>
                  <ul>
                    <MobileItemRight>{transaction.date}</MobileItemRight>
                    <MobileItemRight>{transaction.type}</MobileItemRight>
                    <MobileItemRight>{transaction.category}</MobileItemRight>
                    <MobileItemRight>{transaction.comment}</MobileItemRight>
                    <MobileItemRight>{transaction.sum}</MobileItemRight>
                    <MobileItemRight>{transaction.balance}</MobileItemRight>
                  </ul>
                </MobileItem>
              </MobileContainer>
            </div>
          ))}
      </Mobile>
    </>
  );
}

export default Table;
