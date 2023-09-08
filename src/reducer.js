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
