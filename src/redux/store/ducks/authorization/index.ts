import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorization: false
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuthorization: (state: any, isAuthorization) => {
      console.log(isAuthorization.payload)
      state.isAuthorization = isAuthorization.payload;
    },
  }
})

export default authorizationSlice.reducer;

export const { setAuthorization } = authorizationSlice.actions;