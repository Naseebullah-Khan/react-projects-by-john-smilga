const reducer = (state, action) => {
  if (action.type === "CLEAR CART") {
    console.log("clear cart");
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE ITEM") {
    console.log("remove item");
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "INCREASE ITEM") {
    console.log("increase item");
  }
  if (action.type === "DECREASE ITEM") {
    console.log("decrease item");
  }
  return state;
};

export default reducer;
