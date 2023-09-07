import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { sublinks, openSidebar, openSubmenu, closeSubmenu } =
    useGlobalContext();

  const handleSubmenu = (event) => {
    if (!event.target.classList.contains("link-btn")) closeSubmenu();
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="Stripe" />
          <button
            onClick={openSidebar}
            type="button"
            className="btn toggle-btn"
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((menu, index) => {
            const { page } = menu;
            return (
              <li key={index}>
                <button
                  onMouseOver={(event) => {
                    const button = event.target.getBoundingClientRect();
                    const center = (button.left + button.right) / 2;
                    const bottom = button.bottom - 3;
                    openSubmenu(index, { center, bottom });
                  }}
                  className="link-btn"
                  type="button"
                >
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
