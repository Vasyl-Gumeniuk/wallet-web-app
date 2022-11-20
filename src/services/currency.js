import axios from 'axios';
export async function showCurrency() {
  const { data } = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5&origin=*',
    {
      headers: {
        method: "GET", 
        mode: 'cors',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        credentials: 'include'
        
        
      },
    }
  );

  return data;
}