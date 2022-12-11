const course = {
  name: "Javascript",
  price: 1000,
  image: " image-address",
  children: {
    name: "PHP",
  },
};

const {
  name: parentName,
  children: { name },
} = course;
console.log(parentName);
console.log(name);

//todo: bonus
const [a, b, c, ...d] = [1, 2, 3, 4, 5];
console.log(a, b, c, d); // 1 2 3 [ 4, 5 ]

//todo: bonus
const note = {
  id: 1,
  website: "facebok.com",
  user: "Dat Nguyen",
};
const { id, websiteUrl, user } = note;
console.log("Note: ", note);
console.log(id);
console.log(websiteUrl);
console.log(user);

//todo: bonus
const date = ["2022", "12", "12"];
const [year, month, day] = date;
console.log("Year", year, "Month", month, "Day", day);
console.log(year);
console.log(month);
console.log(day);
