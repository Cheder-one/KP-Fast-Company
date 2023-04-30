import React, { useState } from "react";
import PropTypes from "prop-types";
import { eyeFill, eyeSlash } from "../../assets/show-hide-pass-svg";

const TextField = ({ label, type, id, name, value, onChange, error }) => {
  const [showPass, setShowPass] = useState(false);

  const getInputClasses = () => {
    return "form-control " + (error ? "is-invalid" : "is-valid");
  };

  const toggleShowPass = () => {
    setShowPass((perv) => !perv);
  };

  return (
    <div className="mb-4">
      <label htmlFor={id}>{label}</label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          type={showPass ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={toggleShowPass}
          >
            {showPass ? eyeSlash : eyeFill}
          </button>
        )}
        <div className="invalid-feedback">{error}</div>
      </div>
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
