import React from "react";

const SelectField = () => {
  return (
    <div className="col-md-3">
      <label htmlFor="selectionForm02" className="form-label">
        State
      </label>
      <select className="form-select" id="selectionForm02" required>
        <option selected disabled value="">
          Choose...
        </option>
        <option>...</option>
      </select>
      <div className="invalid-feedback">Please select a valid state.</div>
    </div>
  );
};

export default SelectField;
