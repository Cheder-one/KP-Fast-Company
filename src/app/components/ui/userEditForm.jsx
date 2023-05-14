import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../api/index.api";
import Form from "../../layouts/form";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { genderOptions } from "./order-form/fieldsOptions";

const UserEditForm = ({ userId }) => {
  const [userById, setUserById] = useState({});
  const [inputFields, setInputFields] = useState({
    name,
    email: "",
    profession: "",
    gender: "",
    qualities: []
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    API.users.getById(userId).then((user) => setUserById(user));
  }, []);

  useEffect(() => {
    setInputFields((prev) => ({
      ...prev,
      name: userById.name,
      email: userById.email,
      // profession: userById.profession,
      gender: userById.gender
      // qualities: userById.qualities
    }));
  }, [userById]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClickSave = () => {
    API.users.update(userId, inputFields);
    history.push(`/users/${userId}`);
  };

  return (
    <Form>
      {Object.keys(userById).length > 0 ? (
        <>
          <TextField
            label="Имя"
            name="name"
            value={inputFields.name}
            onChange={handleChange}
            error={errors.name}
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
            options={genderOptions}
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
            onClick={handleClickSave}
          >
            Сохранить
          </button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
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
