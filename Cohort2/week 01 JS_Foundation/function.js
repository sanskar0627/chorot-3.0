
// 1. Write a function that finds the sum of two numbers
function findSum(a, b) {
    let sum=a+b
  console.log(sum);
  displayPretty(a,b,sum);
}

// 2. Write another function that displays this result in a pretty format
function displayPretty(a,b,sum) {
     console.log(`The sum of ${a} and ${b} is = ${sum}`);
     printPassive(sum);
}


// 3. Write another function that takes this sum and prints it in passive tense
function printPassive(sum) {
  // Prints the sum in passive voice
  console.log(`The result has been calculated as ${sum}.`);
}

findSum(4,5);
