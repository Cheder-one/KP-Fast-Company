import React, { useEffect, useState } from "react";
import TextField from "../utils/templates/textField";
import { validate } from "../utils/validators/validate";
import { loginSchema } from "../utils/validators/validationSchema";

const Login = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.keys(foundErrors).length !== 0;
    if (hasErrors) return;
    console.log(inputFields);
  };

  const { email, password } = inputFields;

  return (
    <form
      className="mx-3"
      style={{ maxWidth: "250px" }}
      onSubmit={handleSubmit}
    >
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
      <div className="d-flex justify-content-end mt-2">
        <button className="btn btn-outline-primary" type="submit">
          Вход
        </button>
      </div>
    </form>
  );
};

export default Login;
