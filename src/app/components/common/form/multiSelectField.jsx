import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({ options, onChange }) => {
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

  return (
    <Select
      isMulti
      options={optionsArray}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
    />
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func
};

export default MultiSelectField;
