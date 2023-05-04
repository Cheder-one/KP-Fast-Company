import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./loginForm";

const RegisterForm = ({ text }) => {
  return <LoginForm text={text} />;
};

RegisterForm.propTypes = {
  text: PropTypes.string
};

export default RegisterForm;
