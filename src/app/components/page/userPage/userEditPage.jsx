import React from "react";
import UserEditForm from "../../ui/userEditForm";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const UserEditPage = () => {
  const params = useParams();

  return <UserEditForm />;
};

export default UserEditPage;
