import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [number, setNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let num = parseInt(number);
    //   // My Approach
    //   let paragraphs = [];
    //   if (num <= 1 || !num) {
    //     setText([data[0]]);
    //   } else {
    //     for (let index = 0; index < num; index++) {
    //       paragraphs.push(data[index]);
    //     }
    //     setText(paragraphs);
    //   }

    // Teacher's Approach
    if (number <= 0) {
      num = 1;
    } else if (number >= data.length) {
      num = data.length;
    }
    console.log(data.length);
    setText(data.slice(0, num));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          onChange={(event) => setNumber(event.target.value)}
          value={number}
          name="paragraphs"
          id="paragraphs"
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
