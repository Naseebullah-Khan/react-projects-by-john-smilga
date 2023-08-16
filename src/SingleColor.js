import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const rgb = color.rgb.join(",");

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${color.hex}`);
      }}
      key={color.key}
      style={{
        backgroundColor: `rgb(${rgb})`,
      }}
      className={`color ${color.type === "shade" && "color-light"}`}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{rgbToHex(...color.rgb)}</p>
      {alert && <p className="alert">copied to the clipboard</p>}
    </article>
  );
};

export default SingleColor;
