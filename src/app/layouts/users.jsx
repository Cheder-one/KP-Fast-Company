import React, { useEffect, useState } from "react";
import UsersList from "../components/containers/usersList";
import { useParams, Switch, Route } from "react-router-dom";
import User from "./user";
import PropTypes from "prop-types";
import API from "../api/index.api";

const Users = () => {
  const [userById, setUserById] = useState();
  const { userId } = useParams();

  useEffect(() => {
    API.users.getById(userId).then((user) => {
      setUserById(user);
    });
  }, [userId]);

  return (
    <>
      {userId ? (
        userById && (
          <Switch>
            <Route
              path="/users/:userId"
              component={() => <User {...userById} userId={userId} />}
            />
          </Switch>
        )
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
