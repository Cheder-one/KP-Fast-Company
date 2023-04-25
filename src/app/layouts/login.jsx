import React, { useState } from "react";

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

  return (
    <form className="d-inline-block mx-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Email:{" "}
          <input
            className="form-control"
            type="text"
            name={"email"}
            value={data.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Пароль:{" "}
          <input
            className="form-control"
            type="password"
            name={"pass"}
            value={data.pass}
            onChange={handleInputChange}
          />
        </label>
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
