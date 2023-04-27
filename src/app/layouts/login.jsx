import React, { useEffect, useState } from "react";
import TextField from "../utils/templates/textField";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    const validationErrors = {};
    for (const fieldName in data) {
      if (data[fieldName].trim() === "") {
        validationErrors[
          fieldName
        ] = `Поле "${fieldName}" не может быть пустым`;
      }
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  const { email, password } = data;

  return (
    <form className="d-inline-block mx-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <TextField
          label={"Email:"}
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
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
