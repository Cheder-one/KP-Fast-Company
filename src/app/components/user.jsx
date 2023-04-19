import React from "react";
import PropTypes from "prop-types";
import Qualities from "./quality";
import Bookmark from "./features/bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onDeleteUser,
  onAddBookmark
}) => {
  return (
    <tr>
      <td>{name}</td>
      <Qualities userQuals={qualities} />
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td className="text-center">
        <Bookmark
          onAddBookmark={() => onAddBookmark(_id)}
          isBookmark={bookmark}
        />
      </td>
      <td>
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => onDeleteUser(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool,
  onDeleteUser: PropTypes.func.isRequired,
  onAddBookmark: PropTypes.func.isRequired
};

export default User;
