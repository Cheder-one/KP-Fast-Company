import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Имя должно содержать минимум 3 символа")
    .required("Имя обязательно для заполнения"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Email обязателен для заполнения")
});

export default validationSchema;
