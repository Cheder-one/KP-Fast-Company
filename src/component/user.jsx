import React from "react";
import Qualities from "./quality";
import Bookmark from "./bookmark";

const User = (props) => {
  const {
    user,
    onDeleteUser,
    onAddBookmark,
    user: { profession, completedMeetings, rate },
  } = props;

  return (
    <tr>
      <Qualities user={user} />
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td className="text-center">
        <Bookmark user={user} onAddBookmark={onAddBookmark} />
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

export default User;
