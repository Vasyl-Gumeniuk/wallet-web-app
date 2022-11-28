import sprite from '../../../images/icons/sprite-all-icons.svg';
import {
  TransactionButton,
  TextButtonIncome,
  Toggle,
  TextButtonExpense,
} from './RadioButton.styled';

const RadioButton = ({ type, setType }) => {
  const handlerChange = e => {
    let isChecked = e.target.checked;
    switch (isChecked) {
      case true:
        setType('expense');
        break;
      case false:
        setType('income');
        break;
      default:
        return;
    }
  };
  return (
    <TransactionButton>
      <TextButtonIncome type={type}>Income</TextButtonIncome>
      <Toggle>
        <input type="checkbox" name="type" onChange={handlerChange} />
        <div className="thumb">
          <div className="indicator">
            <svg width="20" height="20" aria-label="plus">
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </div>
        </div>
      </Toggle>
      <TextButtonExpense type={type}>Expense</TextButtonExpense>
    </TransactionButton>
  );
};

export default RadioButton;
