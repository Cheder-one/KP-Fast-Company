const isRequired = (value) => Boolean(value.trim());

const isEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

const isStrongPass = (value) => {
  const regexps = {
    capital: /[A-ZА-Я]+/,
    digit: /\d+/
  };
  const results = Object.values(regexps).map((regexp) => regexp.test(value));
  return results.every((result) => result);
};

const minLength = (value, allowValue) => {
  return value.length > allowValue;
};

export { isRequired, isEmail, isStrongPass, minLength };
