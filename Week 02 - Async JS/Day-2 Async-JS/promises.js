function setTimeoutPromisified(ms){ //This is a function that takes ms (milliseconds) as an argument.
    // Create a new Promise. It takes a function with 'resolve' as a parameter.
    //setTimeout will wait for ms milliseconds, and then call the resolve() function
    let p=new Promise(resolve =>setTimeout(resolve,ms));
    return p;
}
function callback(){
    console.log("3 seconds have pased");
}
//Call the function and tell it: “Wait for 3000 milliseconds (3 seconds).”
//After the time passes, .then(callback) runs the callback() function.
setTimeoutPromisified(3000).then(callback);