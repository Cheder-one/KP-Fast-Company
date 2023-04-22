import React from "react";
import PropTypes from "prop-types";

const User = ({ userId }) => {
  return (
    <>
      <div className="column">
        <p>{`Имя`}</p>
        <p>{`Профессия`}</p>
        <p>{`Качества`}</p>
        <p>{`Встречи`}</p>
        <p>{`Рейтинг`}</p>
        <p>{`ID ${userId}`}</p>
        <button className="btn btn-outline-primary">Все пользователи</button>
      </div>
    </>
  );
};

User.propTypes = {
  userId: PropTypes.string.isRequired
};

export default User;
