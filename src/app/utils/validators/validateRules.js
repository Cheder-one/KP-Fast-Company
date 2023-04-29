export const isRequired = (value) => Boolean(value.trim());

export const isEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

export const isPassword = (value) => {
  const capitalRegex = /[A-ZА-Я]+/;
  const digitRegex = /\d+/;
  const lengthRegex = /.{8,}/;
  const regex = /^[A-Za-zА-Яа-я\d]+$/g;
  return regex.test(value);
};

isPassword(" ");
isPassword("%d");
isPassword("Abc123");
isPassword("Passw0rd");
isPassword("PassWord123");

isPassword("password");
isPassword("PASSWORD");
isPassword("123456");
isPassword("Pass word 123");
