import * as yup from "yup";

const validationSchema = yup.object().shape({
  fio: yup
    .string()
    .min(3, "Имя должно содержать минимум 3 символа")
    .required("Имя обязательно для заполнения"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Email обязателен для заполнения"),
  profession: yup.string().required("Профессия обязательно для заполнения")
});

export default validationSchema;
