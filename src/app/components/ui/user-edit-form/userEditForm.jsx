import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import TextField from "../../common/form/textField";
import validationSchema from "../../../utils/validators/yup/validationSchema";
import SelectField from "../../common/form/selectField";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserEditForm = () => {
  const params = useParams();
  const { userId } = params;
  const [inputFields, setInputFields] = useState({
    fio: "",
    email: "",
    profession: "",
    gender: "",
    qualities: []
  });

  const [errors, setErrors] = useState({});

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
        name="fio"
        value={inputFields.fio}
        onChange={handleInputChange}
        error={errors.fio}
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
        options={[]}
        error={errors.profession}
      />
    </Form>
  );
};

export default UserEditForm;
