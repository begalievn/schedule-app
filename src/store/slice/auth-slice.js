import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoggedIn: false,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAuthorization: (state, action) => {
      const { token } = action.payload;

      state.isLoggedIn = true;
      state.token = token;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(PURGE, () => {
      return initialState;
    }),
});

export default authSlice;
export const authActions = authSlice.actions;
