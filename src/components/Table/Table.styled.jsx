import styled from 'styled-components';
import { theme } from '../../theme.js';

export const TableContainer = styled.div`
  display: inline-block;
  width: 704px;
  height: 200px;

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

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  border-bottom: 1px solid #dcdcdf;
`;

export const TableContentItem = styled.div`
  display: inline-block;
`;
