const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2); // false
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
