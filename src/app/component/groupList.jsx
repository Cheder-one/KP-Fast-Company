import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ profs }) => {
  return (
    <ul className="list-group">
      {Object.keys(profs).map((prof) => (
        <li key={profs[prof]._id} className="list-group-item">
          {profs[prof].name}
        </li>
      ))}
    </ul>
  );
};

GroupList.propTypes = {
  profs: PropTypes.object.isRequired
};

export default GroupList;
