import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({
  label,
  name: fName,
  defaultValue,
  options,
  onChange
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  const handleChange = (event) => {
    const fakeEvent = {
      target: {
        name: fName,
        value: event
      }
    };
    onChange(fakeEvent);
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
      />
    </div>
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.array
};

export default MultiSelectField;
