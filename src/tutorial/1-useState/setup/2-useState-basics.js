import React, { useState } from "react";
// use
// component name must be uppercase
// must be in the function/component body
// can not call conditionally

const UseStateBasics = () => {
  // console.log(useState("random text"));
  // const title = useState("random text")[0];
  // const setTitle = useState("random text")[1];
  // console.log(title, setTitle);

  const [title, setTitle] = useState("Random Title");
  // const [isChanged, setIsChanged] = useState("false");

  const changeTitleHandler = () => {
    // if (isChanged !== true) {
    //   setTitle("Hello, World!");
    //   setIsChanged(true);
    // } else {
    //   setTitle("Random Title");
    //   setIsChanged(false);
    // }
    if (title === "random title") {
      setTitle("hello, world!");
    } else {
      setTitle("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>;
      <button type="button" className="btn" onClick={changeTitleHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
