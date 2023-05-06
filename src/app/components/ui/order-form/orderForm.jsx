import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import TextField from "../../common/form/textField";
import { validate } from "../../../utils/validators/validate";
import { orderFormSchema } from "../../../utils/validators/validationSchema";
import SelectField2 from "../../../../archive/selectField2";
import { deliveryTypeList } from "./fieldsOptions";

const OrderForm = () => {
  const [inputFields, setInputFields] = useState({
    fio: "",
    email: "",
    deliveryType: ""
  });

  const {
    fio: fioValue,
    email: emailValue,
    deliveryType: selectedDelivery
  } = inputFields;

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [fieldName]: value
    }));
  };

  useEffect(() => {
    const foundErrors = validate(inputFields, orderFormSchema);
    setErrors(foundErrors);
  }, [inputFields]);

  const isFormValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fio = formData.get("fio");
    const email = formData.get("email");

    if (isFormValid) {
      console.log({ fio, email });
    }
  };

  return (
    <Form title="Оформление заказа">
      <form onSubmit={handleSubmit}>
        <TextField
          label="ФИО"
          name="fio"
          value={fioValue}
          onChange={handleChange}
          error={errors.fio}
        />
        <TextField
          label="Email"
          name="email"
          value={emailValue}
          onChange={handleChange}
          error={errors.email}
        />
        <SelectField2
          label="Выберите тип доставки"
          name="deliveryType"
          value={selectedDelivery}
          onChange={handleChange}
          options={deliveryTypeList}
          error={errors.deliveryType}
        />

        <button className="btn btn-primary w-100 mx-auto" type="submit">
          Оформить
        </button>
      </form>
    </Form>
  );
};

export default OrderForm;
