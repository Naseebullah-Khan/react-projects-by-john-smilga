import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {};
const defaultState = {
  people: data,
  isModalOn: false,
  modalContent: "",
};
const Index = () => {
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
    } else {
    }
  };

  return (
    <>
      {state.isModalOn && (
        <Modal isModalOn={state.isModalOn} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input value={name} type="text" onChange={handleName} />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.length > 0 &&
        state.people.map((person) => {
          const { id, name } = person;
          return (
            <article key={id}>
              <h4>{name}</h4>
            </article>
          );
        })}
    </>
  );
};

export default Index;
