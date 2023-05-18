import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import API from "../../../api/index.api";
import TextField from "../../common/form/textField";
import validationSchema from "../../../utils/validators/yup/validationSchema";
import SelectField from "../../common/form/selectField";
import formatData from "../../../utils/formatData";
import Spinner from "../../page/templates/spinner.jsx";
import {
  Link,
  useHistory,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
import MultiSelectField from "../../common/form/multiSelectField";
import RadioField from "../../common/form/radioField";
import { genderOptions } from "../../../utils/data/fieldsOptions";

// TODO Исправить formatData(profession)
// TODO Исправить value label в defaultValue

const UserEditForm = () => {
  const { userId } = useParams();
  const history = useHistory();
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    profession: "",
    gender: "",
    qualities: []
  });

  const [errors, setErrors] = useState({});
  const [professions, setProfessions] = useState([]);
  const [qualities, setQualities] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    API.users.getById(userId).then(({ profession, qualities, ...user }) => {
      setInputFields((prev) => ({
        ...prev,
        ...user,
        profession: formatData([profession])[0].value,
        qualities: formatData(qualities)
      }));
    });
    API.professions.fetchAll().then((profs) => {
      const profsArray = formatData(profs);
      setProfessions(profsArray);
    });
    API.qualities.fetchAll().then((quals) => {
      const qualsArray = formatData(quals);
      setQualities(qualsArray);
    });
  }, []);

  useEffect(() => {
    const isLoaded = Object.values(inputFields).every(
      (fieldVal) => fieldVal !== ""
    );
    if (isLoaded) {
      setIsDataLoaded(true);
    }
  }, [inputFields]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    validationSchema
      .validate(inputFields, { abortEarly: false })
      .then(setErrors({}))
      .catch(({ inner }) => {
        for (const error of inner) {
          setErrors((prev) => ({
            ...prev,
            [error.path]: error.message
          }));
        }
      });
  }, [inputFields]);

  const handleBtnSave = () => {
    history.push(`/users/${userId}`);
  };

  return (
    <Form>
      {isDataLoaded ? (
        <>
          <TextField
            label="Имя"
            name="name"
            value={inputFields.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <TextField
            label="Email"
            name="email"
            value={inputFields.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <SelectField
            label="Профессия"
            name="profession"
            value={inputFields.profession}
            onChange={handleInputChange}
            options={professions}
            error={errors.profession}
          />
          <RadioField
            label="Пол"
            name="gender"
            value={inputFields.gender}
            options={genderOptions}
            onChange={handleInputChange}
          />
          <MultiSelectField
            label="Качества"
            name="qualities"
            defaultValue={inputFields.qualities}
            options={qualities}
            onChange={handleInputChange}
          />
          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-primary "
              onClick={handleBtnSave}
            >
              Сохранить
            </button>
            <Link to={`/users/${userId}`}>
              <button className="btn btn-primary">Назад</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="ms-3">
          <Spinner />
        </div>
      )}
    </Form>
  );
};

export default UserEditForm;
