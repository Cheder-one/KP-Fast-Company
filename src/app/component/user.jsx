import React from "react";
import Qualities from "./quality";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDeleteUser, onAddBookmark }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <Qualities user={user} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td className="text-center">
        <Bookmark
          onAddBookmark={() => onAddBookmark(user._id)}
          isBookmark={user.bookmark}
        />
      </td>
      <td>
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => onDeleteUser(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired
  }).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onAddBookmark: PropTypes.func.isRequired
};

export default User;
