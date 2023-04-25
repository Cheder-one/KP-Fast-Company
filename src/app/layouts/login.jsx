import React, { useRef, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const inputRef = useRef();
  console.log(inputRef.current.value);

  return (
    <form action="">
      <div>
        <label>
          Email{" "}
          <input type="text" id="email" value={email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Пароль <input type="password" id="password" ref={inputRef} />
        </label>
      </div>
    </form>
  );
};

export default Login;
