import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // return { ...state, cartItems: [] };
      state.cartItems = [];
    },
    removeItem: (state, { payload: id }) => {
      const tempCartItems = state.cartItems.filter((item) => item.id !== id);
      state.cartItems = tempCartItems;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
