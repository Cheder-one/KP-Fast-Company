import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ user: { name, qualities } }) => {
  return (
    <>
      <td>{name}</td>
      <td>
        {qualities.map((el) => (
          <span key={el._id} className={`badge bg-${el.color}`}>
            {el.name}
          </span>
        ))}
      </td>
    </>
  );
};

Qualities.propTypes = {
  // user: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   qualities: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       _id: PropTypes.string.isRequired,
  //       name: PropTypes.string.isRequired,
  //       color: PropTypes.string.isRequired
  //     })
  //   ).isRequired
  // }).isRequired
};

export default Qualities;
