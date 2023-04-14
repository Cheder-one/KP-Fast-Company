import React from "react";
import User from "./user";
import { PropTypes } from "prop-types";

const UsersTable = ({ usersCurntPage, ...rest }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встречи</th>
          <th scope="col">Рейтинг</th>
          <th scope="col">Избранное</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {usersCurntPage.map((user) => (
          <User {...user} {...rest} key={user._id} />
        ))}
      </tbody>
    </table>
  );
};

UsersTable.propTypes = {
  usersCurntPage: PropTypes.array.isRequired
};

export default UsersTable;
