import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      setData([...data, { id: new Date().getTime().toString(), name, email }]);
      setName("");
      setEmail("");
    }
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name : </label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      {data.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <p>{person.email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
