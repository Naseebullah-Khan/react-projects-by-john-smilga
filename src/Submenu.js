import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { showSubmenu, sublinks, menuIndex } = useGlobalContext();
  return (
    <aside className={`submenu ${showSubmenu && "show"}`}>
      <div className="submenu-center">
        <h4>{showSubmenu && sublinks[menuIndex]["page"]}</h4>
        {showSubmenu &&
          sublinks[menuIndex]["links"].map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
      </div>
    </aside>
  );
};

export default Submenu;
