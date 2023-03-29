import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin(state: any, isLogged) {
      state.isLogged = isLogged;
    }
  }
})

export default loginSlice.reducer;

export const { setLogin } = loginSlice.actions;