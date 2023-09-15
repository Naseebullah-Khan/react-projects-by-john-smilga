const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "GET DATA") {
    return { ...state, loading: false, cart: action.payload };
  }
  if (action.type === "GET TOTALS") {
    let { total, amount } = state.cart.reduce(
      (total, item) => {
        total.total += item.amount * item.price;
        total.amount += item.amount;
        return total;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === "CLEAR CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
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
  return new Error("Action is not found");
};
export default reducer;
