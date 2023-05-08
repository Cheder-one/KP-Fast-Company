import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({ options, name: fieldName, label, onChange }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((key) => {
          const option = options[key];
          return {
            value: option._id,
            label: option.name
          };
        })
      : options;

  const handleChange = (event) => {
    const fakeEvent = {
      target: {
        name: fieldName,
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
  onChange: PropTypes.func
};

export default MultiSelectField;
