import React, { useEffect } from "react";

const Alert = ({ info, alertType }) => {
  return (
    <section
      className={`alert alert-${
        alertType === "success" ? "success" : "danger"
      }`}
    >
      {info}
    </section>
  );
};

export default Alert;
