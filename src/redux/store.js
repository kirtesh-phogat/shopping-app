import { configureStore } from "@reduxjs/toolkit";

import cartReducers from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart.cartItem));
});
