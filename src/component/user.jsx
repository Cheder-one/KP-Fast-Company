import React, { useState } from "react";
import Qualities from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user, onDeleteUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((el) => (
          <span className={`badge bg-${el.color}`} key={el._id}>
            {el.name}
          </span>
        ))}
      </td>
      <td key={user.profession._id}>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <button className="btn btn-danger" onClick={onDeleteUser}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
