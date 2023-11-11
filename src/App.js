import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("value");

  const valueHandler = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              data-label="name"
              onMouseOver={valueHandler}
              className="icon"
            >
              <FaUser />
            </button>
            <button
              data-label="email"
              onMouseOver={valueHandler}
              className="icon"
            >
              <FaEnvelopeOpen />
            </button>
            <button
              data-label="age"
              onMouseOver={valueHandler}
              className="icon"
            >
              <FaCalendarTimes />
            </button>
            <button
              data-label="street"
              onMouseOver={valueHandler}
              className="icon"
            >
              <FaMap />
            </button>
            <button
              data-label="phone number"
              onMouseOver={valueHandler}
              className="icon"
            >
              <FaPhone />
            </button>
            <button
              data-label="password"
              onMouseOver={valueHandler}
              className="icon"
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button">
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
