import React from "react";
import User from "./user";
import { PropTypes } from "prop-types";

const UsersTable = ({ usersCurntPage, onSort, ...rest }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("name")} scope="col">
            Имя
          </th>
          <th scope="col">Качества</th>
          <th onClick={() => onSort("profession.name")} scope="col">
            Профессия
          </th>
          <th onClick={() => onSort("completedMeetings")} scope="col">
            Встречи
          </th>
          <th onClick={() => onSort("rate")} scope="col">
            Рейтинг
          </th>
          <th onClick={() => onSort("bookmark")} scope="col">
            Избранное
          </th>
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
  usersCurntPage: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired
};

export default UsersTable;
