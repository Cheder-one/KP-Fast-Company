import * as users from "./fake.api/user.api";

const API = {
  users
};
// users - это всего-лишь объект с референсом функции внутри. Обращаясь к users, мы ничего не вызываем и не получаем данных пользователей. Получаем мы только после вызова ключа с референсом функции fetchAll. Ключ передает вызов референсу и функция возвращает результат в виде api user-ов.
// ! И когда мы вызываем users.fetchAll(). Мы не вызываем напрямую функцию fetchAll() из файла user.api. Мы обращаемся к ключу fetchAll и вызываем его значение. То есть, из референса функции делаем вызов, с помощью вызова ключа.

export default API;
