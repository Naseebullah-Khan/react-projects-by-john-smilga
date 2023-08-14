import React from "react";

import "../../../index.css";

const ErrorExample = () => {
  let title = "Random Title";

  const changeTitleHandler = () => {
    title = "Title is changed";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={changeTitleHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
