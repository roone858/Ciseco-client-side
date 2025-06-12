// src/redux/wishlistSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../interfaces";

const cartSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state: CartState, action) => {
      const item = state.items.find(
        (item) => item.productId == action.payload.productId
      );
      if (item) {
        const price = item.subtotal / item.quantity;
        item.quantity = item.quantity + action.payload.quantity;
        item.subtotal = parseFloat((price * item.quantity).toFixed(2));
      } else {
        state.items.push({ ...action.payload });
      }
      state.total = state.items.reduce((acc, item) => acc + item.subtotal, 0);
      state.total = parseFloat(state.total.toFixed(2));
    },
    removeFromCart: (state: CartState, action) => {
      state.items = state.items.filter(
        (item: CartItem) => item.productId !== action.payload
      );
      state.total = state.items.reduce((acc, item) => acc + item.subtotal, 0);
      state.total = parseFloat(state.total.toFixed(2));
    },
    setCart: (state: CartState, action) => {
      state.items = action.payload;
      state.total = state.items.reduce((acc, item) => acc + item.subtotal, 0);
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
