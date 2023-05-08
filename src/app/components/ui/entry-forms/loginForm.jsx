import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField";
import { validate } from "../../../utils/validators/validate";
import { loginSchema } from "../../../utils/validators/validationSchema";
import CheckboxField from "../../common/form/checkboxField";

const LoginForm = ({ entryBtnText }) => {
  const [inputFields, setInputFields] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({});

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
        value={inputFields.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <TextField
        label={"Пароль:"}
        type="password"
        id="password"
        name="password"
        value={inputFields.password}
        onChange={handleInputChange}
        error={errors.password}
      />
      <CheckboxField
        name="privacyPolicy"
        value={inputFields.privacyPolicy}
        onChange={handleInputChange}
      >
        Согласен с <a href="#">политикой конфиденциальности</a>
      </CheckboxField>
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

LoginForm.defaultProps = {
  entryBtnText: "Войти"
};

LoginForm.propTypes = {
  entryBtnText: PropTypes.string
};

export default LoginForm;
