import * as y from "yup";

const validationSchema = y.object().shape({
  fio: y.string().required("Имя обязательно для заполнения"),
  email: y.string().email().required("Email обязателен для заполнения")
});

export default validationSchema;
