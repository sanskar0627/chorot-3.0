//Sum
function sum(a,b){
    return a+b;
}
let ans=sum(2,3);
console.log(ans);

//Sum of n natural numbers
function longsum(a){
    if (a==1){return 1;}
    return a+longsum(a-1);

}
let aans=longsum(99);
console.log(aans);