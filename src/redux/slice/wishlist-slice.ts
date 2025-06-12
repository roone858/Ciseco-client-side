// src/redux/wishlistSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { WishlistItem, WishlistState } from "../../interfaces";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state: WishlistState, action) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state: WishlistState, action) => {
      state.items = state.items.filter(
        (item: WishlistItem) => item.productId !== action.payload
      );
    },
    setWishlist: (state: WishlistState, action) => {
      state.items = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
