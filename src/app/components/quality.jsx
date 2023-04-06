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
  user: PropTypes.shape({
    qualities: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Qualities;
