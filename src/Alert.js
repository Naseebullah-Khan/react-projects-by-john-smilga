import React, { useEffect } from "react";

const Alert = ({ alert, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);
  return <section className={`alert alert-${alert.type}`}>{alert.msg}</section>;
};

export default Alert;
