import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [height, setHeight] = useState(0);
  const [isToggle, setIsToggle] = useState(true);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="" />
          <button
            onClick={() => {
              setIsToggle(!isToggle);
              if (isToggle) {
                setHeight(200);
              } else {
                setHeight(0);
              }
            }}
            type="button"
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" style={{ height }}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
