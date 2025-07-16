'use client';

import { createSlice } from '@reduxjs/toolkit';  // Corregido el import

const initialState = [];  // Corregido "initialstate" por "initialState"

const cartSlice = createSlice({
  name: 'cart',
  initialState,  // Usado el nombre correcto
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
