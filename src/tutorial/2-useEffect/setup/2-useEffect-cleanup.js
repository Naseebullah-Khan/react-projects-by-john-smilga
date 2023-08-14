import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkWidth);
    // return () => {
    //   window.removeEventListener("resize", checkWidth);
    //   console.log("cleanup");
    // };
  }, []);

  console.log("render");
  return (
    <>
      <h1>window</h1>;<h2>{width} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
