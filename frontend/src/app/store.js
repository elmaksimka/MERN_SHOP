import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import favouriteSlice from './favourite-slice';
import cartSlice from './cart-slice';
import authorizingSlice from './isAuthorizing-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favourite: favouriteSlice.reducer,
    cart: cartSlice.reducer,
    authorizing: authorizingSlice.reducer
  },
});
