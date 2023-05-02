import React, { useEffect, useState } from "react";

const SearchBox = () => {
  const [fieldVal, setFieldVal] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setFieldVal(value);
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

export default SearchBox;
