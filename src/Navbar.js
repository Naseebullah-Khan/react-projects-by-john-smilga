import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { links } = useGlobalContext();
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
          {links.map((link, index) => {
            const { page, links } = link;
            return (
              <li key={index}>
                <button className="link-btn" type="button">
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
