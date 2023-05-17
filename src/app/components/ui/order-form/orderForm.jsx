import React, { useEffect, useState } from "react";
import Form from "../../../layouts/form";
import TextField from "../../common/form/textField";
import SelectField2 from "../../../../archive/selectField2";
import RadioField2 from "../../../../archive/radioField2";
import MultiSelectField2 from "../../../../archive/multiSelectField2";
import CheckboxField from "../../../../archive/checkboxField";
import { validate } from "../../../utils/validators/default/validate";
import { orderFormSchema } from "../../../utils/validators/default/validationSchema";
import {
  deliveryTypeList,
  giftList,
  needLiftFloorOptions,
  agreements
} from "../../../utils/data/fieldsOptions";
import SingleCheckboxField from "../../../../archive/singleCheckboxField";
import * as yup from "yup";

const OrderForm = () => {
  const [inputFields, setInputFields] = useState({
    fio: "",
    email: "",
    address: "",
    deliveryType: "",
    needLift: "",
    gifts: [],
    agreements: [],
    test: true
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const addressSchema = yup.string().required("Введите адрес");

  useEffect(() => {
    addressSchema
      .validate(inputFields.address)
      .then()
      .catch((err) => {
        setErrors((prev) => ({
          ...prev,
          address: err.message
        }));
      });

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
          value={inputFields.fio}
          onChange={handleChange}
          error={errors.fio}
        />
        <TextField
          label="Email"
          name="email"
          value={inputFields.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          id="address"
          name="address"
          label="Адрес"
          value={inputFields.address}
          onChange={handleChange}
          error={errors.address}
        />

        <SelectField2
          label="Выберите тип доставки"
          name="deliveryType"
          value={inputFields.deliveryType}
          onChange={handleChange}
          options={deliveryTypeList}
          error={errors.deliveryType}
        />
        <RadioField2
          label="Нужен подъем на этаж?"
          name="needLift"
          value={inputFields.needLift}
          onChange={handleChange}
          options={needLiftFloorOptions}
          error={errors.needLift}
        />
        <MultiSelectField2
          label="Выберите подарок за первый заказ"
          name="gifts"
          value={inputFields.gifts}
          options={giftList}
          onChange={handleChange}
        />
        <CheckboxField
          options={agreements}
          name="agreements"
          value={inputFields.agreements}
          onChange={handleChange}
          error={errors.agreements}
        />
        <SingleCheckboxField
          name="test"
          onChange={handleChange}
          value={inputFields.test}
          label="Проверка"
          checked={inputFields.test}
          error={errors.test}
        />
        <button className="btn btn-primary w-100 mx-auto" type="submit">
          Оформить
        </button>
      </form>
    </Form>
  );
};

export default OrderForm;
