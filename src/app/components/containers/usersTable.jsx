import React from "react";
import { PropTypes } from "prop-types";
// import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
import Bookmark from "../bookmark";
import QualitiesList from "../qualitiesList";
import TableShell from "./tableShell";

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
      component: (user) => <QualitiesList {...user} />
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
    // <TableShell>
    //   <TableHeader {...{ onSort, selectedSort, columns}} />
    //   <TableBody {...{ columns, data: usersCurntPage }} />
    // </TableShell>
    <TableShell {...{ onSort, selectedSort, columns, data: usersCurntPage }} />
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
