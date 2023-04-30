import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, id, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return "form-control " + (error ? "is-invalid" : "is-valid");
  };
  return (
    <div className="mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        className={getInputClasses()}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text"
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextField;
