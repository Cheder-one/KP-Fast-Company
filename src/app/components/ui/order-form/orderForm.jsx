import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form.jsx";
import TextField from "../../common/form/textField.jsx";
import { validate } from "../../../utils/validators/validate.js";
import { orderFormSchema } from "../../../utils/validators/validationSchema.js";

const OrderForm = () => {
  const [inputFields, setInputFields] = useState({
    fio: "",
    email: ""
  });
  const { fio, email } = inputFields;
  const [errors, setErrors] = useState({});

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const foundErrors = validate(inputFields, orderFormSchema);
    setErrors(foundErrors);
  }, [inputFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Отправлено");
    }
  };

  return (
    <Form title="Оформление заказа">
      <form onSubmit={handleSubmit}>
        <TextField
          label="ФИО"
          id="fio"
          name="fio"
          value={fio}
          onChange={handleChange}
          error={errors.fio}
        />
        <TextField
          label="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          error={errors.email}
        />
        <button className="btn btn-primary w-100 mx-auto" type="submit">
          Оформить
        </button>
      </form>
    </Form>
  );
};

export default OrderForm;
