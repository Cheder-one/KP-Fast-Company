import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  lable,
  name,
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
      <label htmlFor="selectionForm01" className="form-label">
        {lable}
      </label>
      <select
        className={getInputClasses()}
        id="selectionForm01"
        name={name}
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
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultOptions: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string
};

export default SelectField;
