import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const maxPrice = Math.max(
      ...action.payload.map((product) => product.price)
    );

    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: { ...state.filters, maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload.target.value };
  }

  if (action.type === SORT_PRODUCTS) {
    const { filteredProducts, sort } = state;
    let tempProducts = [];

    switch (sort) {
      case "nameAtoZ": {
        tempProducts = filteredProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      }

      case "nameZtoA": {
        tempProducts = filteredProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        break;
      }

      case "priceLowest": {
        tempProducts = filteredProducts.sort((a, b) => a.price - b.price);
        break;
      }

      case "priceHighest": {
        tempProducts = filteredProducts.sort((a, b) => b.price - a.price);
        break;
      }

      default: {
        tempProducts = [...filteredProducts];
      }
    }

    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    const { text, company, category, color, price, shipping } = state.filters;
    let tempProducts = [...allProducts];

    // search
    if (text) {
      tempProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }

    // category
    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category.toLowerCase() === category;
      });
    }

    // company
    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company.toLowerCase() === company;
      });
    }

    // color
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    // price
    tempProducts = tempProducts.filter((product) => product.price <= price);

    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
