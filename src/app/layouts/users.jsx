import React from "react";
import UsersList from "../components/containers/usersList";
import { useParams, Switch, Route } from "react-router-dom";
import User from "./user";
// import query from "query-string";

const Users = () => {
  const { userId } = useParams();
  console.log(userId);

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

// При клике на пользователя, открывается карточка пользователя. С путем users/:userId
// Если путь просто users, то выводим всех пользователей
// Если путь users/:userId?, то выводим пользователя с userId
