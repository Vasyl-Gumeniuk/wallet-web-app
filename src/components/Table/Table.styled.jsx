import styled from 'styled-components';
import { theme } from '../../theme.js';

export const TableContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  width: 230px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1024px) {
    width: 550px;
  }

  text-align: center;
`;

export const TableHead = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 58px;
  border-radius: 30px;

  padding-left: 20px;
  padding-right: 20px;

  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  background: ${theme.colors.whiteTextColor};
`;

export const TableHeadItem = styled.div`
  display: inline-block;
`;

export const TableContent = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 58px;

  padding-left: 20px;
  padding-right: 20px;

  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  border-bottom: 1px solid #dcdcdf;
`;

export const TableContentItem = styled.div`
  display: inline-block;
`;

export const ShortTableItem = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 58px;
  padding-left: 20px;
  padding-right: 20px;

  overflow: hidden;
  &:not(:last-child) {
    border-bottom: solid 1px lightgrey;
  }
`;

export const ShortTableCell = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  border-radius: 20px;
  background: #ffffff;

  border-left: solid 5px #24cca7;
  width: 280px;
`;

export const TableSpan = styled.span`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

export const ShortTableContainer = styled.div`
  display: inline-block;
`;
