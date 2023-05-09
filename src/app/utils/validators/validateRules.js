export default {
  isRequired: (value) =>
    typeof value === "boolean" ? value : Boolean(value.trim()),
  isContainValue: (value, param) => value.includes(param),
  isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  isUrl: (value) => /^https?:\/\/(www.)?[^\s]+$/g.test(value),
  isStrongPass: (value) => /(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)/g.test(value),
  minLength: (value, param) => value.length > param,
  maxLength: (value, param) => value.length < param,
  isFio: (value) =>
    /^(([a-zA-Zа-яА-Я]+)\s){1,}(([a-zA-Zа-яА-Я]+)\s?){1,}$/.test(value)
};

/*
export const isRequired = (value) => Boolean(value.trim());

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isUrl = (value) => /^https?:\/\/\S+$/.test(value);

export const isStrongPass = (value) =>
  /(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)/g.test(value);

export const minLength = (value, param) => {
  // const { param } = config.password.minLength;
  return value.length > param;
};

export const maxLength = (value, param) => {
  // const { param } = config.description.maxLength;
  return value.length < param;
};
*/
