import {CartIcon} from '../src/icons'
import { useSelector } from 'react-redux'

const NavBar=()=> {
    const amount=useSelector((store)=>store.cart.amount);
  return (
    <nav>
        <div className='nav-center'>
            <h3>Redux ToolKit</h3>
            <div className='nav-container'>
                <CartIcon></CartIcon>
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar