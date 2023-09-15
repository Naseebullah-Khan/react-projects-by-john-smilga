const reducer = (state, action) => {
  if (action.type === "CLEAR CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  // let newCart = state.cart.map((item) => {
  //   if (item.id === action.payload) {
  //     if (action.type === "INCREASE ITEM") {
  //       return { ...item, amount: item.amount + 1 };
  //     } else if (action.type === "DECREASE ITEM") {
  //       return { ...item, amount: item.amount - 1 };
  //     }
  //   }
  //   return item;
  // });
  // return { ...state, cart: newCart.filter((item) => item.amount > 0) };

  if (action.type === "INCREASE ITEM") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "DECREASE ITEM") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, cart: newCart.filter((item) => item.amount > 0) };
  }
  return state;
};

export default reducer;
