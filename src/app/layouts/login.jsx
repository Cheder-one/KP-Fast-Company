import React, { useState } from "react";
import LoginForm from "../components/ui/entry-forms/loginForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import RegisterForm from "../components/ui/entry-forms/registerForm";

const Login = () => {
  const { type } = useParams();
  // Если опциональный URL === "register", то форма регистрации
  // Если опциональный URL любой иной, то форма логин
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">
            {formType === "register" ? "Registration" : "Login"}
          </h3>

          {formType === "register" ? (
            <RegisterForm text={"Регистрация"} />
          ) : (
            <LoginForm text={"Вход"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
