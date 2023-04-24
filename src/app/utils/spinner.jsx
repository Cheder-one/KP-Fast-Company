import { PropTypes } from "prop-types";
import React from "react";

const Spinner = ({ text }) => {
  return (
    <div className="ms-2">
      <div
        className="spinner-border spinner-border-sm text-primary"
        role="status"
      ></div>
      <span className="visually ms-2">{text}</span>
    </div>
  );
};

Spinner.propTypes = {
  text: PropTypes.string
};

export default Spinner;
