import React, { useEffect } from "react";

const Alert = ({ alert }) => {
  return <section className={`alert alert-${alert.type}`}>{alert.msg}</section>;
};

export default Alert;
