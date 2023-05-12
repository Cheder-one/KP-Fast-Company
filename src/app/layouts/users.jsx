import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";

const Users = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <UserPage {...params} /> : <UsersListPage />}</>;
};

export default Users;
