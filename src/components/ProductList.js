import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const {
    state: { filteredProducts },
  } = useFilterContext();
  return <GridView filteredProducts={filteredProducts} />;
};

export default ProductList;
