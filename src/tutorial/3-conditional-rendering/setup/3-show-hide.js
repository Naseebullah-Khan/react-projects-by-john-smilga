import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow((show) => {
            return !show;
          });
        }}
      >
        show/hide
      </button>
      {!show && <Item />}
    </>
  );
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const widthHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", widthHandler);

    return () => {
      window.removeEventListener("resize", widthHandler);
    };
  });
  return (
    <div>
      <h1>window</h1>
      <h2>size: {width}</h2>
    </div>
  );
};

export default ShowHide;
