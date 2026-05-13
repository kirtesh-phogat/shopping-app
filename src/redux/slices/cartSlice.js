import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  a:99
};

export const cartSlice = createSlice({
  name: "prodCart",
  initialState,
  reducers: {
    addProductIntoCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductIntoCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
