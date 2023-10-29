import React from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = ({ navbar }) => {
  return (
    <>
      {navbar}
      <Outlet />
    </>
  );
};

export default SharedLayout;
