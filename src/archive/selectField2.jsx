import React from "react";
import PropTypes from "prop-types";

const SelectField2 = ({
  label,
  name,
  value,
  onChange,
  defaultOption,
  options,
  error
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        id={name}
        onChange={onChange}
        value={value}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {options.map((option) => (
          <option key={option.value} value={value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

SelectField2.defaultProps = {
  defaultOption: "Choose..."
};

SelectField2.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string
};

export default SelectField2;
