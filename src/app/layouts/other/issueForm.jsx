import React, { useState } from "react";

const IssueForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // do something...
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div>
      <h2>Отчёт об ошибке</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email:</label>{" "}
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </p>
        <p>
          <label htmlFor="link">Ссылка на страницу с ошибкой:</label>{" "}
          <input id="link" name="link" />
        </p>

        <p>
          <label htmlFor="description">Описание:</label>{" "}
          <input id="description" name="description" />
        </p>

        <button className="btn btn-outline-primary" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
