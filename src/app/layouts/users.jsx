import React, { useEffect, useState } from "react";
import UsersList from "../components/containers/usersList";
import { useParams, useHistory, Switch, Route } from "react-router-dom";
import User from "./userCard";
import PropTypes from "prop-types";
import API from "../api/index.api";
import query from "query-string";

const Users = () => {
  const [userById, setUserById] = useState();
  const { userId } = useParams();
  const history = useHistory();
  const location = useHistory().location;

  useEffect(() => {
    API.users.getById(userId).then((user) => {
      if (user) {
        setUserById(user);
      } else {
        // history.push("/404");
      }
    });
  }, [userId]);

  const search = query.parse(location.search); // {}

  return (
    <>
      {userById ? (
        <Switch>
          <Route
            path="/users/:userId?"
            component={() => <User {...userById} userId={userId} />}
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
