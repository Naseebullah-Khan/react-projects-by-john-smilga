import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { error, setQuery, query } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>search movies</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="form-input"
      />
      {error.show && <p className="error">{error.msg}</p>}
    </form>
  );
};

export default SearchForm;
