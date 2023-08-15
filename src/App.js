import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {data.map((question) => {
            return <SingleQuestion key={question.id} question={question} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
