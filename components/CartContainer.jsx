import CartItem from '../CartItem';
import { useSelector,useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

function CartContainer() {
    const dispatch=useDispatch()
    const {amount,total,cartItems}=useSelector((store)=>store.cart)
            // console.log(cartItems);
            
    if (amount<1) { 
        return(<section>
        <h2 className='empty-cart text-white'>your bag is empty</h2>
        </section>)}

return (
        <section className='cart'>
            <h2>your bag</h2>
            {cartItems.map((item)=>{
                return(<CartItem key={item.id} {...item}></CartItem>)
            })}
            <hr />
            <div className='cart-total'>
            <h4>Total<span>${total.toFixed(2)}</span></h4>
            </div>
            <button className='btn clear-btn' onClick={()=>dispatch(openModal())}>Clear Cart</button>
        </section>
)
}

export default CartContainer