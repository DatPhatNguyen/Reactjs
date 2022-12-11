const name = "Javascript";
const price = 1000;

//todo: Normal
// const course = {
//   name: name,
//   price: price,
// };
//todo: Enhance object literal
const course = {
  name,
  price,
};
console.log(course);
// Ex2

const fieldName = "name";
const fieldPrice = "price";

const courses = {
  [fieldName]: "Javascript",
  [fieldPrice]: 1000,
};
