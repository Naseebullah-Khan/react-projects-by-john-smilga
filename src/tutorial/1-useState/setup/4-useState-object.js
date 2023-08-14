import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessageHandler = () => {
    if (person.message === "random message") {
      setPerson({ ...person, message: "hello, world!" });
    } else {
      setPerson({ ...person, message: "random message" });
    }
  };

  const { name, age, message } = person;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button type="button" className="btn" onClick={changeMessageHandler}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
