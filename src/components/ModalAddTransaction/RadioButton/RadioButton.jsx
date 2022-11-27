import PropTypes from 'prop-types';
import sprite from '../../../images/icons/sprite-all-icons.svg';
import { TransactionButton, TextButton, Toggle } from './RadioButton.styled';

const RadioButton = ({ transaction, handleInputChange }) => {
  const { type } = transaction;
  console.log(type);
  return (
    <TransactionButton>
      <TextButton type={type === 'expense'}>Income</TextButton>
      <Toggle>
        <input
          type="checkbox"
          name="type"
          onChange={handleInputChange}
          checked={type === 'expense'}
        />
        <div className="thumb">
          <div className="indicator">
            <svg width="20" height="20" aria-label="plus">
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </div>
        </div>
      </Toggle>
      <TextButton type={type === 'expense'}>Expense</TextButton>
    </TransactionButton>
  );
};
RadioButton.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    sum: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }),
  handleInputChange: PropTypes.func.isRequired,
};

export default RadioButton;
