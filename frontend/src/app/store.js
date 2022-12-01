import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
import favouriteSlice from './favourite-slice';
import cartSlice from './cart-slice';

export const store = configureStore({
  reducer: {
    favourite: favouriteSlice.reducer,
    cart: cartSlice.reducer
  },
});
