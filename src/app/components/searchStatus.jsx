import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ numberOfUsers }) => {
  const calcNumberUsers = () => {
    if (numberOfUsers === 1) {
      return `${numberOfUsers} пользователь доступен для встречи`;
    } else if (numberOfUsers > 1) {
      return `${numberOfUsers} пользователей доступно для встречи`;
    } else {
      return "Список встреч пуст";
    }
  };

  const renderBadge = () => {
    const badgeClass = numberOfUsers > 0 ? "primary" : "danger";
    const badgeText = calcNumberUsers();
    return (
      <h4>
        <span className={`badge bg-${badgeClass} m-1`}>{badgeText}</span>
      </h4>
    );
  };

  return renderBadge();
};

SearchStatus.propTypes = {
  numberOfUsers: PropTypes.number
};

export default SearchStatus;
