import { Wrapper } from "./Currency.styled";
import {Header} from './Currency.styled'
import {Body} from './Currency.styled'
import {Cell} from './Currency.styled'
import {CellLast} from './Currency.styled'
import {Foot} from './Currency.styled'
import {Line} from './Currency.styled'
import Loader from "../Loader/Loader";
import {CellMiddle} from './Currency.styled'
import {useEffect, useState} from 'react';
import {CellBody} from './Currency.styled'
import {CellMiddleBody} from './Currency.styled'
import {CellLastBody} from './Currency.styled'
import {CellMiddleBodyLast, Main} from './Currency.styled'
export default function Currency() {
     const [currency, SetCurrency] = useState([]);
     useEffect(() =>{
       const today = Date.now()
        let time = localStorage.getItem('time');
        let currencyArray  = async () => {
        let response = await fetch(
            'https://api.monobank.ua/bank/currency'
          );
      if (response.status === 200) {
            let json = await response.json();
            localStorage.setItem('time', JSON.stringify(today));
            SetCurrency(filterCurrency(json))
            return filterCurrency(json)
        }
       }
      if(localStorage.getItem('currency')=== null) {
        currencyArray().then(data=>localStorage.setItem('currency', JSON.stringify(data)))
        
      }
      if(localStorage.getItem('currency')!== null &&time + 3600000 < today) {
        currencyArray()
        }
      if(localStorage.getItem('currency')!== null&& time + 3600000 >= today) {
        let currency = JSON.parse(localStorage.getItem('currency'));
        SetCurrency(currency)
        }
        return () => {

        }
     },[])
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
        <CellMiddle>Purchase</CellMiddle>
        <CellLast>Sale</CellLast>
        </Line>
        </Header>
        <Body>
        <Line>
        <CellBody>USD</CellBody>
        <CellMiddleBody>{currency[0].rateBuy}</CellMiddleBody>
        <CellBody>{currency[0].rateSell.toFixed(2)}</CellBody>
        </Line>
        <Line>
        <CellBody>EUR</CellBody>
        <CellMiddleBody>{currency[1].rateBuy}</CellMiddleBody>
        <CellBody>{currency[1].rateSell.toFixed(2)}</CellBody>
        </Line>
        <Line>
        <Cell>GBP</Cell>
        <CellMiddleBodyLast>{currency[3].rateCross.toFixed(2)}</CellMiddleBodyLast>
        <CellLastBody>{currency[3].rateCross.toFixed(2)}</CellLastBody>
        </Line>
        </Body>
        <Foot/>
    
     </Wrapper>
        )
      }
    return (
      <Main>{dataforRendering}</Main>
 );
};