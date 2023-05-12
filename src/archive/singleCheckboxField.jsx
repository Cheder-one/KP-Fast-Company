import React from "react";
import PropTypes from "prop-types";

const SingleCheckboxField = ({
  name,
  label,
  value,
  checked,
  onChange,
  error
}) => {
  const handleChange = (e) => {
    typeof value === "boolean"
      ? onChange({
          target: {
            name,
            value: !value
          }
        })
      : onChange(e);
  };

  const getOptionId = () => `${label}_${value}`;

  const getInputClasses = () =>
    "form-check-input " + (error ? "is-invalid" : "");

  return (
    <div className="form-check mb-4">
      <input
        className={getInputClasses()}
        type="checkbox"
        id={getOptionId()}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={getOptionId()}>
        {label}
      </label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SingleCheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default SingleCheckboxField;
