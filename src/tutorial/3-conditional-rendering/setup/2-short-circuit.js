import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // const [text, setText] = useState("true");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  const [isError, setIsError] = useState(true);

  return (
    <>
      {/* {if(true){console.log(text)}} */}
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "John Doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError((isError) => {
            return !isError;
          });
        }}
      >
        toggle error
      </button>
      {/* {!isError && <h1>Error...</h1>} */}
      {!isError ? (
        <>
          <h1>Error...</h1>
          <p>There is an error</p>
        </>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
      {/* {text && <h1>hello, world!</h1>}
      {!text && <h1>hello, world!</h1>} */}
    </>
  );
};

export default ShortCircuit;
