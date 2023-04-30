export const isRequired = (value) => Boolean(value.trim());

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isUrl = (value) => /^https?:\/\/\S+$/.test(value);

export const isStrongPass = (value) =>
  /(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d).+/g.test(value);
isStrongPass("1Вв");
isStrongPass("1fff @ffffП   ");

export const minLength = (value, allowValue) => {
  // const { allowValue } = config.password.minLength;
  return value.length > allowValue;
};

export const maxLength = (value, allowValue) => {
  // const { allowValue } = config.description.maxLength;
  return value.length < allowValue;
};

export default {
  isRequired: (value) => Boolean(value.trim()),
  isEmail: (value) => /^https?:\/\/(www.)?[^\s]+$/g.test(value),

  min: (value, length) => value.length >= length,
  isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
  isContainDigit: (value) => /d+/g.test(value)
};
