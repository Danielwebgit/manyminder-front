import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
  authorization: true
};

export interface ProductsState {
  products: [];
}

const produtcsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
      setProducts(state: any, action: any) {
      state.products = action.payload.products;
    },
    setLoading: (state: any, loading) => {
      state.loading =  loading;
    },
    addLoading: (state: any, action: any) => {
      state.products = [...state.products, action.payload];
    },
    deleteProduct: (state: any, action: any) => {
      state.products = state.products.filter((product: { id: number; }) =>  product.id !=  action.payload)
    },
    setAuthorization: (state: any, authorization) => {
      state.authorization = authorization;
    }
  }
});

export default produtcsSlice.reducer;

export const { setProducts, setLoading, addLoading, deleteProduct, setAuthorization } = produtcsSlice.actions;