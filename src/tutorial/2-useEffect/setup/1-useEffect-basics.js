import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (count > 0) {
      document.title = `New Messages(${count})`;
    }
  }, [count]);
  console.log("render component");
  const increaseCount = () => {
    setCount((pervCount) => {
      return pervCount + 1;
    });
  };
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={increaseCount}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
