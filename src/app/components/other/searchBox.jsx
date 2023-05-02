import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBox = ({ onSearch }) => {
  const [fieldVal, setFieldVal] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setFieldVal(value.trim());
    onSearch(value);
  };

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
          value={fieldVal}
          onChange={handleChange}
        />
      </form>
    </nav>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func
};

export default SearchBox;
