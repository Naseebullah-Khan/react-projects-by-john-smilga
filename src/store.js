import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart/cartSlice";
import ModalReducer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: ModalReducer,
  },
});

export default store;
