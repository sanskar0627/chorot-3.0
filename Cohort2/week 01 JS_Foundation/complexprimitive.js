//write an proghram to print all the even number in the array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans = arr.filter(n => n % 2 == 0);
console.log(ans);
let b = 0;
for (let i = 0; i < arr.length; i++) {

    if (arr[i] > b) {
        b = arr[i];
    }
}
console.log(b);



///write an code to print the  name of male person first name given a complex object
const data = {
  people: [
    { firstName: "Sanskar", gender: "male" },
    { firstName: "Riya", gender: "female" },
    { firstName: "Aman", gender: "male" }
  ]
};
for(let i of data.people){
  if(i.gender==="male"){
    console.log(i.firstName);
  }

}
// write an program that reverse the lement in the array 

for (let i = arr.length -1; i >=0; i--) {

   console.log(arr[i]);
}

