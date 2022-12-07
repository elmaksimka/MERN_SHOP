import { createSlice } from '@reduxjs/toolkit';

const authorizingSlice = createSlice({
  name: 'isAuthorizing',
  initialState: {
    isLoggingIn: false,
    isRegistering: false,
  },
  reducers: {
    loggingIn(state) {
      state.isLoggingIn = true;
      state.isRegistering = false;
    },
    registering(state) {
      state.isLoggingIn = false;
      state.isRegistering = true;
    },
    reset(state) {
      state.isLoggingIn = false;
      state.isRegistering = false;
    },
  },
});

export const authorizingActions = authorizingSlice.actions;

export default authorizingSlice;
