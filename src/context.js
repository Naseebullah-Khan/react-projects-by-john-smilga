import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSubmenu = (i, coordinates) => {
    setLocation(coordinates);
    const page = sublinks.find((link, index) => index === i);
    setPage(page);
    setShowSubmenu(true);
  };

  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  return (
    <Context.Provider
      value={{
        sublinks,
        showSidebar,
        openSidebar,
        closeSidebar,
        showSubmenu,
        openSubmenu,
        closeSubmenu,
        location,
        page,
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
