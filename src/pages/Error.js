import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops! It's A Dead End</h1>
        <Link className="btn-primary" to="/">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
