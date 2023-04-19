import React from "react";
import Qualities from "./quality";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qual) => (
        <Qualities key={qual._id} {...qual} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default QualitiesList;
