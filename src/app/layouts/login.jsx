/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import LoginForm from "../components/ui/entry-forms/loginForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import RegisterForm from "../components/ui/entry-forms/registerForm";

const Login = () => {
  const { type } = useParams();
  // Если опциональный URL === "register", то => отображаем форму регистрации
  // Если опциональный URL любой иной, то => отображаем форму логина
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFormType = () => {
    setFormType((prev) => (prev === "register" ? "login" : "register"));
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4 fw-bold">
            {formType === "register" ? "Registration" : "Login"}
          </h3>
          {formType === "register" ? (
            <>
              <RegisterForm text={"Регистрация"} />
              <div className="mt-1">
                Already have an account?{" "}
                <a role="button" onClick={toggleFormType}>
                  <span className="text-primary">Login</span>
                </a>
              </div>
            </>
          ) : (
            <>
              <LoginForm text={"Вход"} />
              <div className="mt-1">
                Don't have an account?{" "}
                <a role="button" onClick={toggleFormType}>
                  <span className="text-primary">SignUp</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
