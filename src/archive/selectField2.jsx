import React from "react";
import PropTypes from "prop-types";

const SelectField2 = ({ label, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select className="form-select" id={name} onChange={onChange}>
        <option disabled value="">
          Choose...
        </option>
        <option value="">{value}</option>
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

SelectField2.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default SelectField2;
