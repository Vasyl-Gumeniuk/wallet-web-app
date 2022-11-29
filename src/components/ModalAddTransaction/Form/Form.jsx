import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { useState } from 'react';
import {
  useGetTransactionsQuery,
  useAddTransactionMutation,
} from '../../../redux/transactions/transactionApi';
import DatePicker from 'react-datepicker';
import sprite from '../../../images/icons/sprite-all-icons.svg';
import { selectStyles } from './Select.styled';
import 'react-datepicker/dist/react-datepicker.css';
import {
  SelectContainer,
  MoneyDateContainer,
  DateContainer,
  CommentContainer,
  ButtonAdd,
} from '../Form/Form.styled';
import RadioButton from '../RadioButton/RadioButton';

const Form = () => {
  const [type, setType] = useState('income');
  const [sum, setSum] = useState('0.00');
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');
  const { data: transaction } = useGetTransactionsQuery();
  const [addTransaction] = useAddTransactionMutation();
  const categories = transaction
    ? transaction.data.map(category => category.category)
    : [];
  const options = categories.map(category => ({
    value: category,
    label: category,
  }));
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'sum':
        setSum(value);
        break;
      case 'comment':
        setComment(value);
        break;
      default:
        return;
    }
  };
  const transactionState = {
    type,
    category,
    sum,
    date,
    comment,
  };
  const onAddTransaction = async e => {
    e.preventDefault();

    console.log(transactionState);
    try {
      await addTransaction(transactionState);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form autoComplete="off" onSubmit={onAddTransaction}>
        <RadioButton type={type} setType={setType} />
        {type === 'expense' && (
          <SelectContainer>
            <Select
              key={type}
              styles={selectStyles(type)}
              placeholder="Select a category"
              options={options}
              isSearchable={false}
              onChange={option => setCategory(option.value)}
            />
          </SelectContainer>
        )}

        <MoneyDateContainer>
          <label>
            <input
              type="text"
              placeholder="0.00"
              name="sum"
              onChange={handleChange}
            />
          </label>
          <DateContainer>
            <DatePicker
              selected={date}
              dateFormat="dd.MM.yyyy"
              onChange={date => setDate(date)}
            />
            <svg width="18" height="20" aria-label="calendar">
              <use href={`${sprite}#icon-calendar`}></use>
            </svg>
          </DateContainer>
        </MoneyDateContainer>
        <CommentContainer
          placeholder="Comment"
          name="comment"
          onChange={handleChange}
        />

        <ButtonAdd type="submit">ADD</ButtonAdd>
      </form>
    </>
  );
};

export default Form;
