import {
  TableContainer,
  TableHead,
  TableHeadItem,
  TableContent,
  TableContentItem,
} from './Table.styled';

const colors = { income: '#24CCA7', expenses: '#FF6596' };

function Table() {
  return (
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
      <TableContent>
        <TableContentItem style={{ width: '15%', textAlign: 'left' }}>
          04.01.19
        </TableContentItem>
        <TableContentItem style={{ width: '10%', textAlign: 'center' }}>
          +
        </TableContentItem>
        <TableContentItem style={{ width: '20%', textAlign: 'left' }}>
          Other
        </TableContentItem>
        <TableContentItem style={{ width: '25%', textAlign: 'left' }}>
          November bonus
        </TableContentItem>
        <TableContentItem
          style={{
            width: '15%',
            textAlign: 'right',
            color: `${colors.income}`,
          }}
        >
          8000.0
        </TableContentItem>
        <TableContentItem style={{ width: '15%', textAlign: 'right' }}>
          150000
        </TableContentItem>
      </TableContent>
    </TableContainer>
  );
}

export default Table;
