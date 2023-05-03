import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validate } from "../../utils/validators/validate";
import { loginSchema } from "../../utils/validators/validationSchema";

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const foundErrors = validate(inputFields, loginSchema);

  useEffect(() => {
    setErrors(foundErrors);
  }, [inputFields]);

  const hasErrors = Object.keys(foundErrors).length !== 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasErrors) return;
    console.log(inputFields);
  };

  const { email, password } = inputFields;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <form className="mx-3" onSubmit={handleSubmit}>
            <h3 className="mb-4">Login</h3>
            <div className="form-group">
              <TextField
                label={"Email:"}
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                error={errors.email}
              />
            </div>
            <div className="form-group">
              <TextField
                label={"Пароль:"}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                error={errors.password}
              />
            </div>
            <button
              disabled={hasErrors}
              className={"btn btn-primary w-100 mx-auto"}
              type="submit"
            >
              Вход
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
