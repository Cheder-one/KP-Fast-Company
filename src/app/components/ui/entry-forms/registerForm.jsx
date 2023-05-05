import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField";
import { validate } from "../../../utils/validators/validate";
import { loginSchema } from "../../../utils/validators/validationSchema";
import API from "../../../api/index.api";

const RegisterForm = ({ text }) => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    profession: ""
  });
  const { email, password, profession: selectedProf } = inputFields;

  const [errors, setErrors] = useState({});

  const [professions, setProfessions] = useState();
  useEffect(() => {
    API.professions.fetchAll().then((profs) => {
      setProfessions(profs);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const foundErrors = validate(inputFields, loginSchema);

  useEffect(() => {
    setErrors(foundErrors);
  }, [inputFields]);

  const hasErrors = Object.keys(foundErrors).length !== 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasErrors) return;
    console.log(inputFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={"Email:"}
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <TextField
        label={"Пароль:"}
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        error={errors.password}
      />
      <div className="mb-4">
        <label htmlFor="profFormSelect" className="form-label">
          Ваша профессия:
        </label>
        <select
          className="form-select"
          id="profFormSelect"
          name="profession"
          value={selectedProf}
          onChange={handleInputChange}
        >
          <option disabled value="">
            Choose...
          </option>
          {professions &&
            Object.keys(professions).map((profName) => {
              const profInfo = professions[profName];
              return (
                <option key={profInfo._id} value={profInfo._id}>
                  {profInfo.name}
                </option>
              );
            })}
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <button
        disabled={hasErrors}
        className={"btn btn-primary w-100 mx-auto"}
        type="submit"
      >
        {text}
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  text: PropTypes.string
};

export default RegisterForm;
