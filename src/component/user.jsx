import React from "react";
import Qualities from "./quality";
import Bookmark from "./bookmark";

const User = ({
  user,
  onDeleteUser,
  user: { profession, completedMeetings, rate },
}) => {
  return (
    <tr>
      <Qualities user={user} />
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td className="text-center">
        <Bookmark />
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
