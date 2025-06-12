import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/product-slice";
import userSlice from "./slice/user-slice";
import loginSlice from "./slice/login-slice";
import shoppingCartSlice from "./slice/cart-slice";
import wishlistSlice from "./slice/wishlist-slice";
import alertSlice from "./slice/alert-slice";
import reviewSlice from "./slice/review-slice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    alert: alertSlice,
    products: productsSlice,
    reviews: reviewSlice,
    user: userSlice,
    cart: shoppingCartSlice,
    login: loginSlice,
  },
});
