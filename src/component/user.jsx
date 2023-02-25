import React, { useState } from "react";
import Qualities from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user, onDeleteUser }) => {
  return (
    <tr>
      <td>{<Bookmark />}</td>
      <td>
        <button className="btn btn-danger" onClick={onDeleteUser}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
