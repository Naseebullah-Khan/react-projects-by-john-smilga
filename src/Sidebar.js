import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${showSidebar && "show"}`}>
      <div className="sidebar">
        <button onClick={closeSidebar} className="close-btn" type="button">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink, index) => {
            const { page, links } = sublink;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
