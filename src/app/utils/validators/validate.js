import validateRules from "./validateRules";

export const validate = (inputFields, config) => {
  const errors = {};

  for (const field in inputFields) {
    const fieldVal = inputFields[field];
    const rulesForField = config[field];

    for (const ruleName in rulesForField) {
      const { message, allowValue } = rulesForField[ruleName];

      const validator = validateRules[ruleName];
      const hasError = validator && !validator(fieldVal, allowValue);

      if (hasError) {
        errors[field] = message;
        break;
      }
    }
  }
  return errors;
};
