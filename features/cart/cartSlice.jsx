import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../components/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      if (cartItem) cartItem.amount += 1;
      cartSlice.caseReducers.calculate(state);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      if (cartItem && cartItem.amount > 0) cartItem.amount -= 1;
      cartSlice.caseReducers.calculate(state);
    },
    calculate: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
      console.log("Current amount:", state.amount);

    }
  }
});



export const { clearCart, removeItem, increase, decrease, calculate } =
  cartSlice.actions;

export default cartSlice.reducer;