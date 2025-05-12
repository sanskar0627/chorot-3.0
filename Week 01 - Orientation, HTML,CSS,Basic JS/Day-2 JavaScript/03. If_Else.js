//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
function check(num){
    if(num%2==0){
        console.log("Even")
    }
    else{
        console.log("odd")
    }
}
check(0);
check(5);
check(10);
check(99);