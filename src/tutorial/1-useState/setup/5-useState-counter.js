import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const decreaseCounterHandler = () => {
    setCounter(counter - 1);
  };

  const resetCounterHandler = () => {
    setCounter(0);
  };

  const increaseCounterHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseCounterLaterHandler = () => {
    setTimeout(() => {
      setCounter((pervCounter) => pervCounter - 1);
    }, 2000);
  };

  const resetCounterLaterHandler = () => {
    setTimeout(() => {
      setCounter((pervCounter) => (pervCounter = 0));
    }, 2000);
  };

  const increaseCounterLaterHandler = () => {
    setTimeout(() => {
      setCounter((pervCounter) => pervCounter + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>;<h1>{counter}</h1>
        <button onClick={decreaseCounterHandler} type="button" className="btn">
          decrease
        </button>
        <button onClick={resetCounterHandler} type="button" className="btn">
          reset
        </button>
        <button onClick={increaseCounterHandler} type="button" className="btn">
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{counter}</h1>
        <button
          onClick={decreaseCounterLaterHandler}
          type="button"
          className="btn"
        >
          decrease later
        </button>
        <button
          onClick={resetCounterLaterHandler}
          type="button"
          className="btn"
        >
          reset later
        </button>
        <button
          onClick={increaseCounterLaterHandler}
          type="button"
          className="btn"
        >
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
