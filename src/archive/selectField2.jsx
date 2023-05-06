import React from "react";
import PropTypes from "prop-types";

const SelectField2 = ({
  label,
  name: fieldName,
  value,
  onChange,
  options,
  error,
  defaultOption
}) => {
  const getClassName = () => {
    return "form-select " + (error ? "is-invalid" : "is-valid");
  };

  return (
    <div className="mb-4">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <select
        className={getClassName()}
        id={fieldName}
        name={fieldName}
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
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
