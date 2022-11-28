import styled from 'styled-components';

export const TransactionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

export const TextButtonExpense = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.47;
  color: #e0e0e0;
  font-family: Circe;
  color: ${p => {
    if (p.type === 'expense') {
      return '#ff6596';
    } else {
      return '';
    }
  }};
`;
export const TextButtonIncome = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.47;
  color: #e0e0e0;
  font-family: Circe;
  color: ${p => {
    if (p.type === 'income') {
      return '#24cca7';
    } else {
      return '';
    }
  }};
`;

export const Toggle = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  > input {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    :checked {
      ~ .thumb {
        background-color: rgba(white, 0.1);
        .indicator {
          left: 37px;
          background-color: #ff6596;
          box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
          :hover {
            box-shadow: none;
          }
          .vertical {
            display: none;
          }
        }
      }
    }
  }
  .thumb {
    position: relative;
    width: 80px;
    height: 40px;
    border-radius: 30px;
    background-color: white;
    border: 1px solid #e0e0e0;
    opacity: 1;
    transition: background-color 200ms ease-in-out;
  }
  .indicator {
    position: absolute;
    top: -2px;
    left: -1px;
    width: 44px;
    height: 44px;
    background-color: #24cca7;
    border-radius: 22px;
    transition: left 250ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    :hover {
      box-shadow: none;
    }
  }
`;
