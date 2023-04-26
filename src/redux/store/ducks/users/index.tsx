import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  isAuthorization: false
};

export interface ProductsState {
  users: [];
}

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      setUsers(state: any, action: any) {
      state.users = action.payload.users;
    },
      setAuthorization: (state: any) => {
        state.isAuthorization = [...state.isAuthorization, true]
      }
  }
})

export default UsersSlice.reducer;

export const { setUsers, setAuthorization } = UsersSlice.actions;