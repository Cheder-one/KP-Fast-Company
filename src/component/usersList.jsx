import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import API from "../api/index.api";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  const renderUsersTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Кол-во встреч</th>
            <th scope="col">Рейтинг</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user._id}
              user={user}
              onDeleteUser={() => handleDeleteUser(user._id)}
            />
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      {<SearchStatus users={users} />}
      {renderUsersTable()}
    </>
  );
};

export default Users;
