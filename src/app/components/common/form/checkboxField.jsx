import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({
  name: fName,
  value: fValue,
  onChange,
  children,
  error
}) => {
  const handleChange = () => {
    onChange({
      target: {
        name: fName,
        value: !fValue
      }
    });
  };

  const getInputClasses = () => {
    return "form-check-input " + (error ? "is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <div className="form-check has-validation">
        <input
          className={getInputClasses()}
          type="checkbox"
          value=""
          id={fName}
          checked={fValue}
          onChange={handleChange}
        />
        <label
          className="form-check-label"
          htmlFor={fName}
          style={{ fontSize: "14px" }}
        >
          {children}
        </label>
        <div className="invalid-feedback">{error}</div>
      </div>
    </div>
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  error: PropTypes.string
};

export default CheckboxField;
