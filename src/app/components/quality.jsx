import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ color, name }) => {
  return <span className={`badge bg-${color}`}>{name}</span>;
};

Qualities.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Qualities;
