import styled from 'styled-components';

export const SelectContainer = styled.div`
  margin-top: 40px;
  cursor: pointer;
`;

export const MoneyDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
  input {
    margin: 0;
    height: 34px;
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    outline: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-black);
    font-family: Circe;
    @media screen and (min-width: $tablet) {
      padding-left: 0;
      text-align: center;
    }
    &::placeholder {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const InputCategory = styled.input`
  margin: 0;
  height: 34px;
  width: 100%;
  margin-top: 40px;
  padding-left: 20px;
  padding-bottom: 10px;
  outline: none;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: black;
  font-family: Circe;
  resize: none;
  overflow: hidden;
  max-lines: 2;
  outline-offset: 0;
  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #bdbdbd;
    font-family: Circe;
  }
  @media screen and (max-width: 767px) {
    max-lines: 1;
    height: 74px;
  }
`;

export const DateContainer = styled.div`
  position: relative;
  input {
    margin: 0;
    height: 34px;
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    outline: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--color-gray-form);
    outline-offset: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-black);
    font-family: Circe, sans-serif;
  }
  > svg {
    position: absolute;
    right: 20px;
    bottom: 10px;
    @media screen and (min-width: 768px) {
      margin-left: 20px;
    }
  }
`;

export const CommentContainer = styled.textarea`
  margin: 0;
  height: 34px;
  width: 100%;
  margin-top: 40px;
  padding-left: 20px;
  padding-bottom: 10px;
  outline: none;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: black;
  font-family: Circe;
  resize: none;
  overflow: hidden;
  max-lines: 2;
  outline-offset: 0;
  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #bdbdbd;
    font-family: Circe;
  }
  @media screen and (max-width: 767px) {
    max-lines: 1;
    height: 74px;
  }
`;
export const ButtonAdd = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  background-color: #24cca7;
  transition: all 200ms ease-in-out;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.03);
  }
`;
