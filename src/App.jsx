import NavBar from '../components/NavBar';
import CartContainer from '../components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { calculate } from '../features/cart/cartSlice';
import Modal from '../components/Modal';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
 

  