import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField2 = ({
  label,
  name: fieldName,
  value: fieldValue,
  options,
  onChange
}) => {
  const handleChange = (event) => {
    const fakeEvent = {
      target: {
        name: fieldName,
        value: event
      }
    };
    return onChange(fakeEvent);
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        options={options}
        name={fieldName}
        value={fieldValue}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
        closeMenuOnSelect={false}
      />
    </div>
  );
};

MultiSelectField2.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.array,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default MultiSelectField2;
