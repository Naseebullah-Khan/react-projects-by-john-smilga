import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        // style={({ isActive }) => {
        //   return { color: isActive ? "blueviolet" : "grey" };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        // style={({ isActive }) => {
        //   return { color: isActive ? "blueviolet" : "grey" };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        // style={({ isActive }) => {
        //   return { color: isActive ? "blueviolet" : "grey" };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        // style={({ isActive }) => {
        //   return { color: isActive ? "blueviolet" : "grey" };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
