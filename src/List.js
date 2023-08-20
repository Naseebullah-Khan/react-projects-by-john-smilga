import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, editItem, deleteItem }) => {
  return (
    <div>
      {list.map((grocery) => {
        return (
          <article key={grocery.id} className="grocery-item">
            <p className="title">{grocery.name}</p>
            <div>
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(grocery.id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteItem(grocery.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
