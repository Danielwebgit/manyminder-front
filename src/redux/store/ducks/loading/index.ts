import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  isLoading: boolean;
}

const initialState = {
  isLoading: false
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state: any, loading) => {
      state.isLoading =  true;
    },
  }
})

export default loadingSlice.reducer;

export const { setLoading } = loadingSlice.actions;