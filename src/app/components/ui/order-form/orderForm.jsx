import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import TextField from "../../common/form/textField";
import { validate } from "../../../utils/validators/validate";
import { orderFormSchema } from "../../../utils/validators/validationSchema";
import SelectField2 from "../../../../archive/selectField2";
import {
  deliveryTypeList,
  giftList,
  needLiftFloorOptions
} from "./fieldsOptions";
import RadioField2 from "../../../../archive/radioField2";
import MultiSelectField2 from "../../../../archive/multiSelectField2";

const OrderForm = () => {
  const [inputFields, setInputFields] = useState({
    fio: "",
    email: "",
    deliveryType: "",
    needLift: "",
    gifts: []
  });

  const {
    fio: fioValue,
    email: emailValue,
    deliveryType: selectedDelivery,
    needLift: isNeedLift,
    gifts: selectedGifts
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
    if (isFormValid) {
      console.log(inputFields);
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
        <RadioField2
          label="Нужен подъем на этаж?"
          name="needLift"
          value={isNeedLift}
          onChange={handleChange}
          options={needLiftFloorOptions}
          error={errors.needLift}
        />
        <MultiSelectField2
          label="Выберите подарок за первый заказ"
          name="gifts"
          value={selectedGifts}
          options={giftList}
          onChange={handleChange}
        />
        <button className="btn btn-primary w-100 mx-auto" type="submit">
          Оформить
        </button>
      </form>
    </Form>
  );
};

export default OrderForm;
