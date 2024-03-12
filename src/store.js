import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
