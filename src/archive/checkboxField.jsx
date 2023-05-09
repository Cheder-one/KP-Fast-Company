import React from "react";
import PropTypes from "prop-types";
import SingleCheckboxField from "./singleCheckboxField";

const CheckboxField = ({ options, name, value, onChange, error }) => {
  const handleChange = (e) => {
    const { name, value: eventVal } = e.target;
    const newValue = value.includes(eventVal)
      ? value.filter((val) => val !== eventVal)
      : [...value, eventVal];

    onChange({
      target: {
        name,
        value: newValue
      }
    });
  };

  const getIsChecked = (inputVal) => value.includes(inputVal);

  const getInputClasses = () => "" + (error ? " is-invalid" : "");

  return (
    <div className="mb-4">
      <p className={getInputClasses()}></p>
      {options.map((option) => {
        return (
          <SingleCheckboxField
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            checked={getIsChecked(option.value)}
            onChange={handleChange}
          />
        );
      })}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.string
};

export default CheckboxField;
