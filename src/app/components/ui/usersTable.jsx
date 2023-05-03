import React from "react";
import { PropTypes } from "prop-types";
import Bookmark from "../common/bookmark.jsx";
import Qualities from "./qualities";
import TableShell from "../common/table";

const UsersTable = ({
  usersCurntPage,
  onSort,
  selectedSort,
  onAddBookmark,
  onDeleteUser
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    quality: {
      name: "Качества",
      component: (user) => <Qualities {...user} />
    },
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
    delete: {
      component: (user) => (
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => onDeleteUser(user._id)}
        >
          Delete
        </button>
      )
    }
  };

  return (
    <TableShell
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={usersCurntPage}
    />
    // <TableShell>
    //   <TableHeader {...{ onSort, selectedSort, columns}} />
    //   <TableBody {...{ columns, data: usersCurntPage }} />
    // </TableShell>
  );
};

UsersTable.propTypes = {
  usersCurntPage: PropTypes.array.isRequired,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  onAddBookmark: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired
};

export default UsersTable;
