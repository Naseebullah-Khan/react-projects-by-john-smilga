import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [data, setData] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (name && email) {
  //     setData([
  //       ...data,
  //       { id: new Date().getTime().toString(), name, email, age },
  //     ]);
  //     setName("");
  //     setEmail("");
  //     setAge("");
  //   }
  // };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setData((data) => {
      return [...data, { id: new Date().getTime().toString(), ...person }];
    });
    setPerson({ name: "", email: "", age: "" });
  };
  return (
    <article>
      {/* <form className="form" onSubmit={handleSubmit}> */}
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name : </label>
          <input
            value={person.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            value={person.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age : </label>
          <input
            max={100}
            min={1}
            value={person.age}
            onChange={handleChange}
            type="number"
            id="age"
            name="age"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add Person
        </button>
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
