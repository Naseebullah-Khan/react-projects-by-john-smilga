import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  // const context = useContext(AppContext);
  const { openModal, openSidebar, showSidebar } = useGlobalContext();

  return (
    <main>
      {!showSidebar && (
        <button onClick={openSidebar} className="sidebar-toggle" type="button">
          <FaBars />
        </button>
      )}
      <button onClick={openModal} className="btn" type="button">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
