import React, { useEffect, useState } from "react";
import UsersList from "../components/containers/usersList";
import { useParams, useHistory, Switch, Route } from "react-router-dom";
import User from "./user";
import PropTypes from "prop-types";
import API from "../api/index.api";
import Page404 from "./page404";

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
      {userById ? (
        <Switch>
          <Route
            path="/users/:userId?"
            component={() => <User {...userById} />}
          />
        </Switch>
      ) : (
        <Switch>
          <Route path="/users" component={UsersList} />
          <Route component={Page404} />
        </Switch>
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
