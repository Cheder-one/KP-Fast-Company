import React, { useState } from "react";
import TextField from "../components/templates/textField";

const Login = () => {
  const [data, setData] = useState({ email: "", pass: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    //
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
