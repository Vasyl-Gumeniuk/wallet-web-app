import { Wrapper } from "./Currency.styled";
import {Header} from './Currency.styled'
import {Body} from './Currency.styled'
import {Cell} from './Currency.styled'
import {CellLast} from './Currency.styled'
import {LineNotFirst} from './Currency.styled'
import {Foot} from './Currency.styled'
import {Line} from './Currency.styled'
import Loader from "../Loader/Loader";
import {useEffect, useState } from 'react';
export default function Currency() {
    const today = Date.now()
    const [currency, SetCurrency] = useState(() => showCurrency());
     async function showCurrency() {
        let response = await fetch(
          'https://api.monobank.ua/bank/currency'
        );
        if (response.status === 200) {
          let json = await response.json();
          localStorage.setItem('time', JSON.stringify(today));
          SetCurrency(filterCurrency(json))
          return filterCurrency(json);
        }
        throw new Error(response.status);
      }
      useEffect(()=>{
        let time = JSON.parse(localStorage.getItem('time'));
        if(time + 3600000 < today) {
          showCurrency()
        }
      })
      function filterCurrency(array) {
        let currencyUSD = array.filter(item => item.currencyCodeA === 840)
        let currencyEUR = array.filter(item => item.currencyCodeA === 978)
        let currencyGBP = array.filter(item => item.currencyCodeA === 826)
        var currencyArray = currencyUSD.concat(currencyEUR, currencyGBP);
        return currencyArray
      }
      let dataforRendering
      if(currency[0] === undefined) {
        dataforRendering = <Loader/>
      }
      else {
        dataforRendering = (
         <Wrapper>
        <Header>
        <Line>
        <Cell>Currency</Cell>
        <Cell>Purchase</Cell>
        <CellLast>Sale</CellLast>
        </Line>
        </Header>
        <Body>
        <Line>
        <Cell>USD</Cell>
        <Cell>{currency[0].rateBuy}</Cell>
        <CellLast>{currency[0].rateSell.toFixed(2)}</CellLast>
        </Line>
        <Line>
        <LineNotFirst>EUR</LineNotFirst>
        <LineNotFirst>{currency[1].rateBuy}</LineNotFirst>
        <LineNotFirst>{currency[1].rateSell.toFixed(2)}</LineNotFirst>
        </Line>
        <Line>
        <LineNotFirst>GBP</LineNotFirst>
        <LineNotFirst>{currency[3].rateCross.toFixed(2)}</LineNotFirst>
        <LineNotFirst>{currency[3].rateCross.toFixed(2)}</LineNotFirst>
        </Line>
        </Body>
        <Foot/>
    
     </Wrapper>
        )
      }
    return (
    dataforRendering
 );
};