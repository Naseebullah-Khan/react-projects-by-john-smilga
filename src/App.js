import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [grocery, setGrocery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editGrocery, setEditGrocery] = useState(null);
  const [list, setList] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, msg, type });
  };

  const deleteItemHandler = (id) => {
    const newList = list.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setList(newList);
    showAlert(true, "danger", "Item Removed");
  };

  const editItemHandler = (id) => {
    const edit = list.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setGrocery(edit.name);
    setEditGrocery(edit.id);
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      if (!grocery) {
        showAlert(true, "danger", "Please Enter Value");
      } else {
        const items = list.map((item) => {
          if (item.id === editGrocery) {
            return { ...item, name: grocery };
          }
          return item;
        });
        setList(items);
        setGrocery("");
        setIsEditing(false);
        showAlert(true, "success", "Value Changed");
        setEditGrocery(null);
      }
    } else if (!grocery) {
      showAlert(true, "danger", "Please Enter Value");
    } else {
      const newGrocery = {
        id: new Date().getTime().toString(),
        name: grocery,
      };
      setList((list) => [...list, newGrocery]);
      setGrocery("");
      showAlert(true, "success", "Item Added To The List");
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert["show"] && (
          <Alert alert={alert} list={list} removeAlert={showAlert} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            value={grocery}
            type="text"
            placeholder="e.g. eggs"
            onChange={(event) => setGrocery(event.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
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
              showAlert(true, "danger", "Empty List");
            }}
            type="button"
            className="clear-btn"
          >
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
