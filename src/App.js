import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [grocery, setGrocery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editGrocery, setEditGrocery] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  const deleteItemHandler = (id) => {
    const newList = list.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setList(newList);
    setAlert({ show: true, msg: "Item Removed", type: "danger" });
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
        setAlert({ show: true, msg: "Please Enter Value", type: "danger" });
      } else {
        const items = list.map((item) => {
          if (item.id === editGrocery) {
            item.name = grocery;
          }
          return item;
        });
        setList(items);
        setGrocery("");
        setIsEditing(false);
        setAlert({ show: true, msg: "Value Changed", type: "success" });
      }
    } else if (!grocery) {
      setAlert({ show: true, msg: "Please Enter Value", type: "danger" });
    } else {
      const newGrocery = {
        id: new Date().getTime().toString(),
        name: grocery,
      };
      setList((list) => [...list, newGrocery]);
      setGrocery("");
      setAlert({ show: true, msg: "Item Added To The List", type: "success" });
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert["show"] && <Alert alert={alert} />}
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
              setAlert({
                show: true,
                msg: "Empty List",
                type: "danger",
              });
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
