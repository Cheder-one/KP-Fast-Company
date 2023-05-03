import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ onSearchChange, searchQuery }) => {
  return (
    <nav className="mx-1 mb-3">
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control"
          placeholder="Search"
          type="search"
          value={searchQuery}
          onChange={onSearchChange}
        />
      </form>
    </nav>
  );
};

SearchBox.propTypes = {
  onSearchChange: PropTypes.func,
  searchQuery: PropTypes.string
};

export default SearchBox;
