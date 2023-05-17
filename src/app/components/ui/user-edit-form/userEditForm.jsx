import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import TextField from "../../common/form/textField";
import validationSchema from "../../../utils/validators/yup/validationSchema";

const UserEditForm = () => {
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
      .then()
      .catch((err) => {
        console.log(err);
        setErrors(err);
      });
  }, [inputFields]);

  return (
    <Form>
      <TextField
        label="Имя"
        name="fio"
        value={inputFields.fio}
        onChange={handleInputChange}
        error=""
      />
      <TextField
        label="Email"
        name="email"
        value={inputFields.email}
        onChange={handleInputChange}
        error=""
      />
    </Form>
  );
};

export default UserEditForm;
