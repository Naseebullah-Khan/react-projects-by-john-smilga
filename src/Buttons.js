import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, dispatch, loading, HANDLE_PAGE } = useGlobalContext();
  return (
    <section className="btn-container">
      <button
        disabled={loading}
        type="button"
        onClick={() => dispatch({ type: HANDLE_PAGE, payload: "decrease" })}
      >
        perv
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={loading}
        type="button"
        onClick={() => dispatch({ type: HANDLE_PAGE, payload: "increase" })}
      >
        next
      </button>
    </section>
  );
};

export default Buttons;
