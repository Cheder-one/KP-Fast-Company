import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  label,
  name: fName,
  value: fValue,
  onChange,
  defaultOptions,
  options,
  error
}) => {
  const getInputClasses = () => {
    return "form-select " + (error ? "is-invalid" : "is-valid");
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  return (
    <div className="mb-4">
      <label htmlFor={fName} className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={fName}
        name={fName}
        value={fValue}
        onChange={onChange}
      >
        <option disabled value="">
          {defaultOptions}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

SelectField.defaultProps = {
  defaultOptions: "Choose..."
};

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultOptions: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string
};

export default SelectField;
