import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{basket}, dispatch] = UseStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                <p>
                    총액 ({basket.length} items) : <strong>{value}원</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />체크박스입니다.
                </small>
                </>
            )} decimalScale={2} 
            value={getBasketTotal(basket)} 
            displayType={"text"} 
            thousandseparator={true}
            prefix={"$"} />

            <button>결제하기</button>
        </div>
    );
}

export default Subtotal;