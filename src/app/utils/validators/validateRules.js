export const isRequired = (value) => Boolean(value.trim());

export const isEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

export const isPassword = (value) => {
  const regexps = {
    capital: /[A-ZА-Я]+/,
    digit: /\d+/
  };
  return Object.values(regexps)
    .map((regex) => regex.test(value))
    .every((check) => check === true);
};
