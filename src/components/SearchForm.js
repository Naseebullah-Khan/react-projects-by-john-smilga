import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">search your favorite cocktail</label>
          <input
            id="search"
            ref={searchValue}
            onChange={() => setSearchTerm(searchValue.current.value)}
            type="text"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
