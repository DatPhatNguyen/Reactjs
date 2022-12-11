//! Ex1
const sum = (a, b) => ({
  a: a,
  b: b,
});
console.log(sum(5, 10));

//! Ex2
const logger = (log) => console.log(log);
logger("Hello world");

//! Ex3
//? function khong su dung arrow function duoc
const course = {
  name: "Javascript",
  getName: function () {
    return this;
  },
};

//! Ex4 : khong the lam function constructor
//! Truong hop loi
// const Course =  (name, price) => {
//     this.name = name;
//     this.price = price;
//   };

const Course = function (name, price) {
  this.name = name;
  this.price = price;
};
const jsCourse = new Course("javascript", 700);
console.log(jsCourse);

//! Ex5

const outPutLogger = (...message) => {
  console.log(message);
};
outPutLogger(1, 2, 3, 4, 5, 6, 7, 8);
/*
[
    1, 2, 3, 4,
    5, 6, 7, 8  
    ]
  */
