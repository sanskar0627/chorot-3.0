function age(n:number){
    if(n >=18){
        return true;
    }
    else{
        return false;
    }
}

console.log(age(20)); // true
console.log(age(18)); // true
console.log(age(16)); // false
