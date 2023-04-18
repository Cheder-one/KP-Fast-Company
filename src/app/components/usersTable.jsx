import React from "react";
import User from "./user";
import { PropTypes } from "prop-types";
import TableHeader from "./tableHeader";

const UsersTable = ({ usersCurntPage, onSort, selectedSort, ...rest }) => {
  const colums = {
    name: { iter: "name", name: "Имя" },
    quality: { name: "Качества" },
    professions: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встречи" },
    rate: { iter: "rate", name: "Рейтинг" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {}
  };

  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, colums }} />
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
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object
};

export default UsersTable;
