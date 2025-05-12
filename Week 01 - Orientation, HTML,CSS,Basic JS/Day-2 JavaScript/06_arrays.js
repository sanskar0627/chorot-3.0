//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
const Num = [32, 33, 16, 40,77,87,97,99];
const result = Num.filter(checkAdult);

function checkAdult(Num) {
  return Num%2==0;
}
result.sort();
console.log(result);