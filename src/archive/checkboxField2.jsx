import React from "react";
import PropTypes from "prop-types";

const CheckboxField2 = ({
  options,
  name: fName,
  value: fValue,
  onChange,
  error
}) => {
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const newValue = fValue.includes(inputValue)
      ? fValue.filter((v) => v !== inputValue)
      : [...fValue, inputValue];

    const fakeEvent = {
      target: {
        name: fName,
        value: newValue
      }
    };

    onChange(fakeEvent);
  };

  const getOptionId = (option) => {
    return `${option.name}_${option.value}`;
  };

  const getIsChecked = (inputVal) => {
    return fValue.includes(inputVal);
  };

  return (
    <div className="mb-4">
      {options.map((option) => (
        <div key={option.value} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={getOptionId(option)}
            name={fName}
            value={option.value}
            checked={getIsChecked(option.value)}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor={getOptionId(option)}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

CheckboxField2.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CheckboxField2;
