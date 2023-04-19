import React from "react";
import { PropTypes } from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";

const UsersTable = ({
  usersCurntPage,
  onSort,
  selectedSort,
  onAddBookmark,
  ...rest
}) => {
  const colums = {
    name: { path: "name", name: "Имя" },
    quality: { name: "Качества" },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встречи" },
    rate: { path: "rate", name: "Рейтинг" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark
          onAddBookmark={() => onAddBookmark(user._id)}
          isBookmark={user.bookmark}
        />
      )
    },
    delete: { component: "Delete" }
  };

  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, colums }} />
      <TableBody {...{ colums, data: usersCurntPage, ...rest }} />
      {/* <tbody>
        {usersCurntPage.map((user) => (
          <User {...user} {...rest} key={user._id} />
        ))}
      </tbody> */}
    </table>
  );
};

UsersTable.propTypes = {
  usersCurntPage: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object,
  onAddBookmark: PropTypes.func.isRequired
};

export default UsersTable;
