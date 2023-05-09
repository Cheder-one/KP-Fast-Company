import React from "react";
import PropTypes from "prop-types";

const SingleCheckboxField = ({ name, label, value, checked, onChange }) => {
  const getOptionId = () => `${label}_${value}`;
  const id = getOptionId();

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

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

SingleCheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default SingleCheckboxField;
