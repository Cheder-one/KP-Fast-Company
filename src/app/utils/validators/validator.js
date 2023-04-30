import { isEmail, isStrongPass, isRequired, minLength } from "./validateRules";

export const validate = (inputFields, config) => {
  const errors = {};

  for (const field in inputFields) {
    const fieldVal = inputFields[field];
    const rulesForField = config[field];

    for (const rule in rulesForField) {
      const { message } = rulesForField[rule];
      const hasError = !validator(rule, fieldVal);

      if (hasError) {
        errors[field] = message;
        break;
      }
    }
  }
  return errors;

  function validator(ruleName, value) {
    const { allowValue } = config.password.minLength;
    switch (ruleName) {
      case "isRequired":
        return isRequired(value);
      case "isEmail":
        return isEmail(value);
      case "isStrongPass":
        return isStrongPass(value);
      case "minLength":
        return minLength(value, allowValue);
      default:
        return true;
    }
  }
};
