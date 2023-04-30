import React, { useEffect, useState } from "react";
import TextField from "../../utils/templates/textField";
import { validate } from "../../utils/validators/validate";
import { issueFormSchema } from "../../utils/validators/validationSchema";
const IssueForm = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    link: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const foundErrors = validate(inputFields, issueFormSchema);

  useEffect(() => {
    setErrors(foundErrors);
  }, [inputFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.keys(foundErrors).length !== 0;
    if (hasErrors) return;
    console.log(inputFields);
  };

  const { email, link, description } = inputFields;

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
            error={errors.email}
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
            error={errors.link}
          />
        </div>

        <div className="form-group">
          <TextField
            label={"Описание:"}
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
            error={errors.description}
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
