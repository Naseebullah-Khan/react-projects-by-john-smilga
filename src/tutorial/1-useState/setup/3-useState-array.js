import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [persons, setPersons] = useState(data);

  const removeHandler = (id) => {
    setPersons((pervPersons) => {
      let newData = pervPersons.filter((person) => {
        if (person.id !== id) {
          return person;
        }
      });
      return newData;
    });
  };

  return (
    <React.Fragment>
      {persons.map((person) => {
        return (
          <li key={person.id} className="item">
            <h4>{person.name}</h4>
            <button type="button" onClick={() => removeHandler(person.id)}>
              remove
            </button>
          </li>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={() => {
          setPersons([]);
        }}
      >
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
