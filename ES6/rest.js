// ex2
const object1 = {
  name: "Javascript",
};
const object2 = {
  price: 1000,
};
const object3 = {
  ...object1,
  ...object2,
};
console.log(object3); // {name:"Javascript", price:1000}
// ex3

const defaultConfig = {
  api: "https://www.google.com",
  apiVersion: "v1",
  other: "other",
};
const exerciseConfig = {
  ...defaultConfig,
  api: "https://www.google.com", // ghi de gia tri api
};
// ex4
const courses = ["Javascript", "PHP", "Ruby"];
// function logger(...rest) {
//   for (let i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// }
const logger = (...rest) => {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
};
logger(...courses);

//todo: rest: truyền tham số
const restItem = (...args) => console.log(args);
restItem(2, 3, 4, 1, 2);

const sum = (...numbers) => {
  return numbers.reduce((sum, val) => {
    return (sum += val);
  });
};
