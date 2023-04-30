export default {
  isRequired: (value) => Boolean(value.trim()),
  isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  isUrl: (value) => /^https?:\/\/(www.)?[^\s]+$/g.test(value),
  isStrongPass: (value) => /(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)/g.test(value),
  minLength: (value, allowValue) => value.length > allowValue,
  maxLength: (value, allowValue) => value.length < allowValue
};

/*
export const isRequired = (value) => Boolean(value.trim());

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isUrl = (value) => /^https?:\/\/\S+$/.test(value);

export const isStrongPass = (value) =>
  /(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)/g.test(value);

export const minLength = (value, allowValue) => {
  // const { allowValue } = config.password.minLength;
  return value.length > allowValue;
};

export const maxLength = (value, allowValue) => {
  // const { allowValue } = config.description.maxLength;
  return value.length < allowValue;
};
*/
