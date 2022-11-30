import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React, { useState } from 'react';
import Container from '../Container/Container';
import { months, allCategories } from './ChartData';
import {
  useGetTransactionsQuery,
  useGetTransactionsStatisticsQuery,
} from '../../redux/transactions/transactionApi';

import {
  ChartContainer,
  Title,
  DiagramThumb,
  FirstPart,
  SecondPart,
  Diagram,
  Sum,
  Select,
  Table,
  TableTop,
  TableItem,
  TableItemThumb,
  TableSquare,
  TableBottom,
} from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const currentYear = 2022;
const registerYear = 2015;

function makeYearArray() {
  let yearArray = [];
  let n = 0;
  for (let y = registerYear; y <= currentYear; y++) {
    const obj = { year: y.toString(), id: n++ };
    yearArray.push(obj);
  }
  return yearArray;
}

function findCategory(data) {
  var usedCategories = [];
  for (const item of data) {
    const all = allCategories.find(cat => cat.category === item.category);
    all.data = item.totalex;
    usedCategories.push(all);
  }
  return usedCategories;
}

function findMonthNumber(month) {
  if (month !== '') {
    const monthNumber = months.find(item => item.month === month);
    return monthNumber.id;
  } else return '';
}

const chartOptions = {
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
    },
  },
  cutout: '70%',
};

function Chart() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  var currBalance = 0.0;
  var income = 0.0;
  var expense = 0.0;
  var res = [{ id: 1, color: 'white', category: 'Other', data: 0.0 }];
  var monthToShow = '';

  const changeSelect = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'year':
        setYear(value);
        break;
      case 'month':
        setMonth(value);

        break;
      default:
        return;
    }
  };
  monthToShow = findMonthNumber(month);

  const statData = useGetTransactionsStatisticsQuery(monthToShow, year);

  if (statData.data) {
    currBalance = statData.data.currBalance;
    income = statData.data.totalIncome;
    expense = statData.data.totalExpense;
    const stats = statData.data.stats;
    res = findCategory(stats);
  }

  const years = makeYearArray();

  const data = {
    labels: res.map(item => item.category),
    datasets: [
      {
        label: '',
        data: res.map(item => item.data),
        backgroundColor: res.map(item => item.color),
        borderWidth: 0,
      },
    ],
  };

  return (
    <Container>
      <ChartContainer>
        <DiagramThumb>
          <FirstPart>
            <Title>Statistics</Title>
            <Diagram>
              <Sum>&#8372; {currBalance} </Sum>
              <Doughnut data={data} options={chartOptions} />
            </Diagram>
          </FirstPart>
          <SecondPart>
            <Select value={year} name="year" onChange={changeSelect}>
              <option disabled={true} value="">
                Виберите рік
              </option>
              {years.map(({ year, id }) => (
                <option key={id}>{year}</option>
              ))}
            </Select>
            <Select value={month} name="month" onChange={changeSelect}>
              <option disabled={true} value="">
                Виберите місяць
              </option>
              {months.map(({ month, id }) => (
                <option key={id}>{month}</option>
              ))}
            </Select>
            <Table>
              <TableTop>
                <p>Category</p>
                <p>Sum</p>
              </TableTop>
              {res.map(({ id, color, category, data }) => (
                <TableItem key={id}>
                  <TableItemThumb>
                    <TableSquare
                      style={{ background: `${color}` }}
                    ></TableSquare>
                    <span>{category}</span>
                  </TableItemThumb>
                  <span>{data}</span>
                </TableItem>
              ))}
              <TableBottom>
                <p>Expenses:</p>
                <p style={{ color: '#FF6596' }}>{expense}</p>
              </TableBottom>
              <TableBottom>
                <p>Income:</p>
                <p style={{ color: '#24CCA7' }}>{income}</p>
              </TableBottom>
            </Table>
          </SecondPart>
        </DiagramThumb>
      </ChartContainer>
    </Container>
  );
}

export default Chart;
