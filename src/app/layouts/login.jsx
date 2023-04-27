import React, { useEffect, useState } from "react";
import TextField from "../utils/templates/textField";

const Login = () => {
  const [data, setData] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // const validate = (data) => {
  //   const errors = {};
  // }

  // useEffect(() => {
  //   setErrors(validate(data));
  // }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const { email, pass } = data;

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
          id="pass"
          name="pass"
          value={pass}
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
