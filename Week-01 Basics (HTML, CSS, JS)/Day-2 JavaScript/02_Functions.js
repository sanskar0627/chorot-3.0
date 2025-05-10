//Write a function sum that finds the sum of two numbers.
function sum(num1,num2){
    let add=num1+num2;
    console.log(add);
}
sum(3,4);
//Side quest - Try passing in a string instead of a number and see what happens?
sum("3","4");
//Write a function called canVote that returns true or false if the age of a user is > 18
function canVote(age){
    if(age >= 18){
        return true;
    }
    else{
        console.log("Not eligible");
        return false;
    }
}
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(5));  // false