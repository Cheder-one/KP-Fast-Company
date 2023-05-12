import React, { useState } from "react";
import Form from "../../layouts/form";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import { professions } from "../../api/fake.api/professions.api";
import { qualities } from "../../api/fake.api/qualities.api";

const UserEditForm = () => {
  const [inputFields, setInputFields] = useState({
    fio: "",
    email: "",
    profession: "",
    gender: "",
    qualities: []
  });

  const [errors, setErrors] = useState({});

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
      <button type="submit" className="btn btn-primary">
        Сохранить
      </button>
    </Form>
  );
};

export default UserEditForm;
