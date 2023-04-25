import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ email: "", pass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form action="">
      <div>
        <label>
          Email{" "}
          <input
            type="text"
            name={"email"}
            value={data.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Пароль{" "}
          <input
            type="password"
            name={"pass"}
            value={data.pass}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
};

export default Login;
