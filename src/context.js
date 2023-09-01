import React, { useState, useContext } from "react";
const [showModal, setShowModal] = useState(false);
const [showSidebar, setShowSidebar] = useState(false);
export const MyContext = React.createContext({
  showModal,
  setShowModal,
  showSidebar,
  setShowSidebar,
});
s;
