import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField";
import { validate } from "../../../utils/validators/validate";
import { loginSchema } from "../../../utils/validators/validationSchema";
import API from "../../../api/index.api";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";

const RegisterForm = ({ entryBtnText }) => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    profession: "",
    gender: "other"
  });

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
        name="email"
        value={inputFields.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <TextField
        label={"Пароль:"}
        type="password"
        name="password"
        value={inputFields.password}
        onChange={handleInputChange}
        error={errors.password}
      />
      <SelectField
        lable="Ваша профессия:"
        name="profession"
        value={inputFields.profession}
        onChange={handleInputChange}
        options={professions}
        error={errors.profession}
      />
      <RadioField
        options={[
          { name: "Муж", value: "male" },
          { name: "Жен", value: "female" },
          { name: "Боевой Вертолет", value: "other" }
        ]}
        lable="Ваш пол:"
        name="gender"
        value={inputFields.gender}
        onChange={handleInputChange}
        error={errors.gender}
      />
      <button
        disabled={hasErrors}
        className={"btn btn-primary w-100 mx-auto"}
        type="submit"
      >
        {entryBtnText}
      </button>
    </form>
  );
};

RegisterForm.defaultProps = {
  entryBtnText: "Регистрация"
};

RegisterForm.propTypes = {
  entryBtnText: PropTypes.string
};

export default RegisterForm;
