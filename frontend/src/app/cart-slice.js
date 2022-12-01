import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartCounter: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.cartCounter++;
    },
    // removeItemFromCart(state, action) {
    //   state.cartCounter--;
    // },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;