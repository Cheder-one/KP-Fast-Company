import React from "react";
import PropTypes from "prop-types";

const RadioField = ({
  options,
  label,
  name: fName,
  value: fValue,
  onChange
}) => {
  const getOptionId = (option) => `${option.name}_${option.value}`;

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div key={option.value} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={fName}
              id={getOptionId(option)}
              value={option.value}
              onChange={onChange}
              checked={option.value === fValue}
            />
            <label className="form-check-label" htmlFor={getOptionId(option)}>
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

RadioField.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default RadioField;
