import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe" />
          <button type="button" className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button type="button" className="link-btn">
              Products
            </button>
          </li>
          <li>
            <button type="button" className="link-btn">
              Developers
            </button>
          </li>
          <li>
            <button type="button" className="link-btn">
              Company
            </button>
          </li>
        </ul>
        <button type="button" className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
