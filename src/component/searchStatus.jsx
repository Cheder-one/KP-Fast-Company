import React, { useState } from "react";

const SearchStatus = ({ users }) => {
  const numberOfUsers = users.length;

  const calcNumberUsers = () => {
    return numberOfUsers
      ? `${numberOfUsers} Человек готовы встретиться с тобой`
      : "Список встреч пуст";
  };

  const renderBadge = () => {
    const badgeClass = numberOfUsers > 0 ? "primary" : "danger";
    const badgeText = calcNumberUsers();
    return (
      <h5>
        <span className={`badge bg-${badgeClass}`}>{badgeText}</span>
      </h5>
    );
  };

  return renderBadge();
};

export default SearchStatus;
