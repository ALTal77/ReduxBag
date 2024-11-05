import React from 'react';
import { ChevronDown,ChevronUp } from './src/icons';
import { removeItem } from './features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { increase,decrease } from './features/cart/cartSlice';

function CartItem({id,amount,img,title,price}) {
    const dispatch= useDispatch();
  return (
    <section className='cart-item'>
        <img src= {img} className='' alt={title} />
        <div>
            {title}
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn' onClick={()=>{dispatch(removeItem(id))}}>Remove</button>
        </div>
        <div>
            <button className='amount-btn' onClick={()=>{dispatch(increase({id}))}}>
                <ChevronUp></ChevronUp>
            </button>
            <p className='amount'>{amount}</p>
            <button className='amount-btn' onClick={()=>{
                if (amount===1) {
                    dispatch(removeItem(id))
                    return;
                }
                dispatch(decrease({id}))}}>
                <ChevronDown></ChevronDown>
            </button>
        </div>
    </section>
  )
}

export default CartItem;