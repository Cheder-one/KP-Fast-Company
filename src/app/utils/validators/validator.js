import { isRequired } from "./validateRules";

export const validate = (inputFields, config) => {
  const errors = {};

  for (const field in inputFields) {
    const fieldVal = inputFields[field];
    const rulesForField = config[field];

    // Смотрим поле на установленные правила для него
    for (const rule in rulesForField) {
      const { message, allowValue } = rulesForField[rule];

      // Запускаем проверку значения поля с по набору названий правил установленных для поля (isRequired, isEmail).
      const hasError = !validator(rule, fieldVal);

      if (hasError) {
        errors[field] = message;
        break;
      }
    }
  }
  return errors;
};

const validator = (ruleName, value) => {
  switch (ruleName) {
    // Для ruleName isRequired вызываем таковую функцию проверки
    case "isRequired":
      return isRequired(value);
    // case "isEmail":
    //   return isEmail(value);
    default:
      return true;
  }
};
