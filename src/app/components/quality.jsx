import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ user: { qualities } }) => {
  return (
    <>
      <td>
        {qualities.map((el) => (
          <span className={`badge bg-${el.color}`} key={el._id}>
            {el.name}
          </span>
        ))}
      </td>
    </>
  );
};

Qualities.propTypes = {
  user: PropTypes.object.isRequired
};

export default Qualities;
