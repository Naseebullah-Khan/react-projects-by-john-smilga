import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err))
);

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cartItems = payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, toggleAmount, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
