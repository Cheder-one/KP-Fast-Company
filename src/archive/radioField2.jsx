import React from "react";
import PropTypes from "prop-types";

const RadioField2 = ({ options, label, name, value, onChange, error }) => {
  const getOptionId = (option) => `${option.label}_${option.value}`;

  const getInputClasses = () => {
    return "form-check form-check-inline " + (error ? " is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <p>
        <label>{label}</label>
      </p>
      {options.map((option) => (
        <div key={option.value} className={getInputClasses()}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={getOptionId(option)}
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor={getOptionId(option)}>
            {option.label}
          </label>
        </div>
      ))}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

RadioField2.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
};

export default RadioField2;
