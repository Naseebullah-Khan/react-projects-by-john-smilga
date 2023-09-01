import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  return (
    <div className="sidebar show-sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" type="button">
          <FaTimes />
        </button>
      </div>
      <div className="links">
        <ul>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
