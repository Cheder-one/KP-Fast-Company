export const isRequired = (value) => Boolean(value.trim());

export const isEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

export const isPassword = (value) => Boolean(value.trim());
