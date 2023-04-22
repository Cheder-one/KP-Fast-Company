import React from "react";
import UsersList from "../containers/usersList";
import { useParams } from "react-router-dom";
// import query from "query-string";

const Users = () => {
  const queryParams = useParams();

  console.log(queryParams);

  return <UsersList />;
};

export default Users;

// При клике на пользователя, открывается карточка пользователя. С путем users/:userId
// Если путь просто users, то выводим всех пользователей
// Если путь users/:userId?, то выводим пользователя с userId
