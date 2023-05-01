import React from "react";

const SearchBox = () => {
  return (
    <nav className="mx-1 mb-3">
      <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Search" />
      </form>
    </nav>
  );
};

export default SearchBox;
