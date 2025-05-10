//Write a function called sum that finds the sum from 1 to a number
function sum(num){
    let add=0;
    for(let i=1;i<=num;i++){
        add+=i
    }
    console.log(add);
}
sum(5);