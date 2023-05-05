import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  lable,
  value,
  onChange,
  defaultOptions,
  options,
  error
}) => {
  const getInputClasses = () => {
    return "form-select " + (error ? "is-invalid" : "is-valid");
  };

  return (
    <div className="mb-4">
      <label htmlFor="profFormSelect" className="form-label">
        {lable}
      </label>
      <select
        className={getInputClasses()}
        id="profFormSelect"
        name="profSelect"
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {defaultOptions}
        </option>
        {options &&
          (Array.isArray(options)
            ? options.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.name}
                </option>
              ))
            : Object.keys(options).map((optionName) => {
                const optionInfo = options[optionName];
                return (
                  <option key={optionInfo._id} value={optionInfo._id}>
                    {optionInfo.name}
                  </option>
                );
              }))}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

SelectField.defaultProps = {
  defaultOptions: "Choose..."
};

SelectField.propTypes = {
  lable: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultOptions: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string
};

export default SelectField;
