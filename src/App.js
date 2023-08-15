import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState([
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ]);

  const filterItems = (category) => {
    if (!category) {
      setItems(data);
    } else {
      const newData = data.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
      setItems(newData);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={items} />
      </section>
    </main>
  );
}

export default App;
