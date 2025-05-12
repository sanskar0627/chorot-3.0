//Write a function that takes a user as an input and greets them with their name and age
let user1 = {
    username: "Sanskar",
    age: 21,
    gender: "Male"
};

let user2 = {
    username: "Riya",
    age: 22,
    gender: "Female"
};
function greets(){
    console.log("Hello sir "+user1.username+" your age is "+user1.age);
}
greets();
//Write a function that takes a new object as input which has name , age and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function genGreet(user){
    if(user.gender=="Male"){
        console.log("Hi Mr " + user.username + ", your age is " + user.age);
    }
    else{
        console.log("Hi Mrs " + user.username + ", your age is " + user.age);
    }
}
genGreet(user1);
genGreet(user2);
//Also tell the user if they are legal to vote or not
function check(user){
    if(user.age >= 18){
        console.log("Eligible");
    }
    else{
        console.log("Not eligible");
        
    }
}
check(user1);
check(user2);