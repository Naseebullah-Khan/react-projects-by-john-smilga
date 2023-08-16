import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [tintsShades, setTintsShades] = useState(10);
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(tintsShades));
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(tintsShades);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            onChange={(event) => setColor(event.target.value)}
            value={color}
            placeholder="#f15025"
          />
          <input
            style={{ marginLeft: "0.4rem" }}
            min={1}
            max={100}
            type="number"
            value={tintsShades}
            placeholder="e.g. 10"
            onChange={(event) => setTintsShades(parseInt(event.target.value))}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} />;
        })}
      </section>
    </>
  );
}

export default App;
