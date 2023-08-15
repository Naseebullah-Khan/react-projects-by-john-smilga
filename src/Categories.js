import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      <button
        onClick={() => {
          filterItems();
        }}
        className="filter-btn"
      >
        All
      </button>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              filterItems(category);
            }}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
