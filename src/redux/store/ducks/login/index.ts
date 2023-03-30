import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin(state: any, isLogged) {
      state.isLogged = isLogged.payload;
    },
    setLogout(state: any) {
      state.isLogged = [...state.isLogged, false];
    }
  }
})

export default loginSlice.reducer;

export const { setLogin, setLogout } = loginSlice.actions;