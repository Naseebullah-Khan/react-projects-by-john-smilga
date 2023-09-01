import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <button className="sidebar-toggle" type="button">
        <FaBars />
      </button>
      <button className="btn" type="button">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
