/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, lable, name: fieldName, value, onChange }) => {
  const getOptionId = (option) => `${option.name}_${option.value}`;

  return (
    <div className="mb-4">
      <p>
        <label>{lable}</label>
      </p>
      {options.map((option) => (
        <div key={option.value} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={fieldName}
            id={getOptionId(option)}
            value={option.value}
            onChange={onChange}
            checked={option.value === value}
          />
          <label className="form-check-label" htmlFor={getOptionId(option)}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

RadioField.propTypes = {
  options: PropTypes.array,
  lable: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default RadioField;