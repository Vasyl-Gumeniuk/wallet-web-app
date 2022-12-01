import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 280px;
  margin-right: 0;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-right: 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 288px;
    margin-right: 32px;
  }
`;

export const Title = styled.h1`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 8px;
  text-align: left;
`;

export const DiagramThumb = styled.div`
  display: inline-flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FirstPart = styled.div`
  width: 280px;
  margin-right: 0;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-right: 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 200px;
    margin-right: 32px;
  }
`;

export const SecondPart = styled.div`
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1024px) {
    width: 260px;
  }
`;

export const Diagram = styled.div`
  position: relative;
  display: block;
  width: 100%;

  margin-bottom: 34px;
`;

export const Sum = styled.div`
  position: absolute;
  display: inline-block;

  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
`;

export const Select = styled.select`
  width: 100%;
  height: 58px;
  border-radius: 30px;
  border: solid 1px gray;
  margin-bottom: 20px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  padding-left: 20px;
  padding-right: 20px;
  outline: 0px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  background-color: transparent;
  overflow-y: auto;

  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Table = styled.ul`
  display: inline-block;
  width: 100%;
`;

export const SelectContainer = styled.div`
   {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const TableTop = styled.li`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  padding-left: 20px;
  padding-right: 20px;
  height: 58px;
  border-radius: 30px;
  background-color: white;
`;

export const TableItem = styled.li`
  display: inline-flex;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  height: 58px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: solid 1px lightgrey;
  text-align: left;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const TableItemThumb = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const TableSquare = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-right: 20px;
`;

export const TableBottom = styled.li`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  padding-left: 20px;
  padding-right: 20px;
`;

export const BottomContainer = styled.div`
   {
    margin-top: 15px;
  }
`;
