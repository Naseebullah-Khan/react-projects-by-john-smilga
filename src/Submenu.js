import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    showSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) setColumns("col-3");
    if (links.length > 3) setColumns("col-4");
  }, [location, links]);

  return (
    <aside ref={container} className={`submenu ${showSubmenu && "show"}`}>
      <h4>{page}</h4>
      {/*this is my solution */}
      {/* <div className={`submenu-center col-${links.length}`}> */}
      {/*this is teacher's solution */}
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
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
