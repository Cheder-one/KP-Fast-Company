import {
  isEmail,
  isStrongPass,
  isRequired,
  minLength,
  maxLength,
  isUrl
} from "./validateRules";

export const validate = (inputFields, config) => {
  const errors = {};

  for (const field in inputFields) {
    const fieldVal = inputFields[field];
    const rulesForField = config[field];

    for (const ruleName in rulesForField) {
      const { message, allowValue } = rulesForField[ruleName];
      const hasError = !validator(ruleName, fieldVal, allowValue);

      if (hasError) {
        errors[field] = message;
        break;
      }
    }
  }
  return errors;
};

function validator(ruleName, value, allowValue) {
  switch (ruleName) {
    case "isRequired":
      return isRequired(value);
    case "isEmail":
      return isEmail(value);
    case "isUrl":
      return isUrl(value);
    case "isStrongPass":
      return isStrongPass(value);
    case "minLength":
      return minLength(value, allowValue);
    case "maxLength":
      return maxLength(value, allowValue);
    default:
      return true;
  }
}
