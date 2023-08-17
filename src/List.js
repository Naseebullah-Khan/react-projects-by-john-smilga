import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, editItem, deleteItem }) => {
  return (
    <>
      {list.map((grocery) => {
        return (
          <li key={grocery.id} className="grocery-item">
            <div className="title">{grocery.name}</div>
            <div>
              <FaEdit
                className="edit-btn"
                onClick={() => editItem(grocery.id)}
              />
              <FaTrash
                className="delete-btn"
                onClick={() => deleteItem(grocery.id)}
              />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
