import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const Context = createContext("");

const ContextProvider = ({ children }) => {
  const [links] = useState(sublinks);
  return <Context.Provider value={{ links }}>{children}</Context.Provider>;
};

const useGlobalContext = () => {
  return useContext(Context);
};

export { Context, ContextProvider, useGlobalContext };
