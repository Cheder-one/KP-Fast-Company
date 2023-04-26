import React, { useState } from "react";
import TextField from "../../utils/templates/textField";

const IssueForm = () => {
  const [values, setValues] = useState({
    email: "",
    link: "",
    desc: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
            label={"Ссылка на страницу с ошибкой:"}
            type="text"
            id="link"
            name="link"
            value={link}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <TextField
            label={"Описание:"}
            type="text"
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
