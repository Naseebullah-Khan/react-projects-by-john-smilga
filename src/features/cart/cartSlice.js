import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { openModal } from "../modal/modalSlice";

// const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

// fetch function
// export const getCartItems = createAsyncThunk("cart/getCartItems", () =>
//   fetch(url)
//     .then((res) => res.json())
//     .catch((err) => console.log(err))
// );

// Axios
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (url, thunkAPI) => {
    try {
      // console.log(url);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState()); // get entire state of application
      // thunkAPI.dispatch(openModal()); // you can dispatch an action like opening a modal
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
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
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, toggleAmount, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
