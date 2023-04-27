import { isRequired } from "./validateRules";

export const validate = (inputFields) => {
  const errors = {};

  for (const field in inputFields) {
    const value = inputFields[field];
    const hasError = !isRequired(value);

    if (hasError) {
      errors[field] = `Поле ${field} обязательно`;
    }
  }
  return errors;
};
