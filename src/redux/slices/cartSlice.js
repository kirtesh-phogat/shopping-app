import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  try {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return Array.isArray(storedCart)
      ? storedCart.map((item) => ({
          ...item,
          quantity: Number(item.quantity) > 0 ? Number(item.quantity) : 1,
        }))
      : [];
  } catch {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: loadCart(),
  },
  reducers: {
    addProductIntoCart: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.cartItem.push({ ...action.payload, quantity: 1 });
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload,
      );

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload,
        );
        return;
      }

      existingItem.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const {
  addProductIntoCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
