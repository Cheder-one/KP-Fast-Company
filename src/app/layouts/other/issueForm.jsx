import React, { useState } from "react";

const IssueForm = () => {
  const [values, setValues] = useState({
    email: "",
    link: "",
    desc: ""
  });

  const handleSubmit = () => {
    // do something...
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const { email, link, desc } = values;

  return (
    <div>
      <h2>Отчёт об ошибке</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>{" "}
          <input
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="link">Ссылка на страницу с ошибкой:</label>{" "}
          <input
            className="form-control"
            id="link"
            name="link"
            value={link}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание:</label>{" "}
          <input
            className="form-control"
            id="description"
            name="desc"
            value={desc}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <button className="btn btn-outline-primary" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
