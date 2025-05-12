//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
const users = [
    { username: "Alice", age: 17 },
    { username: "Bob", age: 20 },
    { username: "Charlie", age: 16 },
    { username: "David", age: 25 }
];
const result = users.filter(check);
function check(users) {
    return users.age > 18;
}
console.log(result);