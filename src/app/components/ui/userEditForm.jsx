import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "../../layouts/form";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const UserEditForm = ({ userId, name, profession, qualities }) => {
  const [inputFields, setInputFields] = useState({
    fio: name,
    email: "",
    profession,
    gender: "",
    qualities: [qualities]
  });

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
  };

  return (
    <Form>
      <TextField
        label="Имя"
        name="fio"
        value={inputFields.fio}
        onChange={handleChange}
        error={errors.fio}
      />
      <TextField
        label="Электронная почта"
        name="email"
        value={inputFields.email}
        onChange={handleChange}
        error={errors.email}
      />
      <SelectField
        label="Профессия"
        name="profession"
        value={inputFields.profession}
        options={[]}
        onChange={handleChange}
        error={errors.profession}
      />
      <RadioField
        label="Ваш пол"
        name="gender"
        value={inputFields.gender}
        options={[
          { name: "Мужской", value: "male" },
          { name: "Женский", value: "female" },
          { name: "Не указан", value: "other" }
        ]}
        onChange={handleChange}
        error={errors.gender}
      />
      <MultiSelectField
        label={"Ваши качества"}
        name="qualities"
        value={inputFields.qualities}
        options={[]}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => history.push(`/users/${userId}`)}
      >
        Сохранить
      </button>
    </Form>
  );
};

UserEditForm.propTypes = {
  userId: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.shape({
    name: PropTypes.string
  }),
  qualities: PropTypes.array
};

export default UserEditForm;
