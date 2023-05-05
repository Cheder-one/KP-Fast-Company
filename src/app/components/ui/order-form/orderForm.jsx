import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import TextField from "../../common/form/textField";
import { validate } from "../../../utils/validators/validate";
import { orderFormSchema } from "../../../utils/validators/validationSchema";
import SelectField2 from "../../../../archive/selectField2";

const OrderForm = () => {
  const [inputFields, setInputFields] = useState({
    fio: "",
    email: "",
    delivery: ""
  });
  const { fio, email, delivery } = inputFields;
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
        <SelectField2
          label="Выберете вариант доставки:"
          name="delivery"
          value={delivery}
          onChange={handleChange}
          options={{}}
          error={errors.delivery}
        />
        <button className="btn btn-primary w-100 mx-auto" type="submit">
          Оформить
        </button>
      </form>
    </Form>
  );
};

export default OrderForm;
