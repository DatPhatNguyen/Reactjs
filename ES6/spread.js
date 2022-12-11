// Ex1
const logger = ({ name, price, ...rest }) => console.log(name, price, rest);
logger({
  name: "Javascript",
  price: 1000,
  description: "Description content",
  date_created: "10/10/2010",
});

// Ex2
const numbers = ([a, b, ...rest]) => console.log(a, b, rest);
numbers([2, 6, 3, 5, 2, 1, 3, 2]);
//todo: spread: truyền đối số
//todo: rest: truyền tham số

//! spread:
//todo: copy array
const ocean = ["Scrimp", "Dolphin"];
const aquarium = [...ocean]; // copy array
console.log(aquarium);

//todo: copy Objects

const originalObject = {
  enable: true,
  darkMode: false,
};
const secondObject = {
  ...originalObject,
};
console.log(originalObject);
console.log(secondObject);

//todo:
