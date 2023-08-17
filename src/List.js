import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list }) => {
  console.log(list);
  return (
    <>
      {list.map((grocery) => {
        return (
          <li key={grocery.id} className="grocery-item">
            <div className="title">{grocery.name}</div>
            <div>
              <FaEdit className="edit-btn" />
              <FaTrash className="delete-btn" />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
