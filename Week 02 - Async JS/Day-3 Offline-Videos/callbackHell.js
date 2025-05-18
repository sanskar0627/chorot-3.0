/*
Q: Write code that
    - logs Hi after 1 second
    - logs Hello 3 seconds after step 1
    - logs Hello There 5 seconds after step 2
*/
// Has Callback Hell - Print Hi, Hello, Hello There in sequence with 1, 3, 5 seconds delay
// Traditinal Method
/*
setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
        console.log("Hello");
        setTimeout(function () {
            console.log("Hello There");
        }, 5000)
    }, 3000)
}, 1000);

setTimeout(function(){
    console.log("Just Checking");
},4000)
*/
/*
setTimeoutPromisifed(1000).then(function(){
    console.log("hii");
    setTimeoutPromisifed(3000).then(function(){
        console.log("Hello");
        setTimeoutPromisifed(5000).then(function(){
            console.log("Good Morning");
        })
    })
})
    */
function setTimeoutPromisifed(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
    

//Using Asyc await
async function solve(){
    await setTimeoutPromisifed(1000);
    console.log("hii");
    await setTimeoutPromisifed(1000);
    console.log("hello");
    await setTimeoutPromisifed(1000);
    console.log("hi there");
}
solve();
console.log("Outside of the code");