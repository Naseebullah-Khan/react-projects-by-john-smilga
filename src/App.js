import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [grocery, setGrocery] = useState("");
  const [list, setList] = useState([
    { id: 1, name: "egg" },
    { id: 2, name: "milk" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGrocery = {
      id: list.length + 1,
      name: grocery,
    };
    setList((list) => [...list, newGrocery]);
    setGrocery("");
  };

  return (
    <>
      <div className="section-center">
        <form onSubmit={handleSubmit} className="grocery-form">
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              className="grocery"
              value={grocery}
              type="text"
              placeholder="e.g. eggs"
              onChange={(event) => setGrocery(event.target.value)}
            />
            <button className="submit-btn" type="submit">
              submit
            </button>
          </div>
        </form>
        {list.length !== 0 && (
          <div className="grocery-container">
            <List list={list} />
            <button
              onClick={() => setList([])}
              type="button"
              className="clear-btn"
            >
              clear items
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
