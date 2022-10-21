import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    count: counterReducer
  },
});
