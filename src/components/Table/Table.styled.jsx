import styled from 'styled-components';
import { theme } from '../../theme.js';

export const TableContainer = styled.div`
  display: inline-block;
  width: 715px;
  height: 200px;

  text-align: center;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
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
  line-height: 1.5;
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
  line-height: 1.5;

  border-bottom: 1px solid #dcdcdf;
`;

export const TableContentItem = styled.div`
  display: inline-block;
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  width: 280px;
`;

export const MobileItemLeft = styled.li`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const MobileItemRight = styled.li`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const MobileItem = styled.li`
  margin-bottom: 8px;
`;
