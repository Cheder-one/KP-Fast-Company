import React from "react";
import Qualities from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user, onDeleteUser }) => {
  return (
    <tr>
      <Qualities user={user} />
      <td className="text-center">{<Bookmark />}</td>
      <td>
        <button className="btn btn-outline-dark btn-sm" onClick={onDeleteUser}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
