import React, { useEffect, useState } from "react";
import UsersList from "../components/containers/usersList";
import { useParams, Switch, Route } from "react-router-dom";
import User from "./user";
// import query from "query-string";
import PropTypes from "prop-types";
import API from "../api/index.api";

const Users = ({ allUsers }) => {
  const { userId } = useParams();
  console.log(userId);

  const [users, setUsers] = useState();
  console.log(users);

  useEffect(() => {
    API.users.fetchAll().then((users) => {
      setUsers(users);
      <Users allUsers={users} />;
    });
  }, []);

  return (
    <>
      {userId ? (
        <Switch>
          <Route
            path="/users/67rdca3eeb7f6fgeed471817"
            component={() => <User userId={userId} />}
          />
        </Switch>
      ) : (
        <UsersList />
      )}
    </>
  );
};

export default Users;

Users.propTypes = {
  allUsers: PropTypes.array
};

// При клике на пользователя, открывается карточка пользователя. С путем users/:userId
// Если путь просто users, то выводим всех пользователей
// Если путь users/:userId?, то выводим пользователя с userId
