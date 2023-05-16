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
import { convertProfKeys, convertQualKeys } from "../../utils/convertKeys";
import Spinner from "../page/templates/spinner";

const UserEditForm = ({ userId }) => {
  const [userById, setUserById] = useState({});
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    profession: "",
    gender: "",
    qualities: []
  });
  const [professions, setProfessions] = useState([]);
  const [qualities, setQualities] = useState([]);

  /** Получение данных */
  useEffect(() => {
    API.users.getById(userId).then((user) => {
      setUserById({
        ...user,
        profession: convertProfKeys([user.profession])[0],
        qualities: convertQualKeys(user.qualities)
      });
    });

    API.professions.fetchAll().then((profs) => {
      const professionsList = convertProfKeys(profs);
      setProfessions(professionsList);
    });

    API.qualities.fetchAll().then((quals) => {
      const qualitiesList = convertQualKeys(quals);
      setQualities(qualitiesList);
    });
  }, []);

  const isUserHasData = Object.keys(userById).length > 0;

  /** Установка данных в досье */
  useEffect(() => {
    isUserHasData &&
      setInputFields(() => ({
        name: userById.name,
        email: userById.email,
        profession: userById.profession.value,
        gender: userById.gender,
        qualities: userById.qualities
      }));
  }, [userById]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setInputFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const getProfessionById = (id) => {
    for (const prof of professions) {
      if (prof.value === id) {
        return { _id: prof.value, name: prof.label };
      }
    }
  };
  const getQualities = (elements) => {
    const qualitiesArray = [];
    for (const elem of elements) {
      for (const quality in qualities) {
        if (elem.value === qualities[quality].value) {
          qualitiesArray.push({
            _id: qualities[quality].value,
            name: qualities[quality].label,
            color: qualities[quality].color
          });
        }
      }
    }
    return qualitiesArray;
  };

  const handleClickSave = () => {
    const { profession, qualities } = inputFields;
    const initialFormatData = {
      ...inputFields,
      profession: getProfessionById(profession),
      qualities: getQualities(qualities)
    };
    API.users.update(userId, initialFormatData);
    history.push(`/users/${userId}`);
  };

  const handleClickBack = () => {
    history.push(`/users/${userId}`);
  };

  return (
    <Form>
      {isUserHasData ? (
        <>
          <TextField
            label="Имя"
            name="name"
            value={inputFields.name}
            onChange={handleChange}
            // error={errors.name}
          />
          <TextField
            label="Электронная почта"
            name="email"
            value={inputFields.email}
            onChange={handleChange}
            // error={errors.email}
          />
          <SelectField
            label="Профессия"
            name="profession"
            value={inputFields.profession}
            defaultOptions={userById.profession.label}
            options={professions}
            onChange={handleChange}
            // error={errors.profession}
          />
          <RadioField
            label="Ваш пол"
            name="gender"
            value={inputFields.gender}
            options={genderOptions}
            onChange={handleChange}
            // error={errors.gender}
          />
          <MultiSelectField
            label={"Ваши качества"}
            name="qualities"
            defaultValue={userById.qualities}
            options={qualities}
            onChange={handleChange}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={handleClickSave}
          >
            Сохранить
          </button>
          <button
            type="submit"
            className="btn btn-primary ms-2"
            onClick={handleClickBack}
          >
            Назад
          </button>
        </>
      ) : (
        <Spinner />
      )}
    </Form>
  );
};

UserEditForm.propTypes = {
  userId: PropTypes.string,
  userById: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    profession: PropTypes.object,
    gender: PropTypes.string,
    qualities: PropTypes.array
  })
};

export default UserEditForm;
