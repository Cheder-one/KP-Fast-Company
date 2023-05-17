import * as y from "yup";

const validationSchema = y.object().shape({
  fio: y
    .string()
    .min(3, "Имя минимум 3 символа")
    .required("Имя обязательно для заполнения"),
  email: y.string().email().required("Email обязателен для заполнения")
});

export default validationSchema;
