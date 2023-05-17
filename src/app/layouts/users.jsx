import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import UserPage from "../components/page/userPage";
import UserEditPage from "../components/page/userPage/userEditPage.jsx";
import UsersListPage from "../components/page/usersListPage";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      {userId ? (
        edit ? (
          <UserEditPage />
        ) : (
          <UserPage userId={userId} />
        )
      ) : (
        <UsersListPage />
      )}
    </>
  );
};

export default Users;
