import React from "react";
import PropTypes from "prop-types";
import UserEditForm from "../../ui/userEditForm";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const UserEditPage = () => {
  const { userId } = useParams();
  return <UserEditForm userId={userId} />;
};

UserEditPage.propTypes = {
  userId: PropTypes.string
};

export default UserEditPage;
