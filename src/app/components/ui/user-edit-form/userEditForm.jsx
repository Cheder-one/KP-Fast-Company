import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import API from "../../../api/index.api";
import TextField from "../../common/form/textField";
import validationSchema from "../../../utils/validators/yup/validationSchema";
import SelectField from "../../common/form/selectField";
import Spinner from "../../page/templates/spinner.jsx";
import {
  Link,
  useHistory,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
import MultiSelectField from "../../common/form/multiSelectField";
import RadioField from "../../common/form/radioField";
import { genderOptions } from "../../../utils/data/fieldsOptions";
import transformData from "../../../utils/formattingData/transformData";
import {
  undoTransformQuals,
  undoTransformProfs
} from "../../../utils/formattingData/undoTransformData";

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

  const [professions, setProfessions] = useState([]);
  const [qualities, setQualities] = useState([]);
  const [loadCount, setLoadCount] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    API.users.getById(userId).then(({ profession, qualities, ...user }) => {
      setInputFields((prev) => ({
        ...prev,
        ...user,
        profession: profession._id,
        qualities: transformData(qualities)
      }));
      setLoadCount((prev) => prev + 1);
    });
    API.professions.fetchAll().then((profs) => {
      const profsArray = transformData(profs);
      setProfessions(profsArray);
      setLoadCount((prev) => prev + 1);
    });
    API.qualities.fetchAll().then((quals) => {
      const qualsArray = transformData(quals);
      setQualities(qualsArray);
      setLoadCount((prev) => prev + 1);
    });
  }, []);

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
    const { profession, qualities } = inputFields;
    const userProf = professions.find((prof) => prof.value === profession);

    API.users
      .update(userId, {
        ...inputFields,
        profession: undoTransformProfs(userProf),
        qualities: undoTransformQuals(qualities)
      })
      .then(() => history.push(`/users/${userId}`));
  };

  return (
    <Form>
      {loadCount >= 3 ? (
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
