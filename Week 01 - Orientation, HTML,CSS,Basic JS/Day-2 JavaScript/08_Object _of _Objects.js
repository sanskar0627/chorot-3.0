//Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
const users = [
  { username: "Alice", age: 17, gender: "female" },
  { username: "Bob", age: 20, gender: "male" },
  { username: "Charlie", age: 16, gender: "male" },
  { username: "David", age: 25, gender: "male" },
  { username: "Eva", age: 22, gender: "female" },
  { username: "Fiona", age: 19, gender: "female" },
  { username: "George", age: 18, gender: "male" }
];
const result = users.filter(check);
function check(users) {
    return users.age > 18 && users.gender=="male";
}
console.log(result);