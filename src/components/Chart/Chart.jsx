import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React, { useState } from 'react';
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

const chartData = [
  {
    color: 'rgba(254, 208, 87, 1.0)',
    label: 'Basic expenses',
    data: 12,
    id: 1,
  },
  { color: 'rgba(255, 216, 208, 1.0)', label: 'Products', data: 19, id: 2 },
  { color: 'rgba(253, 148, 152, 1.0)', label: 'Car', data: 3, id: 3 },
  { color: 'rgba(197, 186, 255, 1.0)', label: 'Self care', data: 5, id: 4 },
  { color: 'rgba(110, 120, 232, 1.0)', label: 'Child care', data: 2, id: 5 },
  {
    color: 'rgba(74, 86, 226, 1.0)',
    label: 'Household products',
    data: 3,
    id: 6,
  },
  { color: 'rgba(129, 225, 255, 1.0)', label: 'Education', data: 10, id: 7 },
  { color: 'rgba(36, 204, 167, 1.0)', label: 'Leisure', data: 15, id: 8 },
  { color: 'rgba(0, 173, 132, 1.0)', label: 'Other expenses', data: 20, id: 9 },
];

const currentYear = 2022;
const registerYear = 2015;

function makeYearArray() {
  let yearArray = [];
  let n = 0;
  for (let y = registerYear; y <= currentYear; y++) {
    const obj = { year: y, id: n++ };
    yearArray.push(obj);
  }
  return yearArray;
}

export const data = {
  labels: chartData.map(item => item.label),
  datasets: [
    {
      label: '# of Votes',
      data: chartData.map(item => item.data),
      backgroundColor: chartData.map(item => item.color),
      borderWidth: 0,
    },
  ],
  text: '3000',
};

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
  const years = makeYearArray();

  return (
      <ChartContainer>
        <DiagramThumb>
          <FirstPart>
            <Title>Statistics</Title>
            <Diagram>
              <Sum>2000.0</Sum>
              <Doughnut data={data} options={chartOptions} />
            </Diagram>
          </FirstPart>
          <SecondPart>
            <Select value={year} name="year" onChange={changeSelect}>
              <option disabled={true} value="">
                Вибери рік
              </option>
              {years.map(({ year, id }) => (
                <option key={id}>{year}</option>
              ))}
            </Select>
            <Select value={month} name="month" onChange={changeSelect}>
              <option disabled={true} value="">
                Вибери місяць
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
              {chartData.map(({ id, color, label, data }) => (
                <TableItem key={id}>
                  <TableItemThumb>
                    <TableSquare
                      style={{ background: `${color}` }}
                    ></TableSquare>
                    <span>{label}</span>
                  </TableItemThumb>
                  <span>{data}</span>
                </TableItem>
              ))}
              <TableBottom>
                <p>Expenses:</p>
                <p style={{ color: '#FF6596' }}>100.0</p>
              </TableBottom>
              <TableBottom>
                <p>Income:</p>
                <p style={{ color: '#24CCA7' }}>200.0</p>
              </TableBottom>
            </Table>
          </SecondPart>
        </DiagramThumb>
      </ChartContainer>
    
  );
}

export default Chart;
