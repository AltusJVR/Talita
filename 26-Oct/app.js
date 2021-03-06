/* Spreading with arrays */
/* spread = concat */
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [...numbers, 6, 7, 8, 9];
const numbers3 = [...numbers2, "ten"];
const object = {
  value: 1,
  number: 20,
};
const numbers4 = [...numbers3, object];
// console.log(numbers, "numbers");
// console.log(numbers2, "numbers2");
// console.log(numbers3, "numbers3");
// console.log(numbers4, "numbers4");

// /* spreading with Objects */

const user = {
  name: "Betty",
  married: false,
  age: 25,
  occupation: "Engineer",
  userName: "DocJohn",
};

const newUser = { ...user, city: "Rio" };
// console.log(newUser, "newUser");

const user2 = {
  name: "John",
  married: true,
  age: 25,
  occupation: "Doctor",
  city: "Amparo",
};

const newUser2 = { ...user, ...user2 };
// console.log(newUser2, "newUser2");
// /* spread with objects and arrays */
const newUser3 = { ...user, favNums: numbers };
// console.log(newUser3, "newUser3");

const newUser4 = {
  name: "John",
  married: true,
  age: 25,
  occupation: "Doctor",
  city: "Amparo",
  userName: "DocJohn",
  favNums: numbers,
};

// console.log(newUser4, "newUser4");

const nums = { ...numbers };

// console.log(nums, "nums");

const users = [newUser4];

// [{ object }, { object }];
// console.log(users, "users");

const updateUsers = () => {
  return (updatedUsers = [...users, newUser4]);
};

console.log(updateUsers(), "update users");
