import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import API from "../../../api/index.api";
import TextField from "../../common/form/textField";
import validationSchema from "../../../utils/validators/yup/validationSchema";
import SelectField from "../../common/form/selectField";
import formatData from "../../../utils/formattingData/formatData";
import Spinner from "../../page/templates/spinner.jsx";
import {
  Link,
  useHistory,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
import MultiSelectField from "../../common/form/multiSelectField";
import RadioField from "../../common/form/radioField";
import { genderOptions } from "../../../utils/data/fieldsOptions";
import initialFormatData from "../../../utils/formattingData/initialFormatData";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    API.users.getById(userId).then(({ profession, qualities, ...user }) => {
      setInputFields((prev) => ({
        ...prev,
        ...user,
        profession: formatData(profession).value,
        qualities: formatData(qualities)
      }));
      setIsLoaded(true);
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
    API.users.update(userId, {
      ...inputFields,
      profession: initialFormatData(userProf),
      qualities: initialFormatData(qualities)
    });

    history.push(`/users/${userId}`);
  };

  return (
    <Form>
      {isLoaded ? (
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
