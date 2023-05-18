import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import TextField from "../../common/form/textField";
import validationSchema from "../../../utils/validators/yup/validationSchema";
import SelectField from "../../common/form/selectField";
import {
  useHistory,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
import API from "../../../api/index.api";
import convertFormatData from "../../../utils/convertFormatData";

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
  const [userOptions, setUserOptions] = useState({});
  const [professions, setProfessions] = useState([]);
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    API.users.getById(userId).then(({ profession, qualities, ...user }) => {
      setInputFields((prev) => ({
        ...prev,
        ...user,
        profession: convertFormatData(profession),
        qualities: convertFormatData(qualities)
      }));
      // console.log({ profession, qualities, ...user });
    });
    API.professions.fetchAll().then((profs) => {
      const profsArray = convertFormatData(profs);
      setProfessions(profsArray);
    });
    API.qualities.fetchAll().then((quals) => {
      const qualsArray = convertFormatData(quals);
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

  return (
    <Form>
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
        // defaultOptions=""
        onChange={handleInputChange}
        options={professions}
        error={errors.profession}
      />
    </Form>
  );
};

export default UserEditForm;
