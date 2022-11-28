import {useEffect, useState } from 'react';
import {store} from '../../redux/store'
import {BalanceLabel} from './Balance.styled'
import {Wrapper} from './Balance.styled';
import {Sum} from './Balance.styled'
export default function Balance() {
    const [balance, SetBalance] = useState(null);
    async function showBalance() {
        let response = await fetch(
          'https://back-voit-wallet.herokuapp.com/api/user/auth/current'
        );
        if (response.status === 200) {
          let json = await response.json();
          return json;
        }
        throw new Error(response.status);
      }
      useEffect(()=>{
        if(store.getState().authSlice.isLoggedIn === false) {
            return
        }
        else {
            SetBalance(showBalance())
        }
        
      },[])
      return (
        <Wrapper>
        <BalanceLabel>Your balance</BalanceLabel>
        <Sum>₴ 24 000.00</Sum>
        </Wrapper>
      )
}