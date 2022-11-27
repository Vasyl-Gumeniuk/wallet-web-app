// import { ButtonAdd } from '../../Button/Button';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import Loader from '../../Loader/Loader';
import React from 'react';
import DatePicker from 'react-datepicker';
import sprite from '../../../images/icons/sprite-all-icons.svg';
import { selectStyles } from './Select.styled';
import { transactionApi } from '../../../redux/transactions/transactionApi';
import 'react-datepicker/dist/react-datepicker.css';
import {
  SelectContainer,
  MoneyDateContainer,
  DateContainer,
  CommentContainer,
  ButtonAdd,
} from '../Form/Form.styled';
import RadioButton from '../RadioButton/RadioButton';

const Form = ({
  transaction,
  updateTransaction,
  handleInputChange,
  onClick,
  isLoadig,
}) => {
  const { type, date, category, sum, comment } = transaction;

  const categoriesResponce = transactionApi.useGetTransactionsQuery(null, {});

  const handleSubmit = async e => {
    e.preventDefault();
    const sum = e.target.elements.sum.value;
    const date = e.target.elements.date.value;

    if (category === '') {
      toast('Please select a category');
      return;
    }
    if (sum <= 0) {
      toast('Enter a positive amount value');
      return;
    }
    if (date > date(new Date())) {
      toast('Please enter a valid date');
      return;
    }
    console.log('addTransaction');
  };
  const selectCategories = categoriesResponce.data?.data
    ? categoriesResponce.data.data
        .filter(x => x.type === type)
        .map(({ category, _id }) => ({ label: category, value: _id }))
    : [];

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <RadioButton
          transaction={transaction}
          handleInputChange={handleInputChange}
        />

        {type === 'expense' && (
          <SelectContainer>
            <Select
              key={type}
              styles={selectStyles(type)}
              placeholder="Select a category"
              options={selectCategories}
              onChange={option => {
                updateTransaction('category', option.value);
              }}
              isSearchable={false}
            />
          </SelectContainer>
        )}

        <MoneyDateContainer>
          <label>
            <input
              type="text"
              placeholder="0.00"
              name="sum"
              value={sum}
              onChange={e => {
                if (
                  e.target.value === '' ||
                  /^[0-9]*(\.[0-9]?[0-9]?)?$/.test(e.target.value)
                ) {
                  handleInputChange(e);
                }
              }}
            />
          </label>
          <DateContainer>
            <DatePicker
              selected={date}
              onChange={date => {
                updateTransaction('date', date);
              }}
              dateFormat="dd.MM.yyyy"
            />
            <svg width="18" height="20" aria-label="calendar">
              <use href={`${sprite}#icon-calendar`}></use>
            </svg>
          </DateContainer>
        </MoneyDateContainer>
        <CommentContainer
          placeholder="Comment"
          name="comment"
          value={comment}
          onChange={handleInputChange}
        />
        <ButtonAdd type="submit">ADD</ButtonAdd>
      </form>
    </>
  );
};
// const useAddTransition = () => {
//   const dispatch = useDispatch();

//   async function addTransaction(transaction) {
//   //  console.log(transaction.type, 'type ok')
//     try {
//       const newObj = {
//         ...transaction,
//         sum: Number(transaction.sum),
//         type: !transaction.type,
//         category: transaction.category,
//         date: transaction.date,
//         comment: transaction.comment,
//       };
//       await dispatch(transactionApi.useAddTransactionMutation(newObj));
//       alert('Transaction completed successfully');
//     } catch (e) {
//       alert('Transaction failed, try again');
//     }
//   }
//   return addTransaction;
// };

Form.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    sum: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }),
  updateTransaction: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Form;
