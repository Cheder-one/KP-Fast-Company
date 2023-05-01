import React, { useEffect, useState } from "react";
import TextField from "../../utils/templates/textField";
import { validate } from "../../utils/validators/validate";
import { issueFormSchema } from "../../utils/validators/validationSchema";
const IssueForm = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    link: "",
    description: "",
    password: ""
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

  const hasErrors = Object.keys(foundErrors).length !== 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasErrors) return;
    console.log(inputFields);
  };

  const { email, link, description, password } = inputFields;

  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4">Отчёт об ошибке</h2>
        <div className="form-group">
          <TextField
            label="Email:"
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
            label="Ссылка на страницу с ошибкой:"
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
            label="Описание:"
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
            error={errors.description}
          />
        </div>
        <div className="form-group">
          <TextField
            label="Пароль:"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            error={errors.password}
          />
        </div>
        <button
          disabled={hasErrors}
          className="btn btn-primary w-100 mx-auto"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
