import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import produtcReduce from './ducks/products';
import loginReduce from './ducks/login';
import usersReduce from './ducks/users';
import loadingReduce from './ducks/loading';
import suppliersReduce from './ducks/suppliers';

const store = configureStore({
  reducer: {
      products: produtcReduce,
      suppliers: suppliersReduce,
      login: loginReduce,
      users: usersReduce,
      loading: loadingReduce
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store