import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  suppliers: [],
  loading: false
};

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    setSuppliers: (state: any, action: any) => {
      state.suppliers = action.payload.fornecedores;
    },
    setLoading: (state: any, loading) => {
      state.loading =  loading;
    },
  }
})

export default suppliersSlice.reducer;

export const { setSuppliers, setLoading } = suppliersSlice.actions;

