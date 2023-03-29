import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null
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
    }
  }
})

export default UsersSlice.reducer;

export const { setUsers } = UsersSlice.actions;