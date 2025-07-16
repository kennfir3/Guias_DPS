import { configureStore } from '@reduxjs/toolkit';  // Corregido el import
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
