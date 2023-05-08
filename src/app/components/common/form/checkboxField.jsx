import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({ name: fName, value: fValue, onChange, children }) => {
  const handleChange = () => {
    onChange({
      target: {
        name: fName,
        value: !fValue
      }
    });
  };

  return (
    <div className="mb-4">
      <div className="form-check">
        <input
          className="form-check-input"
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
  ])
};

export default CheckboxField;
