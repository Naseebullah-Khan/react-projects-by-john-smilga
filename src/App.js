import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alertType, setAlertType] = useState("");
  const [errorInfo, setErrorInfo] = useState("");
  const [btnName, setBtnName] = useState("submit");
  const [grocery, setGrocery] = useState("");
  const [list, setList] = useState([]);

  const deleteItemHandler = (id) => {
    const newList = list.filter((item) => {
      if (item.id !== parseInt(id)) {
        return item;
      }
    });
    setList(newList);
    setErrorInfo("Item Removed");
    setAlertType("");
  };

  const editItemHandler = (id) => {
    const edit = list.find((item) => {
      if (item.id === parseInt(id)) {
        return item;
      }
    });
    setGrocery(edit.name);
    setBtnName("edit");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.innerHTML === "edit") {
      console.log("edit");
      setErrorInfo("Value Changed");
      setAlertType("success");
    } else if (!grocery) {
      setErrorInfo("Please Enter Value");
    } else {
      const newGrocery = {
        id: list.length + 1,
        name: grocery,
      };
      setList((list) => [...list, newGrocery]);
      setGrocery("");
      setErrorInfo("Item Added To The List");
      setAlertType("success");
    }
  };

  return (
    <>
      <div className="section-center">
        {errorInfo && <Alert info={errorInfo} alertType={alertType} />}
        <form className="grocery-form">
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              className="grocery"
              value={grocery}
              type="text"
              placeholder="e.g. eggs"
              onChange={(event) => setGrocery(event.target.value)}
            />
            <button onClick={handleSubmit} className="submit-btn" type="submit">
              {btnName}
            </button>
          </div>
        </form>
        {list.length !== 0 && (
          <div className="grocery-container">
            <List
              deleteItem={deleteItemHandler}
              editItem={editItemHandler}
              list={list}
            />
            <button
              onClick={() => {
                setList([]);
                setErrorInfo("Empty List");
                setAlertType("");
              }}
              type="button"
              className="clear-btn"
            >
              clear items
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
