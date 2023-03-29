import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import produtcReduce from './ducks/products';
import LoginReduce from './ducks/login';
import UsersReduce from './ducks/users';

const store = configureStore({
  reducer: {
      products: produtcReduce,
      login: LoginReduce,
      users: UsersReduce
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store