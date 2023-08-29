import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import reducer from "./reducer";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      dispatch({ type: "NO_VALUE" });
    } else if ((name, isEditing)) {
      const editPeople = state.people.map((person) => {
        if (person.id === editId) {
          return { ...person, name };
        }
        return person;
      });
      setEditId(null);
      setIsEditing(false);
      setName("");
      dispatch({ type: "EDIT_PERSON", payload: editPeople });
    } else {
      dispatch({
        type: "ADD_PERSON",
        payload: { id: new Date().getTime().toString(), name },
      });
      setName("");
    }
  };

  const editPerson = (id) => {
    setIsEditing(true);
    setEditId(id);
  };

  const removePerson = (id) => {
    const newPeople = state.people.filter((person) => person.id !== id);
    dispatch({ type: "REMOVE_PERSON", payload: newPeople });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOn && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input value={name} type="text" onChange={handleName} />
        </div>
        <button type="submit">{isEditing ? "edit" : "add"}</button>
      </form>
      {state.people.length > 0 &&
        state.people.map((person) => {
          const { id, name } = person;
          return (
            <article className="item" key={id}>
              <h4>{name}</h4>
              <div>
                <button
                  style={{ marginRight: "15px" }}
                  onClick={() => {
                    editPerson(id);
                    setName(name);
                  }}
                  type="button"
                >
                  Edit
                </button>
                <button onClick={() => removePerson(id)} type="button">
                  Remove
                </button>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default Index;
