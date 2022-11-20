import { useEffect } from "react";
import {showCurrency} from '../../services/currency'
export default function Currency() {
    useEffect(()=> {
        // showCurrency()
    }) 
    return (
        <table>
        <thead>
        <tr>
        <td>Currency</td>
        <td>Purchase</td>
        <td>Sale</td>
        </tr>
        </thead>
        <tbody></tbody>
        <tfoot></tfoot>
     </table>
    );
};