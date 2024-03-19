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
    toggleAmount: (state, { payload: { id, type } }) => {
      state.cartItems = state.cartItems.filter((item) => {
        if (item.id === id) {
          if (type === "inc") {
            item.amount += 1;
          }
          if (type === "dec") {
            item.amount -= 1;
          }
        }
        return item;
      });
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, toggleAmount, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
