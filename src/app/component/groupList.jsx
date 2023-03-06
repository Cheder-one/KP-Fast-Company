import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ profs, valueProperty, contentProperty }) => {
  return (
    <ul className="list-group">
      {Object.keys(profs).map((prof) => (
        <li key={profs[prof][valueProperty]} className="list-group-item">
          {profs[prof][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.propTypes = {
  profs: PropTypes.object.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired
};

export default GroupList;
