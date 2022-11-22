import { Wrapper } from "./Currency.styled";
import {Header} from './Currency.styled'
import {Body} from './Currency.styled'
import {Cell} from './Currency.styled'
import {CellLast} from './Currency.styled'
import {LineNotFirst} from './Currency.styled'
import {Foot} from './Currency.styled'
import {Line} from './Currency.styled'
import {useGetStaticCurrency} from './GetStaticCurrency/getStaticCurrency'
export default function Currency() {
    const {eur, usd, gbp} = useGetStaticCurrency();
    return (
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
        <Cell>{usd}</Cell>
        <CellLast>{usd}</CellLast>
        </Line>
        <Line>
        <LineNotFirst>EUR</LineNotFirst>
        <LineNotFirst>{eur}</LineNotFirst>
        <LineNotFirst>{eur}</LineNotFirst>
        </Line>
        <Line>
        <LineNotFirst>GBP</LineNotFirst>
        <LineNotFirst>{gbp}</LineNotFirst>
        <LineNotFirst>{gbp}</LineNotFirst>
        </Line>
        </Body>
        <Foot/>
    
     </Wrapper>
    
     
    );
};