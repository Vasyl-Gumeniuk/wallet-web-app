import { useEffect } from "react";
import {showCurrency} from '../../services/currency'
import { Wrapper } from "./Currency.styled";
import {Header} from './Currency.styled'
import {Body} from './Currency.styled'
import {Cell} from './Currency.styled'
import {CellLast} from './Currency.styled'
import {LineNotFirst} from './Currency.styled'
export default function Currency() {
    useEffect(()=> {
        // showCurrency()
    }) 
    return (
        <Wrapper>
        <Header>
        <tr>
        <Cell>Currency</Cell>
        <Cell>Purchase</Cell>
        <CellLast>Sale</CellLast>
        </tr>
        </Header>
        <Body>
        <tr>
        <Cell>USD</Cell>
        <Cell>27.55</Cell>
        <CellLast>27.65</CellLast>
        </tr>
        <tr>
        <LineNotFirst>USD</LineNotFirst>
        <LineNotFirst>27.55</LineNotFirst>
        <LineNotFirst>27.65</LineNotFirst>
        </tr>
        <tr>
        <LineNotFirst>USD</LineNotFirst>
        <LineNotFirst>27.55</LineNotFirst>
        <LineNotFirst>27.65</LineNotFirst>
        </tr>
        </Body>
        <tfoot></tfoot>
    
     </Wrapper>
    
     
    );
};