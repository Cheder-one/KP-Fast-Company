import { PropTypes } from "prop-types";
import React from "react";

const Spinner = ({ text }) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border mb-3 mt-3 mx-auto d-block"
        role="status"
        style={{ height: "3rem", width: "3rem" }}
      ></div>
    </div>
  );
};

Spinner.defaultProps = {
  text: "Loading..."
};

Spinner.propTypes = {
  text: PropTypes.string
};

export default Spinner;
