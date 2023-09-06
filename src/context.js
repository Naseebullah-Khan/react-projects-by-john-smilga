import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSubmenu = (index) => {
    setMenuIndex(index);
    setShowSubmenu(true);
  };

  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  return (
    <Context.Provider
      value={{
        sublinks,
        menuIndex,
        showSidebar,
        openSidebar,
        closeSidebar,
        showSubmenu,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(Context);
};

export { ContextProvider, useGlobalContext };
