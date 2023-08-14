import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [persons, setPersons] = useState(data);

  const clearPersonsHandler = () => {
    setPersons([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{persons.length} Birthdays Today</h3>
        <List people={persons} />
        <button onClick={clearPersonsHandler}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
