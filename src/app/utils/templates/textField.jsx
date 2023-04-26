import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, id, name, value, onChange }) => {
  return (
    <>
      <label htmlFor="email">{label}</label>
      <input
        className="form-control"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
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
  onChange: PropTypes.func
};

export default TextField;
