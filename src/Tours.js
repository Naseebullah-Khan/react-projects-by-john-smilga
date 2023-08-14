import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { items, deleteTour, refreshTours } = props;
  if (items.length > 0) {
    return (
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        {items.map((item) => (
          <Tour
            deleteTour={deleteTour}
            key={item.id}
            id={item.id}
            name={item.name}
            info={item.info}
            image={item.image}
            price={item.price}
          />
        ))}
      </section>
    );
  } else {
    return (
      <section>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={() => refreshTours()} className="btn">
            refresh
          </button>
        </div>
      </section>
    );
  }
};

export default Tours;
